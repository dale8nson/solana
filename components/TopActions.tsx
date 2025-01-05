"use client"
import { CTA } from "./CTA"

const TopActions = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-4">
      <CTA onClick={() => { }} className="rounded-3xl px-8 py-1">START BUILDING</CTA>
      <CTA gradient={false} className="border-2 border-solid bg-black text-white rounded-3xl px-8" onClick={() => { }}>READ DOCS</CTA>
    </div>
  )
}

export { TopActions }