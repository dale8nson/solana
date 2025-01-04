import { MouseEventHandler } from "react";

const MenuButton = ({ onClick, children, className="" }: {onClick: MouseEventHandler<HTMLButtonElement>, children: string, className?: string}) => (
    <button className={` ${className}`} onClick={onClick}>
      {children}
    </button>
)

export { MenuButton }