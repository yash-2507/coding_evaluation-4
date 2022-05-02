import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import { Products } from "../components/Products";

const MainRoutes = () => {
    return (
        <>
            {/* Navbar and all the routes */}
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/men" element={<Products />} />
                <Route path="/products/women" element={<Products />} />
                <Route path="/products/kids" element={<Products />} />
                <Route path="/products/homedecor" element={<Products />} />
            </Routes>
        </>
    );
};
export { MainRoutes };
