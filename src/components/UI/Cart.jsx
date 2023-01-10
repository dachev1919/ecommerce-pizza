import styles from "../../styles/components/Cart.module.css";
import { ListGroup } from "reactstrap";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartUiAction } from "../../store/shopping-cart/cartUiSlice";

const Cart = ({ showCart }) => {
    const dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount)

    const hideCartHandler = () => {
        dispatch(cartUiAction.showCart());
    };

    return (
        <div className={ `${ styles.cart } ${ showCart ? styles.show : "" }` }>
            <div className={ styles.overlay } onClick={ hideCartHandler }></div>
            <ListGroup className={ `${ styles["cart__wrapper"] } d-flex flex-column justify-content-between` }>
                <div className={ styles["cart__close"] } onClick={ hideCartHandler }>
                    <span>
                        <i className="ri-close-line d-flex"/>
                    </span>
                </div>
                <div className={ styles["cart__list"] }>
                    {
                        cartProducts.length === 0
                            ? <h6 className='text-center mt-5 fw-bold'>No item added to the cart</h6>
                            : cartProducts.map((item) => (
                                <CartItem key={item.id} product={item} title={item.title} price={item.price} image01={item.image01} quantity={item.quantity}/>
                            ))
                    }

                </div>

                <div className={ `${ styles["cart__bottom"] }` }>
                    <h6 className="mt-5">Subtotal amount: <span>${totalAmount}</span></h6>
                    <div className="d-flex mt-5 gap-2 align-items-center flex-column">
                        <Link to={ "/ecommerce-pizza/checkout" } className="w-100" onClick={ hideCartHandler }>
                            <button className="btn__primary btn w-100 without__responsive">Checkout</button>
                        </Link>
                        <Link to={ "/ecommerce-pizza/foods" } className="w-100" onClick={ hideCartHandler }>
                            <button className="btn__secondary btn w-100 without__responsive">Continue shopping</button>
                        </Link>
                    </div>
                </div>
            </ListGroup>
        </div>
    );
};

export default Cart;