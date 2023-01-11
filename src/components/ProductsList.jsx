import { Col } from "reactstrap";
import ProductCard from "./UI/product/ProductCard";
import products from "../assets/fake-data/products";

function fixCategoryName(category) {
    return category.trim().toLowerCase();
}

function productsFilter(products, filterName, searchValue) {
    if (filterName === 'search') {
        return products.filter((product) => {
            if (searchValue === '') return product;

            if (searchValue !== '' && product.title.toLowerCase().includes(searchValue)) {
                return product;
            }

            return false;
        })
    }

    if (filterName === 'ascending') {
        return products.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (filterName === 'descending') {
        return products.sort((a, b) => b.title.localeCompare(a.title));
    }

    if (filterName === 'high-price') {
        return products.sort((a, b) => Number(b.price) - Number(a.price));
    }

    if (filterName === 'low-price') {
        return products.sort((a, b) => Number(a.price) - Number(b.price));
    }

    if (filterName === 'default-search') {
        return products;
    }

    return products.filter((product) => fixCategoryName(product.category) === filterName);
}
const ProductsList = ({filtered = '', limit = 0, searchValue = ''}) => {
    const filterName = fixCategoryName(filtered);

    const productList = filterName !== '' && filterName !== 'all'
        ? productsFilter(products, filterName, searchValue)
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