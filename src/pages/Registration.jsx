import styles from '../styles/pages/Registration.module.css';
import CommonSection from "../components/UI/common-section/CommonSection";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import Helmet from "../components/helmet/Helmet";
import { useState } from "react";

const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        setName('');
        setEmail('');
        setPassword('');
    }

    return (
        <Helmet title="Registration">
            <CommonSection title="Registration"/>
            <section className={ `${ styles.registration } d-flex align-items-center` }>
                <Container>
                    <Row>
                        <Col md="5" className="m-auto text-center">
                            <form className={ styles["login__form"] } onSubmit={submitHandler}>
                                <div className="form__group">
                                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" required/>
                                </div>
                                <div className="form__group">
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" required/>
                                </div>
                                <div className="form__group">
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required/>
                                </div>
                                <button className="btn__primary btn">Sign In</button>
                            </form>
                            <Link className="mt-4 d-block" to={ "/ecommerce-pizza/login" }>Already have an
                                account? Login</Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Registration;