import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const Slider = ({origin, delay=2000, perview=1, base}) => {
    return (
        <Swiper
            modules={[ Autoplay ]}
            spaceBetween={20}
            slidesPerView={perview}
            loop={true}
            autoplay={{ delay: delay }}
            className='swiper__container'
        >
            {base.map((element) => (
                <SwiperSlide key={element.id} className={`${origin}__slider`}>
                    <a href={element.link} target='_blank' rel="noreferrer">
                        <img src={element.img} alt="" />
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Slider