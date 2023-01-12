import styles from "../styles/pages/Login.module.css";
import Helmet from "../components/helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        setLogin('');
        setPassword('');
    }

    return (
        <Helmet title="Login">
            <CommonSection title="Login"/>
            <section className={ `${ styles.login } d-flex align-items-center` }>
                <Container>
                    <Row>
                        <Col md="5" className="m-auto text-center">
                            <form className={ styles["login__form"] } onSubmit={submitHandler}>
                                <div className="form__group">
                                    <input
                                        value={login}
                                        onChange={(e) => setLogin(e.target.value)}
                                        type="text"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <button className="btn__primary btn">Login</button>
                            </form>
                            <Link className="mt-4 d-block" to={ "/ecommerce-pizza/registration" }>Don`t have an
                                account? Create an account</Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Login;