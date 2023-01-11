import styles from '../styles/pages/FoodDetails.module.css';
import Helmet from "../components/helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Col, Container, Row } from "reactstrap";
import img from '../assets/images/product_2.2.jpg';
import img1 from '../assets/images/product_01.3.jpg';
import img2 from '../assets/images/product_4.3.png';
import img3 from '../assets/images/product_2.2.jpg';
import { useParams } from "react-router-dom";
import products from "../assets/fake-data/products";
import { useState } from "react";

const FoodDetails = () => {
    const [tab, setTab] = useState('description')
    const { productId } = useParams();
    const product = products.find((product) => product.id === productId);

    return (
        <Helmet title='test'>
            <CommonSection title='test'/>
            <section className={styles['food-details']}>
                <Container>
                    <Row>
                        <Col md='2'>
                            <div className={styles['product__thumbnails']}>
                                <div className={styles['product__thumbnails-item']}>
                                    <img src={img} alt="product-img"/>
                                </div>
                                <div className={styles['product__thumbnails-item']}>
                                    <img src={img1} alt="product-img"/>
                                </div>
                                <div className={styles['product__thumbnails-item']}>
                                    <img src={img2} alt="product-img"/>
                                </div>
                            </div>
                        </Col>
                        <Col md='4'>
                            <div className={styles['product__main-image']}>
                                <img src={img3} alt="product-img"/>
                            </div>
                        </Col>
                        <Col md='6'>
                            <div className={styles['product__info']}>
                                <h2>Pizza with mushroom</h2>
                                <p className={`${styles['product__price']} mb-4 mt-4`}>Price: <span>$231</span></p>
                                <p className={`${styles['product__category']} mb-4`}>Category: <span>Burger</span></p>
                                <p className={styles['product__description']}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
                                    eius excepturi ipsam molestias pariatur quam quas quasi ratione
                                    reiciendis temporibus. Blanditiis distinctio enim, error hic
                                    impedit neque numquam repellendus reprehenderit!
                                </p>
                                <div className={`${styles['product__buttons']} d-flex gap-2 align-items-center justify-content-between`}>
                                    <button className="btn__primary without__responsive btn mt-3">Add To Cart</button>
                                    <button className="btn__secondary without__responsive btn mt-3">Continue shopping</button>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className={`${styles['product__tab']} d-flex align-items center gap-5 py-2 mt-5`}>
                                <h6 className={styles['product__tab_a']}>Description</h6>
                                <h6>Review</h6>
                            </div>

                            <div className={styles['product__tab-content']}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
                                    eius excepturi ipsam molestias pariatur quam quas quasi ratione
                                    reiciendis temporibus. Blanditiis distinctio enim, error hic
                                    impedit neque numquam repellendus reprehenderit!
                                </p>
                                <div className={styles.reviews}>
                                    <div className={`${styles.review} mb-4`}>
                                        <p className={`${styles['review__name']} mb-0`}>Jhon Doe</p>
                                        <p className={`${styles['review__email']} mb-1`}>jhon@gmail.com</p>
                                        <p className={styles['review__text']}>great product</p>
                                    </div>
                                    <div className={`${styles.review} mb-4`}>
                                        <p className={`${styles['review__name']} mb-0`}>Jhon Doe</p>
                                        <p className={`${styles['review__email']} mb-1`}>jhon@gmail.com</p>
                                        <p className={styles['review__text']}>great product</p>
                                    </div>
                                    <div className={`${styles.review} mb-4`}>
                                        <p className={`${styles['review__name']} mb-0`}>Jhon Doe</p>
                                        <p className={`${styles['review__email']} mb-1`}>jhon@gmail.com</p>
                                        <p className={styles['review__text']}>great product</p>
                                    </div>

                                    <div className={styles['review-form']}>
                                        <form>
                                            <div className={styles['review-form__group']}>
                                                <input type="text" placeholder='Enter your name'/>
                                            </div>
                                            <div className={styles['review-form__group']}>
                                                <input type="text" placeholder='Enter your email'/>
                                            </div>
                                            <div className={styles['review-form__group']}>
                                                <textarea rows='5' placeholder='Enter your comment'/>
                                            </div>
                                            <button type='submit' className='btn btn__primary'>Write Review</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default FoodDetails;