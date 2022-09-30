import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div
            style={{ backgroundColor: "blue", color: "#fff", padding: "1rem" }}
        >
            <nav>
                <Link
                    style={{
                        color: "#fff",
                        margin: "1rem",
                        textDecoration: "none"
                    }}
                    to="/"
                >
                    Home
                </Link>
                <Link
                    style={{
                        color: "#fff",
                        margin: "1rem",
                        textDecoration: "none"
                    }}
                    to="/about"
                >
                    about
                </Link>
                <Link
                    style={{
                        color: "#fff",
                        margin: "1rem",
                        textDecoration: "none"
                    }}
                    to="/contact"
                >
                    contact
                </Link>
                <Link
                    style={{
                        color: "#fff",
                        margin: "1rem",
                        textDecoration: "none"
                    }}
                    to="/delivery"
                >
                    delivery
                </Link>
                <Link
                    style={{
                        color: "#fff",
                        margin: "1rem",
                        textDecoration: "none"
                    }}
                    to="/policy"
                >
                    policy
                </Link>
                <Link
                    style={{
                        color: "#fff",
                        margin: "1rem",
                        textDecoration: "none"
                    }}
                    to="/category"
                >
                    category
                </Link>
                <Link
                    style={{
                        color: "#fff",
                        margin: "1rem",
                        textDecoration: "none"
                    }}
                    to="/spending"
                >
                    spending
                </Link>
            </nav>
        </div>
    )
}

export default Header
