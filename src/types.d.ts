declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGProps<SVGElement>>
  export default content
}

declare module '*.gif'
declare module '*.jpeg'
declare module '*.jpg'
declare module '*.png'

declare module '*.module.css' {
  const classNames: Record<string, string>
  export default classNames
}
