import React from "react"
import { Button, Space, Table } from "antd"
import { ColumnsType } from "antd/lib/table"
import { DataType } from "../../types/type"
import { Link } from "react-router-dom"

const Spending = () => {
    const columns: ColumnsType<DataType> = [
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

    const data: DataType[] = [
        {
            key: "1",
            name: "John Brown",
            age: 32,
            address: "New York No. 1 Lake Park"
        }
    ]
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
