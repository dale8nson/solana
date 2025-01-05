"use client"
import Image from "next/image"
import { gsap } from "gsap/gsap-core"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"

const TopImages = () => {

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add("(min-width: 768px)", () => {

      gsap.to("#tl-img", { x: "-250px", y: "-500px", rotateX: -70, scrollTrigger: { trigger: "main", start: "top 100px", end: "980px", scrub: true } })
      gsap.to("#tr-img", { x: "250px", y: "-590px", rotateX: -70, scrollTrigger: { trigger: "main", start: "top 100px", end: "950px", scrub: true } })

    })

    mm.add("(min-width: 0px)", () => {
      gsap.to("#tl-img", { x: "-350px", y: "-600px", rotateX: -70, scrollTrigger: { trigger: "body", start: "top top", end: "+=980px", scrub: true } })
      gsap.to("#tr-img", { x: "350px", y: "-690px", rotateX: -70, scrollTrigger: { trigger: "body", start: "top top", end: "+=980px", scrub: true } })
    })

  }, [])

  return (
    <div className="fixed top-0 left-0 z-0 w-full h-full">
    <Image id="tl-img" className="absolute -top-[20px] md:-top-[37px]  -translate-x-40 md:-translate-x-24 scale-[.9] md:scale-100" src="/tl-img.png" alt="solana logo" width={646} height={961} />
    <Image id="tr-img" className="absolute right-0 translate-x-40 md:right-0 -top-[55px] md:-top-[37px] md:scale-100 scale-[0.9]" src="/tr-img.png" alt="logo" width={696} height={1259} />
    </div>
  )
}

export { TopImages }