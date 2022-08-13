import React from "react"

export interface IBubbles {
  size: {width: number | string, height: number | string},
  position: {x: number | string, y: number | string},
  color: string,
  sensitivity?: number,
  zIndex?: number
}

export type BubblesProps = {
  children?: React.ReactNode,
  bubbles: IBubbles[]
}