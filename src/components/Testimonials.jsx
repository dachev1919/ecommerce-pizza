import styles from '../styles/components/Testimonials.module.css';
import { Col, Container, Row } from "reactstrap";

import networkImg from "../assets/images/network.png";
import TestimonialSlider from "./UI/Sliders/TestimonialSlider";
const Testimonials = () => {
    return (
        <Container className={styles['testimonial__wrapper']}>
            <Row>
                <Col lg='6' md='6'>
                    <h5 className={`${styles['testimonial__subtitle']}`}>Testimonial</h5>
                    <h2 className={`${styles['testimonial__title']}`}>What our <span>customers</span> are saying</h2>
                    <p className={styles['testimonial__description']}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ab animi impedit, numquam quos repellendus repudiandae rerum
                        sunt? Iure, maiores optio.
                    </p>
                    <TestimonialSlider />
                </Col>
                <Col lg='6' md='6'>
                    <img src={networkImg} alt="testimonials"/>
                </Col>
            </Row>
        </Container>
    );
};

export default Testimonials;