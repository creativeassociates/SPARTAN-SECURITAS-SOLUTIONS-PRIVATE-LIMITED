import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@material-tailwind/react";
import "./css/tailwind.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter basename={"/"}>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
);