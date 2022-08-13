import React from 'react'
import { SlideItemsProps } from 'type/slider'
import _ from 'lodash'
import styles from './Slider.module.scss'

export default function SliderItems({items}: SlideItemsProps) {
  return (
    <ul className={styles.list}>
      {
        _.map(items, (value, key) => (
          <li key={key} className={styles.list__item}>
            <h4>{key}</h4>
            <div className={styles.list__description}>{value}</div>
          </li>
        ))
      }
    </ul>
  )
}