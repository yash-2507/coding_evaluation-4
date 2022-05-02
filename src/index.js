import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <BrowserRouter basename="/">
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);
