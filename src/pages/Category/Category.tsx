import React, { useEffect, useState } from "react"
import { Button, Input, Modal, Space, Table } from "antd"
import { ColumnsType } from "antd/lib/table"
import { DataType } from "../../types/type"
import { Link, useNavigate } from "react-router-dom"

import CategoryService from "./services"

const Category = () => {
    const [data, setData] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
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
    const columns: ColumnsType<DataType> = [
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
                    <Button type="primary" onClick={() => showModal(record)}>
                        Update
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
                setData(data.data)
            }
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    // Delete
    const handleDelete = (record: any) => {
        console.log(record)

        Modal.confirm({
            title: "Are you sure, you want to delete this student record?",
            okText: "Yes",
            okType: "danger",
            onOk: async () => {
                console.log("record", record)

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
    const showModal = (record: any) => {
        setIsModalOpen(true)
        setIsEditing(record)
    }

    const handleOk = () => {
        console.log("ok")
    }

    const handleCancel = () => {
        console.log("cancel")
    }

    const handleChange = () => {
        console.log("Chane")
    }

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

            <Modal
                title="Edit"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <label>Name</label>
                <Input value={isEditing?.name} onChange={handleChange} />
            </Modal>
        </>
    )
}

export default Category
