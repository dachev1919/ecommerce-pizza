import styles from '../styles/pages/Checkout.module.css';
import Helmet from "../components/helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Col, Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
    const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
    const shippingCost = 30;
    const totalAmount = cartTotalAmount + shippingCost;
    const shippingInfo = [];

    const [enterName, setEnterName] = useState('');
    const [enterEmail, setEnterEmail] = useState('');
    const [enterPhone, setEnterPhone] = useState('');
    const [enterCountry, setEnterCountry] = useState('');
    const [enterCity, setEnterCity] = useState('');
    const [enterPostalCode, setEnterPostalCode] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        const userShippingAddress = {
            name: enterName,
            email: enterEmail,
            phone: enterPhone,
            country: enterCountry,
            city: enterCity,
            postalCode: enterPostalCode,
        };

        setEnterName('');
        setEnterEmail('');
        setEnterPhone('');
        setEnterCountry('');
        setEnterCity('');
        setEnterPostalCode('');

        shippingInfo.push(userShippingAddress);
    }

    return (
        <Helmet title='Checkout'>
            <CommonSection title='Checkout' />
            <section className={styles.checkout}>
                <Container>
                    <Row>
                        <Col lg='8' md='7' className='order-2'>
                            <h6 className='mb-4'>Shipping Address</h6>
                            <form onSubmit={submitHandler} className={styles['checkout__form']}>
                                <div className='form__group'>
                                    <input
                                        value={enterName}
                                        type="text"
                                        placeholder='Enter your name'
                                        onChange={(e) => setEnterName(e.target.value)}
                                    />
                                </div>
                                <div className='form__group'>
                                    <input
                                        value={enterEmail}
                                        type="email"
                                        placeholder='Enter your email'
                                        onChange={(e) => setEnterEmail(e.target.value)}
                                    />
                                </div>
                                <div className='form__group'>
                                    <input
                                        value={enterPhone}
                                        type="text"
                                        placeholder='Phone number'
                                        onChange={(e) => setEnterPhone(e.target.value)}
                                    />
                                </div>
                                <div className='form__group'>
                                    <input
                                        value={enterCountry}
                                        type="text"
                                        placeholder='Country'
                                        onChange={(e) => setEnterCountry(e.target.value)}
                                    />
                                </div>
                                <div className='form__group'>
                                    <input
                                        value={enterCity}
                                        type="text"
                                        placeholder='City'
                                        onChange={(e) => setEnterCity(e.target.value)}
                                    />
                                </div>
                                <div className='form__group'>
                                    <input
                                        value={enterPostalCode}
                                        min='0'
                                        type="number"
                                        placeholder='Postal code'
                                        onChange={(e) => setEnterPostalCode(e.target.value)}
                                    />
                                </div>
                                <div className={`d-flex justify-content-end gap-3 mt-4 mb-5`}>
                                    <Link to={'/ecommerce-pizza/foods'}><button className='btn__secondary btn without__responsive'>Continue Shopping</button></Link>
                                    <button type='submit' className='btn__primary btn without__responsive'>Payment</button>
                                </div>
                            </form>
                        </Col>
                        <Col lg='4' md='5' className='order-1 order-md-2 mb-5'>
                            <div className={styles['checkout__billing']}>
                                <h6 className='d-flex align-items-center justify-content-between mb-4'>Subtotal <span>${totalAmount}</span></h6>
                                <h6 className='d-flex align-items-center justify-content-between mb-4'>Shipping <span>${shippingCost}</span></h6>
                                <div className={styles['checkout__total']}>
                                    <h5 className='d-flex align-items-center justify-content-between'>
                                        Total <span>${totalAmount}</span>
                                    </h5>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Checkout;