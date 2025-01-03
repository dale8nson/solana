"use client"
import { Header } from "@/components/Header"
import Image from "next/image"
import { CTA } from "@/components/CTA"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { GradientText } from "@/components/GradientText"
import { MenuButton } from "@/components/MenuButton"
import { Card } from "@/components/Card"
import { PointerEventHandler } from "react"
import { on } from "events"

export default function Home() {
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.to("#tl-img", { x: "-250px", y: "-500px", rotateX: -70, scrollTrigger: { trigger: "main", start: "top 100px", end: "980px", scrub: true } })
    gsap.to("#tr-img", { x: "250px", y: "-590px", rotateX: -70, scrollTrigger: { trigger: "main", start: "top 100px", end: "950px", scrub: true } })
    gsap.set("#mid", { scaleY: -2 })
    gsap.to("#mid", { keyframes: [{ y: "65%", scaleX: 1.25, scaleY: 1 }, { scaleY: 2 }, { scaleY: -1, scaleX: 1 }, { scaleY: -3, scaleX: 0.75 }, { scaleY: -1, scaleX: 1 }], scrollTrigger: { trigger: "#grid-1", start: "top 50%", end: "+=1800px", scrub: true } })

    const cards = gsap.utils.toArray(".card")

    ScrollTrigger.observe({
      target: "#scroll-container",
      onDown: () => {
        const sc = document.getElementById("scroll-container") as HTMLElement
        const { x: scx, width: scw } = sc?.getBoundingClientRect()
        const { x } = (cards[cards.length - 1] as HTMLElement)?.getBoundingClientRect()
        if (x > scx + scw - 16) {
          gsap.to(cards, { x: "-=100" })
        }

        // cards.forEach((card, i) => {
        //   const el = card as HTMLElement
        //   const { x, width } = el.getBoundingClientRect()
        //   if (x < scx - width) {
        //     gsap.set(cards, { x: scx + scw - 1 })
        //   } else {
        //     gsap.to(card as gsap.TweenTarget, { x: "-=100" })
        //   }
        // })
      },
      onUp: () => {
        const sc = document.getElementById("scroll-container") as HTMLElement
        const { x: scx, width: scw } = sc?.getBoundingClientRect()
        const { x } = (cards[0] as HTMLElement)?.getBoundingClientRect()
        if (x < 0) {
          gsap.to(cards, { x: "+=100" })
        }

        // cards.forEach((card, i) => {
        //   const el = card as HTMLElement
        //   const { x, width } = el.getBoundingClientRect()
        //   if (x > scx + scw) {
        //     gsap.set(cards, { x: scx - width + 1 })
        //   } else {
        //     gsap.to(card as gsap.TweenTarget, { x: "+=100" })
        //   }
        // })
      },
      preventDefault: true
    })

  }, [])


  return (
    <div className="relative w-full h-full">
      <div className="relative z-20 w-full h-[37px] bg-gradient-to-r from-[#00bcd4]  to-[#0047ff] flex items-center justify-center"><p className="text-black realtive z-20">BREAKPOINT 2023 - NEW CITY. NEW VIBES - GET EARLY ACCESS -&gt;</p></div>
      <Image id="tl-img" className="fixed -top-[37px] -translate-x-20" src="/tl-img.png" alt="logo" width={646} height={961} />
      <Image id="tr-img" className="fixed right-0 -top-[37px]" src="/tr-img.png" alt="logo" width={696} height={1259} />
      <Header />
      <main className="relative z-20 flex flex-col items-center justify-center text-center overflow-hidden mb-0 pb-0">
        <div className="flex flex-col items-center justify-center w-full  text-center leading-[75.6px] gap-16 mt-32">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[70px]">Powerful for developers.</h2>
            <h2 className="text-[70px]">Fast for everyone.</h2>
          </div>
          <p className="text-[21px] w-2/5 text-left leading-normal">Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in between.</p>
        <div className="flex flex-row gap-x-4">
          <CTA onClick={() => { }} className="rounded-3xl px-8 py-1">START BUILDING</CTA>
          <CTA gradient={false} className="border-2 border-solid bg-black text-white rounded-3xl px-8" onClick={() => { }}>READ DOCS</CTA>
        </div>
        </div>
        <div className="flex flex-col justify-center items-center w-3/4 gap-8 mt-32">
          <h3 className="font-[Helvetica] text-[15px] leading-[16.8px] tracking-[0.8px] text-[#618ADC]">POWERING TOOLS AND INTEGRATIONS FROM COMPANIES ALL AROUND THE WORLD</h3>
          <div className="relative z-10 flex justify-evenly items-center w-full">
            <Image src="/brave-logo.svg" alt="brave" width={114} height={37} />
            <Image src="/circle-logo.svg" alt="circle" width={141} height={37} />
            <Image src="/discord-logo.svg" alt="discord" width={124} height={24} />
            <Image src="/google-logo.svg" alt="google" width={96} height={44} />
            <Image src="/jump-logo.svg" alt="jump" width={99} height={31} />
            <Image src="/lollapalooza-logo.svg" alt="lollapalooza" width={106} height={22} />
            <Image src="/me-logo.svg" alt="magic eden" width={157} height={27} />
          </div>
        </div>
        <Image id="mid" className="absolute z-0 top-0 left-0 translate-y-[100%] blur-sm" src="/mid.png" alt="neon ribbons" width={1732} height={1690} />
        <div className="relative flex flex-col items-center justify-start w-3/4 gap-4 overflow-visible">
          <div id="grid-1" className="relative z-10 grid w-11/12 grid-cols-2 grid-rows-3 mt-40 mx-40">
            <div className="flex row-span-3 translate-y-[15%]">
              <h3 className="text-[38px] leading-[46.2px] tracking-[1px] text-left w-[70%]">Join a community of millions.</h3>
            </div>
            <div className="flex flex-col w-[530px] items-start justify-start gap-2">
              <GradientText from="#8c01fa" to="#195b9b" className="scale-[4] translate-x-[140%] translate-y-[40%]">11.5M+</GradientText>
              <p className="font-[Roboto] text-[16px] text-[#c4c4c4] leading-[27.3px] tracking-[0px]">ACTIVE ACCOUNTS</p>
            </div>
            <div className="flex flex-col row-span-1 w-[530px]  items-start justify-center gap-2">
              <GradientText to="#0047ff" from="#00bcd4" className="scale-[4] translate-x-[148%] translate-y-[40%]">21.9M</GradientText>
              <p className="font-[Roboto] text-[16px] text-[#c4c4c4] leading-[27.3px] tracking-[0px]">NFTS MINTED</p>
            </div>
            <div className="flex flex-col row-span-1 items-start justify-center w-[530px] gap-2">
              <GradientText to="#00ffbd" from="#025b8c" className="scale-[4] translate-x-[148%] translate-y-[40%]">$0.00025</GradientText>
              <p className="font-[Roboto] mt-0 text-[16px] text-[#c4c4c4] leading-[27.3px] tracking-[0px]">AVERAGE COST PER TRANSACTION</p>
            </div>
          </div>
          <div className="grid w-11/12 grid-cols-3 gap-x-20 grid-rows-1 mt-40 mx-40 h-full">
            <div className="flex flex-col items-start translate-y-[15%]">
              <h3 className="text-[40px] leading-[46.2px] tracking-[1px] text-left w-full">Made for</h3>
              <h3 className="text-[38px] leading-[46.2px] tracking-[1px] text-left w-full">mass adoption.</h3>
              <p className="font-[Roboto] text-[16px] text-[#c4c4c4] leading-[27.3px] tracking-[0px] before:content-[url('/green-dot.svg')] before:content-center before:flex before:flex-row before:translate-x-[-0.5rem] before:translate-y-[0.7rem] translate-x-[0.4rem]">LIVE DATA</p>
            </div>
            <div className="flex flex-col items-top justify-start gap-12 translate-y-[20%]">
              <div className="flex flex-col items-top justify-start gap-4 ">
                <h4 className="text-[28px] border-l-[#1fccf1] border-solid border-l-2 px-5 leading-[33px] tracking-[0px] text-left">Fast</h4>
                <p className="text-[17px] text-[#c4c4c4] leading-[27.3px] tracking-[0px] text-left w-full">
                  Don't keep your users waiting. Solana has block times of 400 milliseconds — and as hardware gets faster, so will the network.
                </p>
                <p className="text-[28px] leading-[28px] tracking-[0px] before:content-[url('/green-dot.svg')] before:content-center before:flex before:flex-row before:translate-x-[-0.7rem] before:translate-y-[0.5rem] translate-x-[0.5rem] text-left">3,969</p>
                <p className="font-[Roboto] -mt-3 text-[16px] text-[#c4c4c4] leading-[27.3px] tracking-[0px] text-left">TRANSACTIONS PER SECOND</p>
              </div>
              <div className="flex flex-col items-top justify-start gap-4 translate-y-[25%]">
                <h4 className="text-[28px] border-l-[#9945ff] border-solid border-l-2 px-5 leading-[33px] tracking-[0px] text-left">Scalable</h4>
                <p className="text-[17px] text-[#c4c4c4] leading-[27.3px] tracking-[0px] text-left w-full">
                  Get big, quick. Solana is made to handle thousands of transactions per second, and fees for both developers and users remain less than $0.01.
                </p>
                <p className="text-[28px] leading-[28px] tracking-[0px] before:content-[url('/green-dot.svg')] before:content-center before:flex before:flex-row before:translate-x-[-0.7rem] before:translate-y-[0.5rem] translate-x-[0.5rem] text-left">163,077,581,394</p>
                <p className="font-[Roboto] -mt-3 text-[16px] text-[#c4c4c4] leading-[27.3px] tracking-[0px] text-left">TOTAL TRANSACTIONS</p>
              </div>
            </div>
            <div className="flex flex-col items-top justify-start gap-12 relative z-10">
              <div className="flex flex-col items-top justify-start gap-4 ">
                <h4 className="text-[28px] border-l-[#ffd512] border-solid border-l-2 px-5 leading-[33px] tracking-[0px] text-left">Decentralized</h4>
                <p className="text-[17px] text-[#c4c4c4] leading-[27.3px] tracking-[0px] text-left w-full">
                  The Solana network is validated by thousands of nodes that operate independently of each other, ensuring your data remains secure and censorship resistant.
                </p>
                <p className="text-[28px] leading-[28px] tracking-[0px] before:content-[url('/green-dot.svg')] before:content-center before:flex before:flex-row before:translate-x-[-0.7rem] before:translate-y-[0.5rem] translate-x-[0.5rem] text-left">1,675</p>
                <p className="font-[Roboto] -mt-3 text-[16px] text-[#c4c4c4] leading-[27.3px] tracking-[0px] text-left">VALIDATOR NODES</p>
              </div>
              <div className="flex flex-col items-top justify-start gap-4 translate-y-[25%]">
                <h4 className="text-[28px] border-l-[#19fb9b] border-solid border-l-2 px-5 leading-[33px] tracking-[0px] text-left">Energy Efficient</h4>
                <p className="text-[17px] text-[#c4c4c4] leading-[27.3px] tracking-[0px] text-left w-full">
                  Solana's proof of stake network and other innovations minimize its impact on the <a href="#" className="text-[#19fb9b] underline">environment</a>. Each Solana transaction uses about the same energy as a few Google searches.
                </p>
                <p className="text-[28px] leading-[28px] tracking-[0px] before:content-[url('/green-dot.svg')] before:content-center before:flex before:flex-row before:translate-x-[-0.7rem] before:translate-y-[0.5rem] translate-x-[0.5rem] text-left">0%</p>
                <p className="font-[Roboto] -mt-3 text-[16px] text-[#c4c4c4] leading-[27.3px] tracking-[0px] text-left">NET CARBON IMPACT</p>
              </div>
            </div>
          </div>
          <div className="grid w-11/12 grid-cols-2 gap-x-0 gap-y-8 grid-rows-1 mt-40 pb-8 mx-40 h-full">
            <div className="flex col-span-2 justify-between">
              <h3 className="text-[39px] leading-[46.2px] tracking-[1px] text-left w-[70%]">Build for growth.</h3>
              <div className="flex flex-row gap-8">
                <CTA onClick={() => { }} gradient={false} className="border-[#a962ff] border-solid border-2 p-4 rounded-xl bg-[#111]">NFTs</CTA>
                <CTA onClick={() => { }} gradient={false} className="p-4 rounded-xl bg-[#111]">DeFi</CTA>
                <CTA onClick={() => { }} gradient={false} className="p-4 rounded-xl bg-[#111]">Payments</CTA>
                <CTA onClick={() => { }} gradient={false} className="p-4 rounded-xl bg-[#111]">Gaming</CTA>
                <CTA onClick={() => { }} gradient={false} className="p-4 rounded-xl bg-[#111]">DAOs</CTA>
              </div>
            </div>
            <Image src="/anybodies-img.png" alt="build for growth" width={550} height={400} />
            <div className="flex flex-col items-start justify-center gap-4 bg-[#111] px-14">
              <Image src="/anybodies-logo.svg" alt="build for growth" width={240} height={53} />
              <p className="text-left text-[21px] leading-[27.3px] tracking-[0px]">It's time to bridge the digital and physical. Anybodies helps established brands like Toys'R'Us connect real-life places and products with NFTs.</p>
              <a className="text-[20px] text-[#a962ff]" href="#">Learn more about NFTs on Solana</a>
            </div>
            <div className="flex flex-row items-center justify-around col-span-2">
              <Image src="/claynosaurz-logo.svg" alt="claynosaurz" width={100} height={30} />
              <Image src="/monkey-logo.svg" alt="monkey" width={39} height={46} />
              <Image src="/scratch-logo.svg" alt="scratch" width={46} height={46} />
              <Image src="/okay-logo.svg" alt="okay berrs" width={100} height={30} />
            </div>
          </div>
          <div className="relative flex flex-col items-top justify-start gap-8 mb-32 w-11/12">
            <h3 className="text-[38px] leading-[46.2px] tracking-[1px] text-left">Join a thriving community.</h3>
            <div id="scroll-container" className="scroll-container relative z-20 top-0 left-0 flex flex-row gap-4 mb-8 flex-nowrap">
              <Card className="card min-w-[348px] min-h-[448px]">
                <Card.Text className="w-[300px] h-[200px]">
                  <GradientText from="#f087ff" to="#f087ff" className="scale-[3] translate-x-[90%]">11,000</GradientText>
                  <p className="text-left">SOLANA HACKER HOUSE PARTICIPANTS</p>
                </Card.Text>
                <Card.Image src="/com-1.png" alt="solana hacker house participants" width={300} height={200} className="w-[300px] h-[200px]" />
              </Card>
              <Card className="card min-w-[632px] min-h-[448px]">
                <Card.Image src="/com-2.png" alt="solana hacker house participants" width={601} height={420} className="min-w-[632px] min-h-[448px]" />
              </Card>
              <Card className="card min-w-[348px] min-h-[448px]">
                <Card.Image src="/com-3.png" alt="solana hacker house presentation" width={301} height={200} className="w-[300px] h-[200px]" />
                <Card.Text className="w-[300px] h-[200px]">
                  <GradientText from="#19fb9b" to="#19fb9b" className="scale-[3] translate-x-[90%]">48,000</GradientText>
                  <p className="text-center">DEVELOPERS BUILDING DURING SOLANA HACKATHON</p>
                </Card.Text>
              </Card>
              <Card className="card min-w-[348px] min-h-[448px]">
                <Card.Image src="/com-4.png" alt="solana hacker house keynote" width={301} height={420} className="w-[348px] h-[448px]" />
              </Card>
              <Card className="card min-w-[348px] min-h-[448px]">
                <Card.Text className="w-[300px] h-[200px]">
                  <GradientText from="#ffeb3b" to="#ffeb3b" className="scale-[3] translate-x-[90%]">3,800</GradientText>
                  <p className="text-center">SOLANA BREAKPOINT 2022 ATTENDEES</p>
                </Card.Text>
                <Card.Image src="/com-5.png" alt="solana hacker house keynote" width={200} height={200} className="w-[300px] h-[200px]" />
              </Card>
            </div>
            <div className="flex flex-col items-center justify-center gap-16 w-3/4 mx-auto">
              <h2 className="text-[38px] text-center leading-[46.2px] tracking-[1px]">It's time to join the thousands of creators, artists, and developers using Solana.</h2>
              <CTA onClick={() => { }} className="rounded-3xl px-8">START BUILDING</CTA>
            </div>
            <Image id="bottom" className="absolute -z-10 top-0 center-0 w-[1200px] h-[1200px]" src="/bottom.png" alt="neon ribbons" width={1200} height={1200} />
          </div>
        </div>
      </main>
      <footer className="bg-black grid grid-cols-2 w-[72%] mx-auto">
        <div className="flex flex-col items-start justify-start gap-8 p-8">
          <Image src="/solana-footer-logo.svg" width={31} height={27} alt="solana" />
          <p className="font-[Roboto] text-base leading-[27.3px] tracking-[0px]">Managed by Solana Foundation</p>
          <div className="flex flex-row gap-2">
            <a href="#"><Image src="/youtube-logo.svg" width={26} height={16} alt="youtube" /></a>
            <a href="#"><Image src="/twitter-logo.svg" width={26} height={16} alt="twitter" /></a>
            <a href="#"><Image src="/discord-logo-grey.svg" width={26} height={16} alt="discord" /></a>
            <a href="#"><Image src="/robot-bear-logo.svg" width={26} height={16} alt="robot bear" /></a>
            <a href="#"><Image src="/github-logo-grey.svg" width={26} height={16} alt="github" /></a>
            <a href="#"><Image src="/telegram-logo.svg" width={26} height={16} alt="telegram" /></a>
          </div>
          <p className="text-[#848895] text-base leading-[27.3px] tracking-[0px]">© {new Date().getFullYear()} Solana Foundation. All rights reserved.</p>
        </div>
        <div className="grid grid-cols-3 gap-4 p-8">
          <div className="flex flex-col items-start justify-start gap-4">
            <h4 className="text-base leading-[18.7px] tracking-[0px]">SOLANA</h4>
            <a href="#" className="text-[#848895] text-[15px] leading-[27.3px] tracking-[0px]">Grants</a>
            <a href="#" className="text-[#848895] text-[15px] leading-[27.3px] tracking-[0px]">Break Solana</a>
            <a href="#" className="text-[#848895] text-[15px] leading-[27.3px] tracking-[0px]">Media Kit</a>
            <a href="#" className="text-[#848895] text-[15px] leading-[27.3px] tracking-[0px]">Careers</a>
            <a href="#" className="text-[#848895] text-[15px] leading-[27.3px] tracking-[0px]">Disclaimer</a>
          </div>
          <div className="flex flex-col items-start justify-start gap-4">
            <h4 className="text-base leading-[18.7px] tracking-[0px]">GET CONNECTED
            </h4>
            <a href="#" className="text-[#848895] text-[15px] leading-[27.3px] tracking-[0px]">Ecosystem</a>
            <a href="#" className="text-[#848895] text-[15px] leading-[27.3px] tracking-[0px]">Blog</a>
            <a href="#" className="text-[#848895] text-[15px] leading-[27.3px] tracking-[0px]">Newsletter</a>
          </div>
          <div className="flex flex-row items-start justify-start gap-2">
            <a href="#" className="text-[#848895] text-[15px] leading-[24px] tracking-[0px]"><div className="flex flex-row items-center justify-start gap-2"><Image src="/world-icon.svg" width={19} height={20} alt="language" />EN</div></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
