declare module "*.png" {
  const img: string
  export default img
}
declare module "*.jpg" {
  const img: string
  export default img
}

declare module "*.module.scss" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.svg"

declare module '*.json' {
  const content: Record<string, string>;
  export default content;
}