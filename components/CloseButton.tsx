"use client"
import { MouseEventHandler } from "react"

const CloseButton = ({ onClick }: { onClick: MouseEventHandler }) => {
  return (
    <button className="absolute top-2 right-2" onClick={onClick}>
      <svg
        className="w-4 h-4"
        fill="black"
        stroke="black"
        viewBox="0 0 24 24"
      >
        <line x1={1} y1={1} x2={23} y2={23} strokeWidth={3} rx={1} />
        <line x1={1} y1={23} x2={23} y2={1} strokeWidth={3} rx={1} />
      </svg>
    </button>
  )
}

export { CloseButton }
