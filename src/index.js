import React from "react";
import ReactDOM from "react-dom/client";
import "./normalize.css";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./app/store";
import { Provider } from "react-redux";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// base url

axios.defaults.baseURL = "http://127.0.0.1:8000/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Provider>
  </BrowserRouter>
);

// Provider is just a component that already build in the react-redux library inside the compoent there
// is context api, the value of that context api will be the value you put in the store attribute.
// so all the children of provider will have accesst over the store.
