import styles from "./Header.module.css";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartUiAction } from "../../store/shopping-cart/cartUiSlice";

const NAV__LINKS = [
    {
        display: "Home",
        path: "/ecommerce-pizza",
    },
    {
        display: "Foods",
        path: "/ecommerce-pizza/foods",
    },
    {
        display: "Cart",
        path: "/ecommerce-pizza/cart",
    },
    {
        display: "Contact",
        path: "/ecommerce-pizza/contact",
    },
];

const Header = () => {
    const mobileMenu = useRef(null);
    const headerRef = useRef(null);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const dispatch = useDispatch();
    const toggleMenu = () => mobileMenu.current.classList.toggle(styles.show);

    const toggleCart = () => {
        dispatch(cartUiAction.showCart())
    }

    const stickyHeaderFunc = () => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add(styles.sticky);
            } else {
                headerRef.current.classList.remove(styles.sticky);
            }
        });
    };

    useEffect(() => {
        stickyHeaderFunc();

        return () => window.removeEventListener("scroll", stickyHeaderFunc);
    }, []);

    return (
        <header ref={headerRef} className={ styles.header }>
            <Container>
                <div className={ `${ styles["nav__wrapper"] } d-flex align-items-center justify-content-between` }>
                    <Link to="/ecommerce-pizza" className={ styles.logo }>
                        <img src={ logo } alt="logo"/>
                        <h5>ePizza</h5>
                    </Link>

                    <div ref={mobileMenu} className={ styles.navigation } onClick={toggleMenu}>
                        <div className={ `${ styles.menu } d-flex align-items-center gap-5` }>
                            {
                                NAV__LINKS.map((link, index) => (
                                    <NavLink
                                        className={ ({ isActive }) => isActive ? styles["active__menu"] : "" }
                                        key={ index }
                                        to={ link.path }
                                        end
                                    >
                                        { link.display }
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>

                    <div className={ `${ styles["nav__right"] } d-flex align-items-center gap-4` }>
                        <span className={ styles["cart__icon"] } onClick={toggleCart}>
                            <i className="ri-shopping-basket-line"/>
                            <span className={ styles["cart__badge"] }>{ totalQuantity }</span>
                        </span>

                        <span className={ styles['user__icon'] }>
                            <Link to="/ecommerce-pizza/login"><i className="ri-user-line"/></Link>
                        </span>

                        <span className={ `${styles["mobile__icon"]} d-lg-none` } onClick={toggleMenu}>
                            <i className="ri-menu-line"/>
                        </span>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;