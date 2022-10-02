import React, { useState, useEffect } from "react"
import { Button, Modal, Space, Table } from "antd"
import { ColumnsType } from "antd/lib/table"
import { DataTypeSpending } from "../../types/type"
import { Link, useNavigate } from "react-router-dom"
import SpendingService from "./services"
import CategoryService from "../Category/services"

const Spending = () => {
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
    const columns: ColumnsType<DataTypeSpending> = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Age",
            dataIndex: "age",
            key: "age"
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address"
        },

        {
            title: "Action",
            key: "action",
            render: record => (
                <Space size="middle">
                    <Button danger>Delete</Button>
                    <Button type="primary">Update</Button>
                </Space>
            )
        }
    ]

    const fetchSpending = async () => {
        try {
            const res = await SpendingService.getListSpending()
            const { status, data }: any = res

            if (status === 200) {
                setData(data.data)
            }
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = (record: any) => {
        Modal.confirm({
            title: "Are you sure, you want to delete this speding record?",
            okText: "Yes",
            okType: "danger",
            onOk: async () => {
                console.log("record", record)

                try {
                    const res = await CategoryService.deleteCategory(record.id)

                    if (res.status === 200) {
                        fetchSpendingg()
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
        fetchSpending()
    }, [])

    return (
        <>
            <h1>Spending</h1>
            <Button style={{ margin: "1rem 0" }}>
                <Link to="/addSpending">Add a new Spending</Link>
            </Button>
            <Table columns={columns} dataSource={data} />
        </>
    )
}

export default Spending
