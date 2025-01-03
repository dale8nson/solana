"use client"
import { MouseEventHandler, PointerEventHandler, useId } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

const CTA = ({ gradient=true, onClick, className, children }: {gradient?: boolean, onClick: MouseEventHandler<HTMLButtonElement>, className?: string, children: string }) => {
  const id = useId()

  const onPointerEnter: PointerEventHandler<HTMLButtonElement> = (e) => {
    const { clientX: x, clientY: y } = e
    const el = document.getElementById(id)
    const { x: bx, y: by } = el?.getBoundingClientRect() as DOMRect
    gsap.to(el, { backgroundImage: `radial-gradient(circle at ${x}px ${y}px, #8c01fa, #000000)`, duration: 0.5 })

    const pointerMove = (e:PointerEvent) => {
      const { clientX: x, clientY: y } = e
      gsap.to(el, { backgroundImage: `radial-gradient(circle at ${x - bx}px ${y - by}px, #8c01fa, #000000)`, duration: 0.5 })
      addEventListener("pointerout", () => {
        const { clientX: x, clientY: y } = e
        gsap.to(el, { backgroundImage: `radial-gradient(circle at ${x - bx}px ${y - by}px, #8c01fa, #000000)`, duration: 0.5 })
        removeEventListener("pointermove", pointerMove)
      })
    }
    addEventListener("pointermove", pointerMove)
    
  }

  useGSAP(() => {
    const el = document.getElementById(id)
    gsap.set(el, { backgroundImage: gradient ? `radial-gradient(circle at 50% 50%, #8c01fa, #000000)` : 'none' })
  }, [])

  return (
    <button id={id} onPointerEnter={gradient ? onPointerEnter : () => {}} className={`relative flex flex-row items-center justify-center z-20 m-0 py-2 font-[Roboto] text-[15px] max-h-10 ${className}`} onClick={onClick}>{children}</button>
  );
}

export { CTA }