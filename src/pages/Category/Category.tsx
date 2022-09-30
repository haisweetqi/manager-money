import React, { useEffect, useState } from "react"
import { Button, Space, Table } from "antd"
import { ColumnsType } from "antd/lib/table"
import { DataType } from "../../types/type"
import { Link, useNavigate } from "react-router-dom"
import getCategoryApi from "./services"

const Category = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()
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
                    <Button danger>Delete</Button>
                    <Button type="primary">Update</Button>
                </Space>
            )
        }
    ]

    const fetchCatory = async () => {
        const res = await getCategoryApi.getListCategory()
        console.log(res)
    }

    useEffect(() => {
        fetchCatory()
    }, [])

    return (
        <>
            <h1>Category</h1>
            <Button style={{ margin: "1rem 0" }}>
                <Link to="/addCategory">Add a new Category</Link>
            </Button>
            <Table columns={columns} dataSource={data} />
        </>
    )
}

export default Category
