import { useId } from "react"

const GradientText = ({from, to, className="", children }: {from:string, to:string, className?: string, children: string }) => {
  const id = useId()
  return (
    <svg width="100" height="70" viewBox="0 0 100 70" className={className} >
      <defs>
        <linearGradient id={id} x1="0%" x2="100%" y1="100%" y2="0%">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <text x="0" y="35" width="100" height="70" fill={`url(#${id})`} >{children}</text>
    </svg>
  )
}

export { GradientText }