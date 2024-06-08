import React from 'react';
import Slider from 'react-slick';
import styles from '../styles/Home.module.css';
import { modalImages } from '../Utilities/Constants';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className={styles.carouselContainer}>
            <Slider {...settings}>
                {modalImages?.map((item, index) => (
                    <div key={index} className={styles.carouselSlide}>
                        <img
                            src={item.src.src}
                            className={styles.carouselImage}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carousel;
