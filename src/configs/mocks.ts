import { ISlide } from "type/slider";

import slider1 from 'img/slider_00.jpg';
import slider2 from 'img/slider_01.jpg';

export const MOCK_SLIDER: ISlide[] = [
  {
    heading: "Создание корпоративного сайта для холдинга «АМКОДОР»",
    paragraph: "Разработать и запустить корпоративный сайт для холдинга “АМКОДОР” для развития дилерской сети на рынках Беларуси и стран СНГ.",
    image: slider1,
    color: "green",
    items: {
      "Направление": "WEB-разработка",
      "Тип проекта": "Корпоративные сайты",
      "Отрасль": "Производство, Торговля",
    },
    bubbles: [
      {
        size: {
          height: 282,
          width: 282
        },
        position: {
          x: window.innerWidth/6,
          y: 0
        },
        color: "green",
        zIndex: 3,
        sensitivity: 2.8,
      },
      {
        size: {
          height: 222,
          width: 222
        },
        position: {
          x: 40,
          y: window.innerHeight-240
        },
        color: "green",
        zIndex: 3,
        sensitivity: 2,
      },
      {
        size: {
          height: 330,
          width: 330
        },
        position: {
          x: window.innerWidth-340,
          y: window.innerHeight-280
        },
        color: "green",
        zIndex: 1,
        sensitivity: 3,
      },
    ]
  },
  {
    heading: "Создание маркетплейса для бизнеса по перепродаже одежды",
    paragraph: "Brands&Charity — благотворительная онлайн — платформа для перепродажи брендовых вещей, цель которой превратить ненужные одним людям вещи в полезный ресурс для других.",
    image: slider2,
    color: "purple",
    items: {
      "Направление": "WEB-разработка",
      "Тип проекта": "Интернет-магазины",
      "Отрасль": "Торговля",
    },
    bubbles: [
      {
        size: {
          height: 330,
          width: 330,
        },
        position: {
          x: -115,
          y: -115,
        },
        color: "purple",
        zIndex: 1,
        sensitivity: 3,
      },
      {
        size: {
          height: 190,
          width: 190,
        },
        position: {
          x: window.innerWidth/2,
          y: 60,
        },
        color: "purple",
        zIndex: 3,
        sensitivity: 2,
      },
      {
        size: {
          height: 316,
          width: 316,
        },
        position: {
          x: window.innerWidth-330,
          y: window.innerHeight-330,
        },
        color: "purple",
        zIndex: 3,
        sensitivity: 3,
      },
    ]
  },
]