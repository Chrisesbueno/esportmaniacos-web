import React, { useState } from 'react'
import { Award, Button, Nominees } from '../../components'
import { buttons, premios } from '../../constants'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import './awards.css'

const Awards = (props) => {
  const [globalCounter, setGlobalCounter] = useState(0)
  
  return (
    <div className='awards'>
      <Swiper
        modules={[ Autoplay, Navigation, Pagination ]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        className='container'
      >
        {premios.map((premio) => (
            <SwiperSlide key={premio.id} className={`awards__slider`}>
                <Award origin={`-premio`} first={premio.first} second={premio.second} third={premio.third} />
                <div>
                  <Nominees origin={premio.nominees} globalCounter={globalCounter} handleGlobalCounter={setGlobalCounter} local={premio.id}/>
                </div> 
            </SwiperSlide>
        ))}
        <div className="counter__container">
          <p>Has votado {globalCounter} premios!</p>
          <Button link={buttons[1].link} title={buttons[1].title} icon={buttons[1].icon} />
        </div>
      </Swiper>
    </div>  
  )
}

export default Awards