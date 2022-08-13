export const getCssValue = (value: string | number): string | number => {
  if (typeof value === 'string')
    return value

  return `${value}px`
}

export const addTransformProps = (element: HTMLInputElement | null, prop: string, value: string): void => {
  const props: string | undefined = element?.style.transform
  const propsArr: string[] | undefined = props?.split(' ')
  
  if (!element) {
    console.log('error', element)
    return
  }

  if(!props) {
    console.log('no props', `${prop}(${value})`)
    element.style.transform = `${prop}(${value})`
    return
  }

  console.log('working')
  if (props.includes(prop)) {
    element.style.transform = ''
    propsArr?.map(innerProp => {
      if (innerProp.includes(prop)) {
        element.style.transform = `${element.style.transform} ${prop}(${value})`
      } else {
        element.style.transform = `${element.style.transform} ${innerProp}`
      }
    })
    return
  }

  element.style.transform = `${props} ${prop}(${value})`
}