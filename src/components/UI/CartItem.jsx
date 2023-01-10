import styles from "../../styles/components/CartItem.module.css";
import { ListGroupItem } from "reactstrap";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/shopping-cart/cartSlice";

const Cart = ({title, price, image01, quantity, product}) => {
    const dispatch = useDispatch();

    const quantityAddHandler = () => {
        dispatch(cartAction.addItem(product));
    }
    
    const quantityDecreaseHandler = () => {
        dispatch(cartAction.removeItem(product));
    }

    return (
        <ListGroupItem className='border-0'>
            <div className={ `${styles["cart__item"]} d-flex gap-4` }>
                <img src={ image01 } alt="product-img"/>

                <div className={ `${styles["cart__product-info"]} d-flex align-items-start justify-content-between w-100` }>
                    <div>
                        <h6 className={styles["cart__product-title"]}>{ title }</h6>
                        <p className={ `${styles['cart__price']} d-flex align-items-center gap-3` }>{ quantity }x <span>${ price }</span></p>
                        <div className={`${styles['cart__increase']} d-flex align-items-center gap-2`}>
                            <span className={styles['cart__increase-button']} onClick={quantityDecreaseHandler}>
                                <i className="ri-subtract-line"/>
                            </span>
                            <span>{ quantity }</span>
                            <span className={styles['cart__increase-button']} onClick={quantityAddHandler}>
                                <i className="ri-add-line"/>
                            </span>
                        </div>
                    </div>

                    <span className={styles['cart__delete']}><i className="ri-close-line"/></span>
                </div>
            </div>
        </ListGroupItem>
    );
};

export default Cart;