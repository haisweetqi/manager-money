import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import ChangePassword from "../modules/ChangePassword"
import ForgotPassword from "../modules/ResetPassword"
import Login from "../modules/Login"
import Register from "../modules/Register"
import SendMail from "../modules/SendMail"
import Not404Found from "../pages/404Found/404Found"
import AboutPage from "../pages/AboutPage/AboutPage"
import AddCategory from "../pages/Category/AddCategory"
import Category from "../pages/Category/Category"
import ContactPage from "../pages/ContactPage/ContactPage"
import Delivery from "../pages/Delivery/Delivery"

import HomePage from "../pages/HomePage/HomePage"
import MailStatus from "../pages/Mail/MailStatus"
import AddSpending from "../pages/Spending/AddSpending"
import Spending from "../pages/Spending/Spending"
import ResetPassword from "../modules/ResetPassword"

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
                     <Route path="/addCategory/:id" element={<AddCategory />} />
                    <Route path="/addSpending" element={<AddSpending />} />
                     <Route path="/addSpending/:id" element={<AddSpending />} />
                </Route>
                <Route element={<LayoutBlank />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/delivery" element={<Delivery />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/change-password"
                        element={<ChangePassword />}
                    />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path="/send-mail" element={<SendMail />} />
                    <Route path="/send-mail-success" element={<MailStatus />} />
                    <Route path="/send-mail-fail" element={<Not404Found />} />
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
