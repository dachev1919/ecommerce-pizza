import { Col } from "reactstrap";
import ProductCard from "./UI/Product/ProductCard";
import products from "../assets/fake-data/products";

function fixCategoryName(category) {
    return category.trim().toLowerCase();
}

function productsFilter(products, categoryName) {
    return products.filter((product) => fixCategoryName(product.category) === categoryName);
}
const ProductsList = ({filtered = '', limit = 0}) => {
    const categoryName = fixCategoryName(filtered);

    const productList = categoryName !== '' && categoryName !== 'all'
        ? productsFilter(products, categoryName, limit)
        : products;


    return (
        productList.map((product, index) => {
            if (limit === 0 || limit > index) {
                return (
                    <Col className="mt-5 col-12" key={ product.id } xxl="3" lg="4" sm="6">
                        <ProductCard data={ product }></ProductCard>
                    </Col>
                )
            }

            return false;
        })
    );
};

export default ProductsList;