"use client"
import Image from "next/image"
import { gsap } from "gsap/gsap-core"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"

const MiddleImage = () => {

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add("(min-width: 768px)", () => {
      gsap.set("#mid", { scaleY: -2 })
      gsap.to("#mid", { keyframes: [{ y: "65%", scaleX: 1.25, scaleY: 1 }, { scaleY: 2 }, { scaleY: -1, scaleX: 1 }, { scaleY: -3, scaleX: 0.75 }, { scaleY: -1, scaleX: 1 }], scrollTrigger: { trigger: "#grid-1", start: "top 50%", end: "+=1800px", scrub: true } })

    })

  }, [])

  return (
    <Image id="mid" className="absolute z-0 top-0 left-0 translate-y-[100%] scale-y-[2] md:scale-y-[1] md:blur-sm" src="/mid.png" alt="neon ribbons" width={1732} height={1690} />
  )
}

export { MiddleImage }