export const getFixedPathForDeploy = (img: string): string => {
  const mode = process.env.NODE_ENV

  if (mode === 'development')
    return img

  return `.${img}`
}