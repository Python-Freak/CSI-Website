import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import styles from "./EventSwiper.module.css"
import 'swiper/css';

export default () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className={styles.swiper}

        >

            <SwiperSlide>
                <img className={styles.swiper_image} src="/assets/images/events/past/sample_event_2.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={styles.swiper_image} src="/assets/images/events/past/sample_event_2.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={styles.swiper_image} src="/assets/images/events/past/sample_event_2.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={styles.swiper_image} src="/assets/images/events/past/sample_event_2.jpeg" alt="" />
            </SwiperSlide>
        </Swiper>
    );
};