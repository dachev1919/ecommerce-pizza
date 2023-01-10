import Helmet from "../components/Helmet/Helmet";
import styles from "../styles/pages/Home.module.css";
import Category from "../components/UI/Category/Category";
import Hero from "../components/Hero";
import Features from "../components/Features";
import PopularProducts from "../components/PopularProducts";
import WhyTasty from "../components/WhyTasty";
import { Col, Container, Row } from "reactstrap";
import ProductsList from "../components/ProductsList";
import Testimonials from "../components/Testimonials";

const Home = () => {
    return (
        <Helmet title="Home">
            <section className={ styles.home }>
                <Hero/>
            </section>

            <section className={ `${ styles.category } pt-0` }>
                <Category/>
            </section>

            <section className={ styles.feature }>
                <Features/>
            </section>

            <section className={ styles["popular__products"] }>
                <PopularProducts/>
            </section>

            <section className={ styles["why__tasty"] }>
                <WhyTasty/>
            </section>

            <section className='pt-0'>
                <Container>
                    <Row>
                        <Col className='text-center col-12'>
                            <h2>Hot Pizza</h2>
                        </Col>
                        <ProductsList filtered='pizza' limit={4}/>
                    </Row>
                </Container>
            </section>

            <section>
                <Testimonials />
            </section>
        </Helmet>
    );
};

export default Home;