import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import NotFound from "../pages/NotFound";
import Blog from "../pages/Blogs";
import BlogDetail from "../pages/BlogDetail";
import Contact from "../pages/Contact";
import Wishlist from '../pages/Wishlist';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/products" element={<Products />}/>
            <Route path="/cart" element={<Cart />} />

            <Route path="/checkout" element={<Checkout />} />
            <Route path="/NotFound" element={<NotFound />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
    );
}

export default AppRoutes;