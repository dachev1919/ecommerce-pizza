import { Col, Container, Row } from "reactstrap";
import styles from './CommonSection.module.css';

const CommonSection = (props) => {
    return (
        <section className={styles['common-section']}>
            <Container>
                <h2>{props.title}</h2>
                <Row>
                    <Col></Col>
                </Row>
            </Container>
        </section>
    );
};

export default CommonSection;