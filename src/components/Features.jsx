import { Col, Container, Row } from "reactstrap";
import styles from "../styles/components/Features.module.css";
import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

const FEATURE__DATA = [
    {
        title: "Quick Delivery",
        imgUrl: featureImg01,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, temporibus.",
    },
    {
        title: "Super Dine In",
        imgUrl: featureImg02,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, temporibus.",
    },
    {
        title: "Easy Pick Up",
        imgUrl: featureImg03,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, temporibus.",
    },
];

const Features = () => {
    return (
        <Container>
            <Row>
                <Col lg="12" className="text-center">
                    <h5 className={ `${ styles["feature__subtitle"] } mb-4` }>What we serve</h5>
                    <h2 className={ styles["feature__title"] }>Just sit back at home</h2>
                    <h2 className={ styles["feature__title"] }>we will <span>take care</span></h2>
                    <p className={ `mb-1 mt-4 ${ styles["feature__text"] }` }>Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Asperiores commodi culpa distinctio esse iure pariatur sed
                        sint? Molestias, porro ut.</p>
                </Col>

                {
                    FEATURE__DATA.map((feature, index) => (
                        <Col className="mt-5" key={ index } md="4">
                            <div className={ `${ styles["feature__item"] } mt-3 text-center px-4 py-3` }>
                                <img className="w-25 mb-3" src={ feature.imgUrl } alt={ `feature-${ index }` }/>
                                <h5 className="fw-bold mb-3">{ feature.title }</h5>
                                <p>{ feature.desc }</p>
                            </div>
                        </Col>
                    ))
                }

            </Row>
        </Container>
    );
};

export default Features;