import { forwardRef } from "react"
import { twMerge } from "tailwind-merge"

type Props = {

} & React.ButtonHTMLAttributes<HTMLButtonElement> 

 const Button = forwardRef<HTMLButtonElement, Props>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return (
        <button type={type} className={twMerge(' w-full rounded-full bg-violet-600 border border-transparent px-3 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-background font-bold hover:opacity-75 transition ', className)} disabled = {disabled} ref={ref}  { ...props} >
            {children}
        </button>
    )
})

Button.displayName = "Button"


export default Button