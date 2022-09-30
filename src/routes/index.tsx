import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Login from "../modules/Login"
import AboutPage from "../pages/AboutPage/AboutPage"
import AddCategory from "../pages/Category/AddCategory"
import Category from "../pages/Category/Category"
import ContactPage from "../pages/ContactPage/ContactPage"
import Delivery from "../pages/Delivery/Delivery"

import HomePage from "../pages/HomePage/HomePage"
import Policy from "../pages/Policy/Policy"
import AddSpending from "../pages/Spending/AddSpending"
import Spending from "../pages/Spending/Spending"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LayoutMain />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/spending" element={<Spending />} />
                    <Route path="/addCategory" element={<AddCategory />} />
                    <Route path="/addSpending" element={<AddSpending />} />
                </Route>
                <Route element={<LayoutBlank />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/delivery" element={<Delivery />} />
                    <Route path="/policy" element={<Policy />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const LayoutMain = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

const LayoutBlank = () => {
    return (
        <>
            <Outlet />
        </>
    )
}

export default Router
