import styles from "./Footer.module.css";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className={ styles.footer }>
            <Container>
                <Row>
                    <Col md="3" sm="6" className={ styles["footer__logo"] }>
                        <Link to="/ecommerce-pizza" className={ styles.logo }>
                            <img src={ logo } alt="f-logo"/>
                            <h5>ePizza</h5>
                        </Link>
                        <p className={`${styles['footer__text']} mt-3`}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Autem consequuntur eaque ipsum, iusto voluptate voluptatem!
                        </p>
                    </Col>

                    <Col md="3" sm="6">
                        <h5 className={ styles["footer__title"] }>Delivery Time</h5>
                        <ListGroup>
                            <ListGroupItem className={ `${ styles["delivery__time-item"] } border-0 ps-0` }>
                                <span>Sunday - Thursday</span>
                                <p>10:00am - 11:00pm</p>
                            </ListGroupItem>
                            <ListGroupItem className={ `${ styles["delivery__time-item"] } border-0 ps-0` }>
                                <span>Friday - Saturday</span>
                                <p>Off day</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col md="3" sm="6">
                        <h5 className={ styles["footer__title"] }>Contact</h5>
                        <ListGroup>
                            <ListGroupItem className={ `${ styles["delivery__time-item"] } border-0 ps-0` }>
                                <p>Location: Soborna 23, Mykolaiv, Ukraine</p>
                            </ListGroupItem>
                            <ListGroupItem className={ `${ styles["delivery__time-item"] } border-0 ps-0` }>
                                <p>Phone: <a href="tel:38063637362">38063637362</a></p>
                            </ListGroupItem>
                            <ListGroupItem className={ `${ styles["delivery__time-item"] } border-0 ps-0` }>
                                <p>Email: <a href="mailto:admin@gmail.com">admin@gmail.com</a></p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col className={ styles["footer__newsletter"] } md="3" sm="6">
                        <h5 className={ styles["footer__title"] }>Newsletter</h5>
                        <p className={`${styles['footer__text']} mb-3`}>Subscribe our newsletter</p>
                        <div className={ styles.newsletter }>
                            <input type="email" placeholder="Enter your email"/>
                            <button><i className="ri-send-plane-line"/></button>
                        </div>
                        <Col className={`${styles['social__links']} d-flex gap-3 align-items-center mt-3`}>
                            <p className='m-0'>Follow</p>
                            <span><Link to="/ecommerce-pizza"><i className='ri-facebook-line'/></Link></span>
                            <span><Link to="/ecommerce-pizza"><i className='ri-instagram-line'/></Link></span>
                            <span><Link to="/ecommerce-pizza"><i className='ri-telegram-line'/></Link></span>
                            <span><Link to="/ecommerce-pizza"><i className='ri-mail-line'/></Link></span>
                        </Col>
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col className={`${styles['rights']} text-center`}>
                        <p className='m-0'>Copyright - 2023 developed by Dachev. All rights reserved.</p>
                    </Col>

                </Row>
            </Container>
        </footer>
    );
};

export default Footer;