import styles from "../styles/pages/FoodDetails.module.css";
import Helmet from "../components/helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Col, Container, Row } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import products from "../assets/fake-data/products";
import { useCallback, useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";
import { useDispatch } from "react-redux";
import { cartAction } from "../store/shopping-cart/cartSlice";
import { toast } from "react-toastify";

const FoodDetails = () => {
    const [tab, setTab] = useState("description");
    const { id } = useParams();
    const product = products.find((product) => product.id === id);
    const [previewImage, setPreviewImage] = useState(product.image01);
    const { title, price, category, desc } = product;
    const dispatch = useDispatch();
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredReview, setEnteredReview] = useState('');


    const activeThumbHandler = useCallback((e, image, effectLoading = false) => {
        const allThumb = document.querySelectorAll(`.${ styles["product__thumbnails-item"] }`);
        allThumb.forEach((thumb) => thumb.classList.remove(styles["product__thumbnails-item_a"]));

        if (effectLoading) {
            allThumb[0].classList.add(styles["product__thumbnails-item_a"]);
            setPreviewImage(product['image01']);
        }

        if (!effectLoading && e.target.parentNode && e.target.parentNode.className.includes(styles["product__thumbnails-item"])) {
            e.target?.parentNode?.classList.add(styles["product__thumbnails-item_a"]);
            setPreviewImage(product[image]);
        }
    }, [product]);

    useEffect((e) => {
        window.scrollTo(0, 0);
        activeThumbHandler(e, "image01", true);
    }, [id, product, activeThumbHandler]);

    const submitCommentHandler = (e) => {
        e.preventDefault();

        setEnteredName('');
        setEnteredEmail('');
        setEnteredReview('');

        toast.success("review added successfully");
    }

    const addToCart = () => {
        dispatch(cartAction.addItem({
            id,
            title,
            price,
            image01: product.image01,
        }));

        toast.success("product added successfully");
    };

    return (
        <Helmet title={title}>
            <CommonSection title={title}/>
            <section className={ styles["food-details"] }>
                <Container>
                    <Row>
                        <Col md="2" className='order-md-1 order-2'>
                            <div className={ styles["product__thumbnails"] }>
                                <div
                                    className={ `${ styles["product__thumbnails-item"] } ${ styles["product__thumbnails-item_a"] } d-flex justify-content-end` }
                                    onClick={ (e) => activeThumbHandler(e, "image01") }>
                                    <img src={ product.image01 } alt="product-img"/>
                                </div>
                                <div className={ `${ styles["product__thumbnails-item"] } d-flex justify-content-end` }
                                     onClick={ (e) => activeThumbHandler(e, "image02") }>
                                    <img src={ product.image02 } alt="product-img"/>
                                </div>
                                <div className={ `${ styles["product__thumbnails-item"] } d-flex justify-content-end` }
                                     onClick={ (e) => activeThumbHandler(e, "image03") }>
                                    <img src={ product.image03 } alt="product-img"/>
                                </div>
                            </div>
                        </Col>
                        <Col md="4" className='order-md-2 order-1'>
                            <div className={ styles["product__main-image"] }>
                                <img src={ previewImage } alt="product-img"/>
                            </div>
                        </Col>
                        <Col md="6" className='order-3'>
                            <div className={ styles["product__info"] }>
                                <h2>{ title }</h2>
                                <p className={ `${ styles["product__price"] } mb-4 mt-4` }>Price: <span>${ price }</span>
                                </p>
                                <p className={ `${ styles["product__category"] } mb-4` }>Category: <span>{ category }</span>
                                </p>
                                <p className={ styles["product__description"] }>
                                    { desc.slice(0, 120) + "..." }
                                </p>
                                <div
                                    className={ `${ styles["product__buttons"] } d-flex gap-2 align-items-center justify-content-between` }>
                                    <button className="btn__primary without__responsive btn mt-3"
                                            onClick={ addToCart }>Add To Cart
                                    </button>
                                    <Link to={ "/ecommerce-pizza/foods" }>
                                        <button className="btn__secondary without__responsive btn mt-3">Continue
                                            shopping
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col className='order-4'>
                            <div className={ `${ styles["product__tab"] } d-flex align-items center gap-5 py-2 mt-5` }>
                                <h6 className={ `${ tab === "description" && styles["product__tab_a"] }` }
                                    onClick={ () => setTab("description") }>Description</h6>
                                <h6 className={ `${ tab === "reviews" && styles["product__tab_a"] }` }
                                    onClick={ () => setTab("reviews") }>Review</h6>
                            </div>

                            <div className={ styles["product__tab-content"] }>
                                <p className={ `${ tab === "description" && styles["product__tab-content__item_a"] } ${ styles["product__tab-content__item"] }` }>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
                                    eius excepturi ipsam molestias pariatur quam quas quasi ratione
                                    reiciendis temporibus. Blanditiis distinctio enim, error hic
                                    impedit neque numquam repellendus reprehenderit!
                                </p>
                                <div
                                    className={ `${ styles.reviews } ${ styles["product__tab-content__item"] } ${ tab === "reviews" && styles["product__tab-content__item_a"] }` }>
                                    <div className={ `${ styles.review } mb-4` }>
                                        <p className={ `${ styles["review__name"] } mb-0` }>Jhon Doe</p>
                                        <p className={ `${ styles["review__email"] } mb-1` }>jhon@gmail.com</p>
                                        <p className={ styles["review__text"] }>great product</p>
                                    </div>
                                    <div className={ `${ styles.review } mb-4` }>
                                        <p className={ `${ styles["review__name"] } mb-0` }>Jhon Doe</p>
                                        <p className={ `${ styles["review__email"] } mb-1` }>jhon@gmail.com</p>
                                        <p className={ styles["review__text"] }>great product</p>
                                    </div>
                                    <div className={ `${ styles.review } mb-4` }>
                                        <p className={ `${ styles["review__name"] } mb-0` }>Jhon Doe</p>
                                        <p className={ `${ styles["review__email"] } mb-1` }>jhon@gmail.com</p>
                                        <p className={ styles["review__text"] }>great product</p>
                                    </div>

                                    <div className={ styles["review-form"] }>
                                        <form onSubmit={submitCommentHandler}>
                                            <div className='form__group'>
                                                <input required type="text" placeholder="Enter your name" value={enteredName} onChange={(e) => setEnteredName(e.target.value)}/>
                                            </div>
                                            <div className='form__group'>
                                                <input required type="text" placeholder="Enter your email" value={enteredEmail} onChange={(e) => setEnteredEmail(e.target.value)}/>
                                            </div>
                                            <div className='form__group'>
                                                <textarea required rows="5" placeholder="Enter your comment" value={enteredReview} onChange={(e) => setEnteredReview(e.target.value)}/>
                                            </div>
                                            <button type="submit" className="btn btn__primary">Write Review</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <h2 className="mt-5 text-center">Products in the same category</h2>
                        <ProductsList limit={4}/>
                    </Row>
                    <Row>
                        <h2 className="mt-5 text-center">Products in the same category</h2>
                        <ProductsList filtered={ category } limit={4}/>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default FoodDetails;