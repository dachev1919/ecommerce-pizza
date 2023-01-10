import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartAction } from "../../../store/shopping-cart/cartSlice";
import { toast } from "react-toastify";

const ProductCard = ({ data }) => {
    const {id, title, price, image01} = data;
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(cartAction.addItem({
            id,
            title,
            price,
            image01,
        }));

        toast.success('Product added successfully');
    };

    return (
        <div className={ styles["product__card"] }>
            <div className={ styles["product__image"] }>
                <Link to={`/ecommerce-pizza/foods/${id}`}>
                    <img src={ image01 } alt="prod-img"/>
                </Link>
            </div>
            <div className={ styles["product__content"] }>
                <h5 className={ styles["product__title"] }><Link to={`/ecommerce-pizza/foods/${id}`}>{ title }</Link></h5>
                <div>
                    <span className={ styles["product__price"] }>${ price }</span>
                    <button className="btn__primary without__responsive btn d-block m-auto mt-2 mb-3" onClick={addToCart}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;