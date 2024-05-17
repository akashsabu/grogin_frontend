import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../components/screens/home/Home";
import Product from "../components/screens/home/Product";
import Login from '../components/screens/authentication/Login';
import { useSelector } from "react-redux";

const AppRoute = () => {
    // const log_status = useSelector((state) => state.user.value.is_logged_in);
    const log_status = true;


  return (
        <Routes>
            <Route path="/" element={log_status ? <Home /> : <Login />} />
            <Route
            path="/product/:id"
            element={log_status ? <Product /> : <Login />}
            /> 
        </Routes>
        )
}




export default AppRoute;
