import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    useEffect(() => {
        if (!token) {
            navigate("/login")
        }
    }, [])
    return <div>HomePage</div>
}

export default HomePage
