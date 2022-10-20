import React, { useState } from "react"
import { Button, Form, Input } from "antd"
import ChangePassService from "./services"
import { useNavigate } from "react-router-dom"

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const navigate = useNavigate()
    const handleSubmit = async () => {
        try {
            const params = {
                oldPassword: oldPassword,
                newPassword: newPassword
            }
            const res = await ChangePassService.changePassApi(params)
            if (res.status === 201) {
                navigate("/")
            }
        } catch (error) {}
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo)
    }
    return (
        <div>
            <h1>Forgot Password</h1>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
                initialValues={{ remember: true }}
                onFinish={handleSubmit}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Old Password"
                    name="oldPassword"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Old passs!"
                        }
                    ]}
                >
                    <Input
                        type="password"
                        onChange={e => setOldPassword(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    label="New Password"
                    name="newPassword"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!"
                        }
                    ]}
                >
                    <Input
                        type="password"
                        onChange={e => setNewPassword(e.target.value)}
                    />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ChangePassword
