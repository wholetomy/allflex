/* // Import Swiper React components
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/navigation';
import 'swiper/pagination';

export default class Carrossel extends React.Component {
    render() {
        return (
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>aaaaaa</SwiperSlide>
                <SwiperSlide>bbbbb</SwiperSlide>
                <SwiperSlide>ccccccc</SwiperSlide>
                <SwiperSlide>aaaaaa</SwiperSlide>
                <SwiperSlide>bbbbb</SwiperSlide>
                <SwiperSlide>ccccccc</SwiperSlide>
                <SwiperSlide>aaaaaa</SwiperSlide>
                <SwiperSlide>bbbbb</SwiperSlide>
                <SwiperSlide>ccccccc</SwiperSlide>

            </Swiper>
        );
    }
}; */