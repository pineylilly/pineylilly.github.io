import { ReactNode, useState } from "react"

const AnimatedIconButton = ({ children, text, color, ...props } : { children?: ReactNode, text: string, color: string }) => {
    const [hovered, setHovered] = useState(false)
    return (
        <a
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`flex items-center rounded-md px-3 py-2.5 text-sm font-medium transition duration-150 ease-in-out text-white ${color || "bg-black"}`}
            {...props}>
           
                {children}
            
            <div
                className={`overflow-x-hidden transition-all duration-300 ease-out ${(hovered) ? "w-fit" : "w-0"}`}>
                <span className="px-1.5">{text}</span>
            </div>
        </a>
    )
}

export default AnimatedIconButton