import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import ISwite, { EffectFade, Mousewheel } from "swiper";
import { SliderProps } from 'type/slider';
import SliderSlide from './SliderSlide';

import "swiper/css";
import 'swiper/css/effect-fade';
import 'img/macbook.png'

export default function Slider({slides}: SliderProps) {
  const [prevTag, setPrevTag] = React.useState('div')
  const [nextTag, setNextTag] = React.useState('button')

  const onChangedHandler = (swiper: ISwite) => {
    const begginning = swiper.isBeginning ? "div" : "button"
    const end = swiper.isEnd ? "div" : "button"

    setPrevTag(begginning)
    setNextTag(end)
  }

  return (
    <Swiper
        direction={"horizontal"}
        slidesPerView={1}
        mousewheel={true}
        effect="fade"
        modules={[Mousewheel, EffectFade]}
        speed={1000}
        allowTouchMove={false}
        onSlideChangeTransitionEnd={onChangedHandler}
      >
        {
          slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {({isActive}) => (
                <SliderSlide 
                  slide={slide} 
                  isActive={isActive}
                  navigation={{prevTag, nextTag}}
                />
              )}
            </SwiperSlide>
          ))
        }
      </Swiper>
  )
}
