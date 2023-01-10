import styles from '../styles/pages/AllFoods.module.css';
import Helmet from "../components/helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

const AllFoods = () => {
    return (
        <Helmet title='All Foods'>
            <CommonSection title='All Foods' />
        </Helmet>
    );
};

export default AllFoods;