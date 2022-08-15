import React from 'react'
import { ReactSVG } from 'react-svg'
import { useSwiper, useSwiperSlide } from 'swiper/react'
import styles from './Slider.module.scss'
import classnames from 'classnames'
import { SlideNavigation } from 'type/slider'
import { getFixedPathForDeploy } from 'utils/path'

import arrowLeft from 'img/arrow_left.svg'
import arrowRight from 'img/arrow_right.svg'


export default function SliderNavigation({nextTag, prevTag}: SlideNavigation) {
  const swiper = useSwiper()

  const onLeftClickHandler = () => swiper.slidePrev()
  const onRightClickHandler = () => swiper.slideNext()

  const prevClasses = classnames(styles.button, {
    [styles['button--disabled']]: swiper.isBeginning
  })
  const nextClasses = classnames(styles.button, {
    [styles['button--disabled']]: swiper.isEnd
  })

  const CustomPrevTag = prevTag as keyof JSX.IntrinsicElements
  const CustomNextTag = nextTag as keyof JSX.IntrinsicElements

  return (
    <div className={styles.navigation}>
      <CustomPrevTag onClick={onLeftClickHandler} className={prevClasses}>
        <ReactSVG src={getFixedPathForDeploy(arrowLeft)} wrapper="span"/>
      </CustomPrevTag>
      <CustomNextTag onClick={onRightClickHandler} className={nextClasses}>
        <ReactSVG src={getFixedPathForDeploy(arrowRight)} wrapper="span"/>
      </CustomNextTag>
    </div>
  )
}
