import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";
import styles from "../styles/components/PopularProducts.module.css";
import ProductsList from "./ProductsList";

const PopularProducts = () => {
    const [tabCategory, setTabCategory] = useState('');

    useEffect(() => {
        setTabCategory('Burger');
    }, []);

    return (
        <Container>
            <Row>
                <Col lg="12" className="text-center">
                    <h2>Popular Foods</h2>
                </Col>
                <Col lg="12">
                    <div
                        className={ `${ styles["popular__products-categories"] } d-flex justify-content-center gap-2` }>
                        <button
                            className={ `${ styles["all__btn"] } ${ tabCategory === "All" ? styles["button__active"] : "" }` }
                            onClick={ () => setTabCategory("All") }
                        >
                            All
                        </button>
                        <button
                            className={ `d-flex align-items-center gap-2 ${ tabCategory === "Burger" ? styles["button__active"] : "" }` }
                            onClick={ () => setTabCategory("Burger") }
                        >
                            <img src={ foodCategoryImg01 } alt="fc-img-1"/>
                            Burger
                        </button>
                        <button
                            className={ `d-flex align-items-center gap-2 ${ tabCategory === "Pizza" ? styles["button__active"] : "" }` }
                            onClick={ () => setTabCategory("Pizza") }
                        >
                            <img src={ foodCategoryImg02 } alt="fc-img-2"/>
                            Pizza
                        </button>
                        <button
                            className={ `d-flex align-items-center gap-2 ${ tabCategory === "Bread" ? styles["button__active"] : "" }` }
                            onClick={ () => setTabCategory("Bread") }
                        >
                            <img src={ foodCategoryImg03 } alt="fc-img-2"/>
                            Bread
                        </button>
                    </div>
                </Col>

                <ProductsList filtered={tabCategory} />
            </Row>
        </Container>
    );
};

export default PopularProducts;