"use client"
import Image from "next/image"
import { MenuButton } from "./MenuButton"

const Header = () => {
  return (

    <header className="sticky z-30 top-0 left-0 w-full h-[67px] bg-black bg-opacity-60 backdrop-blur-sm flex justify-around">
      <div className="flex justify-center items-center">
        <Image src="/logo.png" alt="logo" width={182} height={27} />
      </div>
      <div className="flex gap-4 justify-around items-center">
        <MenuButton onClick={() => { }}>Learn</MenuButton>
        <MenuButton onClick={() => { }}>Network</MenuButton>
        <MenuButton onClick={() => { }}>Community</MenuButton>
      </div>
    </header>
  )
}

export { Header }