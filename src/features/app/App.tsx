import classNames from 'classnames'
import { MOCK_SLIDER } from 'config/mocks'
import Slider from 'element/slider/Slider'
import React from 'react'
import styles from './App.module.scss'
import AnimatedCursor from "lib/react-animated-cursor"

export default function App() {
  return (
    <>
      <AnimatedCursor 
        innerSize={0}
        outerSize={50}
        color={"99, 186, 105"}
        outerAlpha={0.7}
        innerScale={0}
        outerScale={2}
        trailingSpeed={5}
      />
      <section className={styles.app}>
        <h1 className={classNames('h2', styles.app__title)}>Кейсы</h1>
        <Slider slides={MOCK_SLIDER}/>
      </section>
    </>
  )
}
