import ReactDOM from "react-dom";
import React from "react";
import "./CSS/main.css";
import App from "./components/app.js";

const root = document.querySelector("#root");
console.log(root);

ReactDOM.render(<App />, root);
