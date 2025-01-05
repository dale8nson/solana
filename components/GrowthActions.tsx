"use client"
import { CTA } from "./CTA"

const GrowthActions = () => {
  return (
    <div className="flex flex-wrap flex-row gap-8 w-full">
      <CTA onClick={() => { }} gradient={false} className="border-[#a962ff] border-solid border-2 p-4 rounded-xl bg-[#111]">NFTs</CTA>
      <CTA onClick={() => { }} gradient={false} className="p-4 rounded-xl bg-[#111]">DeFi</CTA>
      <CTA onClick={() => { }} gradient={false} className="p-4 rounded-xl bg-[#111]">Payments</CTA>
      <CTA onClick={() => { }} gradient={false} className="p-4 rounded-xl bg-[#111]">Gaming</CTA>
      <CTA onClick={() => { }} gradient={false} className="p-4 rounded-xl bg-[#111]">DAOs</CTA>
    </div>
  )
}

export { GrowthActions }