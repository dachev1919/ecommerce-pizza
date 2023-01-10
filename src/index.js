import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                closeOnClick
                rtl={false}
                theme="dark"
                draggable
                pauseOnHover={false}
            />
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    </React.StrictMode>
);