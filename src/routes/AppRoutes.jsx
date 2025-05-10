import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import ManageUsers from "../pages/Admin/ManageUsers";
import ManageOrders from "../pages/Admin/ManageOrders";
import ManageProducts from "../pages/Admin/ManageProducts";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import ProductDetail from "../pages/ProductDetail";
import ProductList from "../pages/ProductList";
import Dashboard from "../pages/Admin/Dashboard";


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Public routes */}
            <Route path="/" element={<Home />} />

            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/product-list" element={<ProductList />} />

            {/* Puser routes */}
            <Route path="/cart" element={
                <Cart />

            } />
            <Route path="/checkout" element={
                <Checkout />
            } />

            {/*  admin routes */}
            <Route path="/admin/dashboard" element={
                <Dashboard />
            } />
            <Route path="/admin/manage-users" element={
                <ManageUsers />
            } />
            <Route path="/admin/manage-orders" element={
                <ManageOrders />
            } />
            <Route path="/admin/manage-products" element={
                <ManageProducts />
            } />
        </Routes>
    );
}