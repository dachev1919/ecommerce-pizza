import styles from "../styles/components/WhyTasty.module.css";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import whyImg from "../assets/images/location.png";

const WhyTasty = () => {
    return (
        <Container>
            <Row>
                <Col md="6">
                    <img src={ whyImg } alt="why-img"/>
                </Col>
                <Col md="6">
                    <div className={ styles["why-content"] }>
                        <h2 className={`${styles["why-content__title"]}`}>Why <span>Tasty Treat</span>?</h2>
                        <p className={styles['why-content__text']}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ab, adipisci dolore doloremque necessitatibus placeat quibusdam
                            soluta! A consequatur, culpa dolorem esse eveniet facere magnam,
                            minus nam nihil, omnis ratione unde?
                        </p>
                        <ListGroup className={`${styles['why-content__list']}`}>
                            <ListGroupItem className={`${styles['why-content__list-item']}`}>
                                <p className={`${styles['why-content__list-title']} d-flex align-items-center gap-2`}>
                                    <i className='ri-checkbox-circle-line'/>
                                    Fresh and tasty foods
                                </p>
                                <p className={styles['why-content__list-description']}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, excepturi!</p>
                            </ListGroupItem>
                            <ListGroupItem className={`${styles['why-content__list-item']}`}>
                                <p className={`${styles['why-content__list-title']} d-flex align-items-center gap-2`}>
                                    <i className='ri-checkbox-circle-line'/>
                                    Quality supports
                                </p>
                                <p className={styles['why-content__list-description']}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, excepturi!</p>
                            </ListGroupItem>
                            <ListGroupItem className={styles['why-content__list-item']}>
                                <p className={`${styles['why-content__list-title']} d-flex align-items-center gap-2`}>
                                    <i className='ri-checkbox-circle-line'/>
                                    Order from any location
                                </p>
                                <p className={styles['why-content__list-description']}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, excepturi!</p>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default WhyTasty;