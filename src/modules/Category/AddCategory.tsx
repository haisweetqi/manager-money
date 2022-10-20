import React, { useEffect } from "react"
import { Button, Form, Input } from "antd"
import { useNavigate, useParams } from "react-router-dom"
import CategoryService from "./services"

const AddCategory = () => {
    const navigate = useNavigate()
    const { id } = useParams()



    const onFinish = async (values: any) => {
        const res = await CategoryService.addCategory(values)
        if (res.status === 201) {
            navigate("/category")
        }
    }

    useEffect(()=>{
    if(id){
    getSingerCategory(id)
    }

    },[id])

    const getSingerCategory =async (id : any) =>{
        // const res =  await

    }

    return (
        <>
            <h1>{id ? "Update Category": "Add Category"}</h1>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
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
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
                    <Button type="primary" htmlType="submit">
                        {id ? "Update" : "Add"}
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default AddCategory
