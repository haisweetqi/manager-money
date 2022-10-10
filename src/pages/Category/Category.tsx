import React, { useEffect, useState } from "react"
import { Button, Modal, Space,  Table } from "antd"
import { ColumnsType } from "antd/lib/table"
import { DataTypeCategory } from "../../types/type"
import { Link, useNavigate } from "react-router-dom"

import CategoryService from "./services"

const Category = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()

    const [isEditing, setIsEditing] = useState<{
        id: undefined | number
        name: undefined | string
        userId: undefined | number
    }>({
        id: undefined,
        name: "",
        userId: undefined
    })
    const columns: ColumnsType<DataTypeCategory> = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id"
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name"
        },

        {
            title: "Action",
            key: "action",
            render: record => (
                <Space size="middle">
                    <Button danger onClick={() => handleDelete(record)}>
                        Delete
                    </Button>
                    <Button type="primary">
                        <Link to={`/addCategory/${record.id}`}>Update</Link>
                    </Button>
                </Space>
            )
        }

    ]
    // call api
    const fetchCategory = async () => {
        try {
            const res = await CategoryService.getListCategory()
            const { status, data }: any = res

            if (status === 200) {
                const demo = data.data.map((item: any, index: any) => {
                    item.id = index + 1
                    return item
                })

                setData(demo)

            }
        } catch (error) {
            console.log(error)
        }
    }

    // Delete
    const handleDelete = (record: any) => {
        Modal.confirm({
            title: "Are you sure, you want to Category?",
            okText: "Yes",
            okType: "danger",
            onOk: async () => {

                try {
                    const res = await CategoryService.deleteCategory(record.id)

                    if (res.status === 200) {
                        fetchCategory()
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        })
    }

    // show Modal
    // const showModal = (record: any) => {
    //     setIsModalOpen(true)
    //     setIsEditing(record)
    // }

    // const handleOk = async () => {
    //     try {
    //         const res = await CategoryService.updateCategory(isEditing.id, {
    //             name: isEditing.name
    //         })
    //         console.log("delete", res)

    //         if (res.status === 200) {
    //             console.log("success")
    //             fetchCategory()
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }

    //     setIsModalOpen(false)
    // }

    // const handleCancel = () => {
    //     setIsModalOpen(false)
    // }

    // const handleChange = (event: any) => {
    //     const paramsEditing = {
    //         ...isEditing,
    //         name: event.target.value
    //     }
    //     setIsEditing(paramsEditing)
    // }

    useEffect(() => {
        fetchCategory()
    }, [])

    return (
        <>
            <h1>Category</h1>
            <Button style={{ margin: "1rem 0" }}>
                <Link to="/addCategory">Add a new Category</Link>
            </Button>

            <Table columns={columns} dataSource={data} rowKey="id" />


        </>
    )
}

export default Category
