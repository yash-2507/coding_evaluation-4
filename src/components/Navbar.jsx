import { useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { men, women, kids, homedecor } from "../cart/cartSlice";

export const Navbar = () => {
    const dispatch = useDispatch();
    const handleMen = () => {
        dispatch(men());
    };
    const handleWomen = () => {
        dispatch(women());
    };
    const handleKids = () => {
        dispatch(kids());
    };
    const handleHomedecor = () => {
        dispatch(homedecor());
    };
    return (
        <nav
            style={{
                backgroundColor: "#8000ff",
                padding: 20,
                display: "flex",
                justifyContent: "center",
                gap: 40,
            }}
        >
            {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/products/men" onClick={handleMen}>
                Men
            </Link>
            <Link to="/products/women" onClick={handleWomen}>
                Women
            </Link>
            <Link to="/products/kids" onClick={handleKids}>
                Kids
            </Link>
            <Link to="/products/homedecor" onClick={handleHomedecor}>
                Home Decor
            </Link>
        </nav>
    );
};
