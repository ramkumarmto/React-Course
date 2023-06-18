import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from "./store/index";
import { Provider } from "react-redux";



const container = ReactDOM.createRoot(document.getElementById("container"));
container.render(<Provider store={store}><App /></Provider>);


