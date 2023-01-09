import { Col, Container, Row } from "reactstrap";
import styles from "../styles/components/Hero.module.css";
import { Link } from "react-router-dom";
import heroImg from "../assets/images/hero.png";

const Hero = () => {
    return (
        <Container>
            <Row>
                <Col md="6">
                    <div className={ styles["hero__content"] }>
                        <h5 className="mb-3">Easy way to make an order</h5>
                        <h1 className={ styles["hero__title"] }>
                            <span className="text-uppercase mb-4">Hungry?</span> Just wait<br/> food
                            at <span>your door</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ad alias consequatur, ea facere quis vel!
                        </p>
                        <div className={ `d-flex gap-5 mt-4` }>
                            <button
                                className={ `btn__primary with-icon btn d-flex align-items-center justify-content-between` }
                            >
                                Order now
                                <i className="ri-arrow-right-s-line d-flex"/>
                            </button>
                            <button className={ `btn__secondary btn` }><Link
                                to={ "/ecommerce-pizza/foods" }>See all foods</Link></button>
                        </div>
                        <div
                            className={ `${ styles["hero__content-footer"] } d-flex flex-lg-row flex-column align-items-start gap-2 gap-lg-5 mt-5` }>
                            <p className={ `d-flex align-items-center gap-2` }>
                                        <span className={ styles["shipping__icon"] }>
                                            <i className="ri-car-line"/>
                                        </span>
                                No shipping charge
                            </p>
                            <p className={ `d-flex align-items-center gap-2` }>
                                        <span className={ styles["shield__icon"] }>
                                            <i className="ri-shield-check-line"/>
                                        </span>
                                100% secure checkout
                            </p>
                        </div>
                    </div>
                </Col>

                <Col md="6">
                    <div className={ styles["hero__img"] }>
                        <img src={ heroImg } alt="hero"/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Hero;