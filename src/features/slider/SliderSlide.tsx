import React from 'react'
import { SlideProps } from 'type/slider'
import styles from './Slider.module.scss'
import SliderNavigation from './SliderNavigation'
import SliderItems from './SliderItems'
import classnames from 'classnames'
import "img/glass_texture.png"
import Bubbles from 'element/bubbles/Bubbles'

export default function SliderSlide({slide, isActive, navigation}: SlideProps) {
  const slideClasses = classnames(styles.slide, {
    [styles[`slide--${slide.color}`]]: slide.color,
    [styles['slide--active']]: isActive
  })

  return (
    <div className={slideClasses}>
      <div className={styles.slideinfo}>
        <h3 className={styles.slideinfo__title}>{slide.heading}</h3>
        <div className={styles.slideinfo__desc}>{slide.paragraph}</div>
        <SliderNavigation {...navigation}/>
        <SliderItems items={slide.items}/>
      </div>
      <Bubbles bubbles={slide.bubbles}>
        <div className={styles.slide__macbook}>
          <div className={styles.slide__imgwrap}>
            <img src={slide.image} alt={slide.heading} className={styles.slide__img}/>
          </div>
        </div>
      </Bubbles>
    </div>
  )
}
