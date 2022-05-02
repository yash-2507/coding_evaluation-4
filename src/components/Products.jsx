import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select, Grid } from "./Styled";
import { getProducts } from "../cart/cartSlice";
import { ProductCard } from "./ProductCard";
import { sort } from "../cart/cartSlice";

export const Products = () => {
    const { products } = useSelector((store) => store.product);
    // console.log(products);
    const dispatch = useDispatch();
    useEffect(() => {
        // fetch ProductsData using redux-thunk on every mount
        dispatch(getProducts());
    }, []);
    const handleSort = (e) => {
        // dispatch sort products on change
        // console.log(e.target.value);
        dispatch(sort(e.target.value));
    };

    return (
        <>
            <h2>Products</h2>
            <Select data-testid="product-sort-order" onChange={handleSort}>
                <option>Sort by--</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
            </Select>
            <Grid data-testid="products-container">
                {/* iterate data and show each POroduct card */}
                {products &&
                    products.map((item) => {
                        return <ProductCard key={item.id} item={item} />;
                    })}
            </Grid>
        </>
    );
};
