import Image  from 'next/image'

const Card = ({children, className=""}:{children:React.ReactNode, className?: string}) => {

  return (
    <div className={`flex flex-col gap-8 items-center justify-center ${className}`}>
      {children}
    </div>
  )
}

Card.Image = ({src, alt, width, height, className=""}:{src:string, alt:string, width: number, height: number, className?:string}) => {
  return (
    <Image src={src} alt={alt} width={width} height={height} className={`rounded-lg ${className}`} />
  )
}

Card.Text = ({children, className=""}:{children:React.ReactNode, className?: string}) => {
  return (
    <div className={`flex flex-col items-center justify-center text-[#bababa] bg-[#111] text-[12px] p-4 rounded-lg ${className}`}>{children}</div>
  )
}

export { Card }