import { Button, Form, Input } from "antd"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import RegisterService from "./services"
import LoginService from "./services"

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = async (e: any) => {
        e.preventDefault()

        const user = { name: name, email: email, password: password }

        try {
            const response = await RegisterService.registerApi(user)
            console.log(response)

            const { status, data }: any = response
            console.log({ status, data })

            if (status === 201) {
                navigate("/login")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Forgot Password</h1>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
                autoComplete="off"
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Please input your name!"
                        }
                    ]}
                >
                    <Input
                        type="email"
                        onChange={e => setName(e.target.value)}
                    />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your email!"
                        }
                    ]}
                >
                    <Input
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!"
                        }
                    ]}
                >
                    <Input
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        onClick={handleLogin}
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Register
