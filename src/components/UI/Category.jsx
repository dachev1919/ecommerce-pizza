import categoryImg01 from "../../assets/images/category-01.png";
import categoryImg02 from "../../assets/images/category-02.png";
import categoryImg03 from "../../assets/images/category-03.png";
import categoryImg04 from "../../assets/images/category-04.png";
import { Col, Container, Row } from "reactstrap";
import styles from './Category.module.css';
import { Link } from "react-router-dom";

const CATEGORY__DATA = [
    {
        display: "Fastfood",
        imgUrl: categoryImg01,
    },
    {
        display: "Pizza",
        imgUrl: categoryImg02,
    },
    {
        display: "Asian Food",
        imgUrl: categoryImg03,
    },
    {
        display: "Row Meat",
        imgUrl: categoryImg04,
    },
];
const Category = () => {
    return (
        <Container>
            <Row>
                {
                    CATEGORY__DATA.map((category, index) => (
                        <Col key={index} md='3' xs='6'>
                            <Link to={'/ecommerce-pizza/foods'} className={`${styles['category__item']} d-flex mb-md-0 mb-4 align-items-center gap-3 flex-column flex-lg-row`}>
                                <div className={styles['category__img']}>
                                    <img src={category.imgUrl} alt={`c-${index}`}/>
                                </div>
                                <h6 className='m-0 text-center'>{category.display}</h6>
                            </Link>
                        </Col>
                    ))
                }

            </Row>
        </Container>
    );
};

export default Category;