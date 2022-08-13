import React from 'react'
import { addTransformProps, getCssValue } from 'utils/css'
import { IBubbles } from 'type/bubbles'
import styles from './Bubbles.module.scss'
import classNames from 'classnames'

export default function Bubble(props: IBubbles) {
  const {
    size,
    position,
    zIndex = 1,
    color = 'green',
    sensitivity = 3
  } = props

  const bubbleStyle = {
    zIndex,
    height: getCssValue(size.height),
    width: getCssValue(size.width),
    top: getCssValue(position.y),
    left: getCssValue(position.x),
  }

  const bubbleClasses = classNames(styles.bubble, styles[`bubble--${color}`])

  const bubbleRef: React.RefObject<HTMLInputElement> = React.createRef()

  const bubbleEffect = (e: MouseEvent) => {
    const mousePisitionX: number          = e.pageX-window.innerWidth/2
    const mousePisitionY: number          = e.pageY-window.innerWidth/2
    const bubble: HTMLInputElement | null = bubbleRef.current
    
    addTransformProps(bubble, 'translate', `${mousePisitionX/100*sensitivity}%,${mousePisitionY/100*sensitivity}%`)
  }

  React.useEffect(() => {
    window.addEventListener('mousemove', bubbleEffect)
    return () => {
      window.removeEventListener('mousemove', bubbleEffect)
    }
  }, [bubbleRef])

  return (
    <div className={'bubble'} style={bubbleStyle}> 
      <div className={bubbleClasses} ref={bubbleRef}/>
    </div>
  )
}
