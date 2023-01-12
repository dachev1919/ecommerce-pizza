import styles from '../styles/pages/Cart.module.css';
import Helmet from "../components/helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Col, Container, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    return (
        <Helmet title='Cart'>
            <CommonSection title='Your Cart' />
            <section className={styles.cart}>
                <Container>
                    <Row>
                        <Col className='col-12'>
                            {
                                cartItems.length === 0
                                    ? (
                                        <>
                                            <h2 className='text-center'>Your cart is empty</h2>
                                            <Link to={'/ecommerce-pizza/foods'}><button className='btn__primary btn m-auto d-block mt-5 without__responsive'>Continue Shopping</button></Link>
                                        </>
                                    )
                                    : (
                                        <>
                                            <table className={`${styles['cart-table']} table table-bordered`}>
                                                <thead>
                                                <tr>
                                                    <th>Image</th>
                                                    <th>Product Title</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Action</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    cartItems.map((product) => <Tr key={ product.id } product={ product }/>)
                                                }
                                                </tbody>
                                            </table>
                                            <div className={styles['cart__footer']}>
                                                <h6>Subtotal: <span>{totalAmount}$</span></h6>
                                                <p>Taxes and shipping with calculate at checkout</p>
                                                <div className={`${styles['cart__footer-buttons']} d-flex flex-column justify-content-end gap-3`}>
                                                    <Link to={'/ecommerce-pizza/checkout'}><button className='btn__primary btn w-100 without__responsive'>Checkout</button></Link>
                                                    <Link to={'/ecommerce-pizza/foods'}><button className='btn__secondary btn w-100 without__responsive'>Continue Shopping</button></Link>
                                                </div>
                                            </div>
                                        </>
                                    )
                            }
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

const Tr = ({ product }) => {
    const {image01, title, price, quantity, id} = product;
    const dispatch = useDispatch();

    const productDeleteHandler = () => {
        dispatch(cartAction.deleteItem(id));
    }

    return (
        <tr>
            <td><img src={ image01 } alt={`product-${id}`}/></td>
            <td><Link to={`/ecommerce-pizza/foods/${id}`}>{ title }</Link></td>
            <td>${ price }</td>
            <td>{ quantity }</td>
            <td><i className='ri-delete-bin-line' onClick={productDeleteHandler}/></td>
        </tr>
    )
}

export default Cart;