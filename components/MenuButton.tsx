import { MouseEventHandler } from "react";

const MenuButton = ({ onClick, children }: {onClick: MouseEventHandler<HTMLButtonElement>, children: string}) => (
    <button className="text-[#848895] after:content-[url('/caret-down.svg')] after:w-[14px] after:h-[8px] after:m-1 font-[17px]" onClick={onClick}>
      {children}
    </button>
)

export { MenuButton }