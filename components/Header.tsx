"use client"
import { use, useState } from "react"
import Image from "next/image"
import { MenuButton } from "./MenuButton"
import { HamburgerButton } from "./HamburgerButton"
import { CloseButton } from "./CloseButton"
import { CTA } from "./CTA"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  useGSAP(() => {
    gsap.set("#mobile-menu", { x: -300 })
  }, [])

  useGSAP(() => {
    if (isOpen) {
      gsap.to("#mobile-menu", { x: 0, duration: 0.5 })
    }
    else {
      gsap.to("#mobile-menu", { x: -300, duration: 0.5 })
    }
  }, [isOpen])

  return (
    <header className="sticky z-40 top-0 left-0 w-full h-[67px] bg-black bg-opacity-60 backdrop-blur-sm flex p-0 gap-10 md:justify-around">
      <HamburgerButton onClick={() => setIsOpen(true)} />
      <div id="mobile-menu" className="fixed z-40 -translate-x-[300px] left-0 flex flex-col gap-4 justify-center items-start bg-[linear-gradient(to_top_right,_#00bcd4_0%,_#0047ff_100%)] opacity-95 rounded-r-lg text-black p-8">
        <CloseButton onClick={() => setIsOpen(false)} />
        <MenuButton className="text-[22px]" onClick={() => { }}>Learn</MenuButton>
        <MenuButton className="text-[22px]" onClick={() => { }}>Documentation</MenuButton>
        <MenuButton className="text-[22px]" onClick={() => { }}>Network</MenuButton>
        <MenuButton className="text-[22px]" onClick={() => { }}>Community</MenuButton>
        <MenuButton className="text-[22px]" onClick={() => { }}>START BUILDING</MenuButton>
      </div>
      <div className="flex justify-center items-center">
        <Image src="/logo.png" alt="logo" width={182} height={27} />
      </div>
      <div className="gap-4 justify-around items-center hidden md:flex">
        <MenuButton className="text-[#848895] after:content-[url('/caret-down-grey.svg')] after:w-[14px] after:h-[8px] after:m-1 text-[17px]" onClick={() => { }}>Learn</MenuButton>
        <MenuButton className="text-[#848895] after:content-[url('/caret-down-grey.svg')] after:w-[14px] after:h-[8px] after:m-1 text-[17px]" onClick={() => { }}>Network</MenuButton>
        <MenuButton className="text-[#848895] after:content-[url('/caret-down-grey.svg')] after:w-[14px] after:h-[8px] after:m-1 text-[17px]" onClick={() => { }}>Community</MenuButton>
      </div>
    </header>
  )
}

export { Header }