import React from 'react'
import { BubblesProps } from 'type/bubbles'
import Bubble from './Bubble'
import styles from './Bubbles.module.scss'

export default function Bubbles({bubbles, children}: BubblesProps) {
  return (
    <div className={styles.wrap}>
      {children}
      {
        bubbles.map((bubble, index) => (
          <Bubble key={index} {...bubble}/>
        ))
      }
    </div>
  )
}
