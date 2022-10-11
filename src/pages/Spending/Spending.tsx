import React, { useState, useEffect } from "react"
import { Button, Input, Modal, Select, Space, Table } from "antd"
import { ColumnsType } from "antd/lib/table"
import { DataTypeSpending } from "../../types/type"
import { Link, useNavigate } from "react-router-dom"
import SpendingService from "./services"
import CategoryService from "../Category/services"
import { Option } from "antd/lib/mentions"

const Spending = () => {
    const [dataCa, setDataCa] = useState([])
     const [dataCate, setDataCate] = useState([])
    const [data, setData] = useState([])
    const [dataSource, setDataSource] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [type, setType] = useState ("")
    console.log(type);

    const navigate = useNavigate()

    const [isEditing, setIsEditing] = useState<{
        id: undefined | number
        name: undefined | string
        categoryId: undefined | number
        userId: undefined | number
        price: undefined | number
        description: undefined | string
    }>({
        id: undefined,
        name: "",
        categoryId: undefined,
        userId: undefined,
        price: undefined,
        description: ""
    })

    const columns: ColumnsType<DataTypeSpending> = [
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
            title: "CategoryId",
            dataIndex: "categoryId",
            key: "categoryId"
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price"
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description"
        },
        {
            title: "Category",
            dataIndex: "name",
            key: "category"
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
                setDataCa(data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const fetchSpending = async () => {
        try {
            const res = await SpendingService.getListSpending()
            const { status, data }: any = res

            if (status === 200) {
                setData(data.data)
            }
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
                try {
                    const res = await SpendingService.deleteSpending(record.id)

                    if (res.status === 200) {
                        fetchSpending()
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        })
    }

    // show Modal
    const showModal = (record : any) => {
        setIsModalOpen(true)
        setType("Update")


        setIsEditing(record)
    }

      const showModal2 = () => {
        setIsModalOpen(true)
        setType("Add")


    }


    const handleOk = async () => {
        try {
            const res = await SpendingService.updateSpending(isEditing.id, {
                name: isEditing.name,
                categoryId: isEditing.categoryId,
                price: isEditing.price,
                description: isEditing.description
            })
            console.log("delete", res)

            if (res.status === 200) {
                console.log("success")
                fetchSpending()
            }
        } catch (error) {
            console.log(error)
        }

        setIsModalOpen(false)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    const handleChange = (e: any, name: string) => {
        if (name === "name") {
            const paramsEditing = {
                ...isEditing,
                name: e.target.value
            }
            setIsEditing(paramsEditing)
        }

        if (name === "categoryId") {
            const paramsEditing = {
                ...isEditing,
                categoryId: e.target.value
            }
            setIsEditing(paramsEditing)
        }

        if (name === "price") {
            const paramsEditing = {
                ...isEditing,
                price: e.target.value
            }
            setIsEditing(paramsEditing)
        }

        if (name === "description") {
            const paramsEditing = {
                ...isEditing,
                description: e.target.value
            }
            setIsEditing(paramsEditing)
        }
    }

    const renderCat = () => {
        if (!dataCate || !dataCate.length) return
        return dataCate.map((item: any, index: any) => {
            return <Option value={item.id}>{item.name}</Option>
        })
    }

    // call api


    useEffect(() => {
        fetchSpending()
        fetchCategory()
    }, [])

    useEffect(() => {
        if (!dataCa || !dataCa.length) {
            setDataSource(data)
        }

        const newDataSource: any = data.map((dataIt: any) => {
            const detailCa: any = dataCa.find(
                (itemCa: any) => itemCa.id === dataIt.categoryId
            )



            if (!detailCa) return dataIt
            return {
                ...dataIt,
                categoryId: detailCa.name
            }
        })

        setDataSource(newDataSource)
    }, [dataCa, data])

    return (
        <>
            <h1>Spending</h1>
            <Button style={{ margin: "1rem 0" }}  onClick={() => showModal2()} >
                Add a new Spending
            </Button>
            <Table columns={columns} dataSource={dataSource} rowKey="id" />
            {type === 'Update' ?
            <Modal
                title="Edit"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <label>Name</label>
                <Input
                    name="name"
                    value={isEditing?.name}
                    onChange={e => handleChange(e, "name")}
                />
                <label>Category ID</label>
                 <Select
                    style={{ width: 120 }}
                    defaultValue={isEditing.name}
                >
                  {/* <Option value={isEditing?.id}>{dataCa.name}</Option> */}
                </Select>
                <label>Price</label>
                <Input
                    name="price"
                    value={isEditing?.price}
                    onChange={e => handleChange(e, "price")}
                />
                <label>Desc</label>
                <Input
                    name="description"
                    value={isEditing?.description}
                    onChange={e => handleChange(e, "description")}
                />
            </Modal> :
            <Modal
                title="Add"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <label>Name</label>
                <Input
                    name="name"
                    value={isEditing?.name}
                    onChange={e => handleChange(e, "name")}
                />
                <label>Category ID</label>
                 <Select
                    style={{ width: 120 }}
                    defaultValue={isEditing.name}
                >
                  {/* <Option value={isEditing?.id}>{dataCa.name}</Option> */}
                </Select>
                <label>Price</label>
                <Input
                    name="price"
                    value={isEditing?.price}
                    onChange={e => handleChange(e, "price")}
                />
                <label>Desc</label>
                <Input
                    name="description"
                    value={isEditing?.description}
                    onChange={e => handleChange(e, "description")}
                />
            </Modal>}
        </>
    )
}

export default Spending
