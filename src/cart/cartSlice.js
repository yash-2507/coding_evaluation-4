import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    isLoading: true,
};

export const getProducts = createAsyncThunk(
    "cart/getProducts",
    async (name, thunkAPI) => {
        try {
            const res = await axios(
                "https://movie-fake-server.herokuapp.com/products"
            );
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue("Something went wrong");
        }
    }
);

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        sort: (state, action) => {
            // console.log(action);
            let value = action.payload;
            if (value == "asc") {
                state.products.sort((a, b) => {
                    return a.price - b.price;
                });
            } else if (value == "desc") {
                state.products.sort((a, b) => {
                    return b.price - a.price;
                });
            } else {
                console.log("error");
            }
        },
        men: (state) => {
            state.products = state.products.filter((elem) => {
                return elem.category === "men";
            });
        },
        women: (state) => {
            state.products = state.products.filter((elem) => {
                return elem.category === "women";
            });
        },
        kids: (state) => {
            state.products = state.products.filter((elem) => {
                return elem.category === "kids";
            });
        },
        homedecor: (state) => {
            state.products = state.products.filter((elem) => {
                return elem.category === "homedecor";
            });
        },
    },
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.isLoading = true;
        },
        [getProducts.fulfilled]: (state, action) => {
            // console.log(action);
            state.isLoading = false;
            state.products = action.payload;
        },
        [getProducts.rejected]: (state, action) => {
            console.log(action);
            state.isLoading = false;
        },
    },
});

export const { sort, men, women, kids, homedecor } = cartSlice.actions;
export default cartSlice.reducer;
