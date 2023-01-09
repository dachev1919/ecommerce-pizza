import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import FoodDetails from "../pages/FoodDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Contact from "../pages/Contact";

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/ecommerce-pizza'/>} />
            <Route path='/ecommerce-pizza' element={<Home />} />
            <Route path='/ecommerce-pizza/foods' element={<AllFoods />} />
            <Route path='/ecommerce-pizza/foods/:id' element={<FoodDetails />} />
            <Route path='/ecommerce-pizza/cart' element={<Cart />} />
            <Route path='/ecommerce-pizza/checkout' element={<Checkout />} />
            <Route path='/ecommerce-pizza/login' element={<Login />} />
            <Route path='/ecommerce-pizza/registration' element={<Registration />} />
            <Route path='/ecommerce-pizza/contact' element={<Contact />} />
        </Routes>
    );
};

export default Routers;