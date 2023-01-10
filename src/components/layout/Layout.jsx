import Header from "../header/Header";
import Footer from "../footer/Footer";
import Routers from "../../routes/Routers";
import Cart from "../UI/cart/Cart";
import { useSelector } from "react-redux";


const Layout = () => {
    const showCart = useSelector((state) => state.cartUi.cartIsVisible);

    return (
        <>
            <Header />

            <Cart showCart={showCart} />

            <div>
                <Routers />
            </div>
            <Footer />
        </>
    );
};

export default Layout;