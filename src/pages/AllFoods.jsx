import styles from "../styles/pages/AllFoods.module.css";
import Helmet from "../components/helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Col, Container, Row } from "reactstrap";
import ProductsList from "../components/ProductsList";
import { useEffect, useState } from "react";

const AllFoods = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('');

    const searchHandler = (e) => {
        setSearchTerm(e.target.value);
        setFilterType('search');
    }

    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <Helmet title="All Foods">
            <CommonSection title="All Foods"/>

            <section className={styles['all-foods']}>
                <Container>
                    <Row>
                        <Col sm="6">
                            <div className={ `${styles["search-widget"]} d-flex align-items-center justify-content-between` }>
                                <input value={searchTerm} onChange={(e) => searchHandler(e)} type="text" placeholder="I`m looking for..."/>
                                <span>
                                    <i className="ri-search-line"/>
                                </span>
                            </div>
                        </Col>
                        <Col sm="6">
                            <div className={ `${styles["sorting-widget"]} text-end` }>
                                <select onChange={(e) => setFilterType(e.target.value)}>
                                    <option value="default-search">Default</option>
                                    <option value="ascending">A-Z</option>
                                    <option value="descending">Z-A</option>
                                    <option value="high-price">High Price</option>
                                    <option value="low-price">Low Price</option>
                                </select>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <ProductsList filtered={ filterType } searchValue={searchTerm} />
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default AllFoods;