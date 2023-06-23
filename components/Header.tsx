'use client'

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

type Props = {
    children: React.ReactNode;
    className?: string;
}
export default function Header({ children, className }: Props) {
    const router = useRouter();

    const handleLogout = () => {
        //TODO : handle logout here
    }
    
  return (
    
    
    <div className={twMerge('h-fit bg-gradient-to-b from-header-gradient-color p-6', className)}>
        <div className="w-full mb-4 flex items-center justify-between ">
            <div className="hidden md:flex gap-x-2 items-center" ></div>
        </div>
    </div>
    
  )
}