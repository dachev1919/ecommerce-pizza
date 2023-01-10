import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from './TestimonialsSlider.module.css';
import ava01 from '../../../assets/images/ava-1.jpg';
import ava02 from '../../../assets/images/ava-2.jpg';
import ava03 from '../../../assets/images/ava-3.jpg';
import ava04 from '../../../assets/images/ava-4.jpg';

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 6000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <Slider {...settings}>
            <div>
                <p className={styles['slider__text']}>
                    <span className={styles['slider__text-icon_l']}><i className="ri-double-quotes-l"/></span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ab amet consequuntur cumque cupiditate ea et id impedit
                    ipsum modi molestiae nostrum odit porro quo quos,
                    reprehenderit soluta suscipit tempora tempore!
                    <span className={styles['slider__text-icon_r']}><i className="ri-double-quotes-r"/></span>
                </p>
                <div className='d-flex align-items-center gap-3'>
                    <img src={ava01} alt="ava-1" className={styles['slider__image']}/>
                    <h6 className={styles['slider__name']}>Jhon Doe</h6>
                </div>
            </div>
            <div>
                <p className={styles['slider__text']}>
                    <span className={styles['slider__text-icon_l']}><i className="ri-double-quotes-l"/></span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ab amet consequuntur cumque cupiditate ea et id impedit
                    ipsum modi molestiae nostrum odit porro quo quos,
                    reprehenderit soluta suscipit tempora tempore!
                    <span className={styles['slider__text-icon_r']}><i className="ri-double-quotes-r"/></span>
                </p>
                <div className='d-flex align-items-center gap-3'>
                    <img src={ava02} alt="ava-2" className={styles['slider__image']}/>
                    <h6 className={styles['slider__name']}>Mitch Marsh</h6>
                </div>
            </div>
            <div>
                <p className={styles['slider__text']}>
                    <span className={styles['slider__text-icon_l']}><i className="ri-double-quotes-l"/></span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ab amet consequuntur cumque cupiditate ea et id impedit
                    ipsum modi molestiae nostrum odit porro quo quos,
                    reprehenderit soluta suscipit tempora tempore!
                    <span className={styles['slider__text-icon_r']}><i className="ri-double-quotes-r"/></span>
                </p>
                <div className='d-flex align-items-center gap-3'>
                    <img src={ava03} alt="ava-3" className={styles['slider__image']}/>
                    <h6 className={styles['slider__name']}>Steven Crock</h6>
                </div>
            </div>
            <div>
                <p className={styles['slider__text']}>
                    <span className={styles['slider__text-icon_l']}><i className="ri-double-quotes-l"/></span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ab amet consequuntur cumque cupiditate ea et id impedit
                    ipsum modi molestiae nostrum odit porro quo quos,
                    reprehenderit soluta suscipit tempora tempore!
                    <span className={styles['slider__text-icon_r']}><i className="ri-double-quotes-r"/></span>
                </p>
                <div className='d-flex align-items-center gap-3'>
                    <img src={ava04} alt="ava-4" className={styles['slider__image']}/>
                    <h6 className={styles['slider__name']}>Amanda Brown</h6>
                </div>
            </div>
        </Slider>
    );
};

export default TestimonialSlider;