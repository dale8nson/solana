"use client"
import { Card } from "./Card"
import { GradientText } from "./GradientText"
import { gsap } from "gsap/gsap-core"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"

const Carousel = () => {

  useGSAP(() => {
    const cards = gsap.utils.toArray(".card")
    const mm = gsap.matchMedia()

    mm.add("(min-width: 768px)", () => {
      let sc: HTMLElement
      if (sc = document.getElementById("scroll-container") as HTMLElement) {
        const st = ScrollTrigger.observe({
          target: "window",
          onDown: () => {
            const sc = document.getElementById("scroll-container") as HTMLElement
            const { x: scx, width: scw } = sc?.getBoundingClientRect()
            const { x } = (cards[cards.length - 1] as HTMLElement)?.getBoundingClientRect()
            if (x > scx + scw - 16) {
              gsap.to(cards, { x: "-=100" })
            }
          },
          onUp: () => {
            const sc = document.getElementById("scroll-container") as HTMLElement
            const { x: scx, width: scw } = sc?.getBoundingClientRect()
            const { x } = (cards[0] as HTMLElement)?.getBoundingClientRect()
            if (x < 0) {
              gsap.to(cards, { x: "+=100" })
            }

          },
          preventDefault: true
        })
        st.disable()

        sc.onmouseover = () => st.enable()
        sc.onpointerleave = () => st.disable()
        sc.ontouchmove = (e) => {
          st.enable()
        }
      }
    })

    mm.add("(min-width: 0px)", () => {
      const st = ScrollTrigger.observe({
        target: "#scroll-container",
        type: "touch",
        onLeft: () => {
          const sc = document.getElementById("scroll-container") as HTMLElement
          const { x: scx, width: scw } = sc?.getBoundingClientRect()
          const { x } = (cards[cards.length - 1] as HTMLElement)?.getBoundingClientRect()
          if (x > scx + scw - 16) {
            gsap.to(cards, { x: "-=100" })
          }
        },
        onRight: () => {
          const sc = document.getElementById("scroll-container") as HTMLElement
          const { x: scx, width: scw } = sc?.getBoundingClientRect()
          const { x } = (cards[0] as HTMLElement)?.getBoundingClientRect()
          if (x < 0) {
            gsap.to(cards, { x: "+=100" })
          }

        },
        preventDefault: true
      })
    })

  }, [])

  return (
    <div id="scroll-container" className="relative z-30 top-0 left-0 flex flex-row gap-4 mb-8 flex-nowrap">
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
  )
}

export { Carousel }