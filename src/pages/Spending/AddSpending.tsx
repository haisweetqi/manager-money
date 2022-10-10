import React, { useEffect, useState } from "react"
import { Button, Form, Input, Select } from "antd"
import SpendingService from "./services"
import { useNavigate } from "react-router-dom"
import CategoryService from "../Category/services"

const AddSpending = () => {
    const { Option } = Select
    const [dataCate, setDataCate] = useState([])

    const navigate = useNavigate()
    const [name, setName] = useState("")

    const [categoryId, setCategoryId] = useState(0)
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    const handleSubmit = async () => {
        const values = { name, categoryId, price, description }
        const res = await SpendingService.addSpending(values)
        console.log(res)
        if (res.status === 201) {
            navigate("/spending")
        }
    }

    const renderCat = () => {
        if (!dataCate || !dataCate.length) return
        return dataCate.map((item: any, index: any) => {
            return <Option value={item.id}>{item.name}</Option>
        })
    }

    // call api
    const fetchCategory = async () => {
        try {
            const res = await CategoryService.getListCategory()
            const { status, data }: any = res

            if (status === 200) {
                setDataCate(data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = () => {
        console.log("change")
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo)
    }
    useEffect(() => {
        fetchCategory()
    }, [])
    return (
        <>
            <h1>Add Spending</h1>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
                initialValues={{ remember: true }}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!"
                        }
                    ]}
                >
                    <Input onChange={(e: any) => setName(e.target.value)} />
                </Form.Item>
                {/* <Form.Item
                    label="Category ID"
                    name="categoryId"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Category!"
                        }
                    ]}
                >
                    <Input
                        onChange={(e: any) =>
                            setCategoryId(Number(e.target.value))
                        }
                    />
                </Form.Item> */}
                <Select
                    defaultValue="lucy"
                    style={{ width: 120 }}
                    onChange={handleChange}
                >
                    {renderCat()}
                </Select>

                <Form.Item
                    label="Price"
                    name="price"
                    rules={[
                        {
                            required: true,
                            message: "Please input your price!"
                        }
                    ]}
                >
                    <Input
                        onChange={(e: any) => setPrice(Number(e.target.value))}
                    />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Description!"
                        }
                    ]}
                >
                    <Input
                        onChange={(e: any) => setDescription(e.target.value)}
                    />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default AddSpending
