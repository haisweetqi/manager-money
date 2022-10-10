import React, { useState } from "react"
import { Button, Checkbox, Form, Input } from "antd"
import SendMailService from "./services"
import { useNavigate } from "react-router-dom"

const SendMail = () => {
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const onFinish = () => {
        sendMailApi()
    }

    const sendMailApi = async () => {
        try {
            const emailApi = { email: email }
            console.log(emailApi)

            const res = await SendMailService.sendMailForgotPassword(emailApi)
            console.log(res)
            if (res.status === 201) {
                navigate("/send-mail-success")
            } else {
                navigate("/send-mail-fail")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo)
    }
    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
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
                    <Input onChange={(e: any) => setEmail(e.target.value)} />
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

export default SendMail
