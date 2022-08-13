import { IBubbles } from "./bubbles"

export type SlideItems = {
  "Направление": string,
  "Тип проекта": string,
  "Отрасль":     string
} 

export interface ISlide {
  heading: string,
  paragraph: string,
  image: string,
  items: SlideItems,
  color: "green" | "purple",
  bubbles: IBubbles[]
}

export type SliderProps = {
  slides: ISlide[]
}

export type SlideNavigation = {
  nextTag: string,
  prevTag: string
}

export type SlideProps = {
  slide: ISlide,
  isActive: boolean,
  navigation: SlideNavigation
}

export type SlideItemsProps = {
  items: SlideItems
}