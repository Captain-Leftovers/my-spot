'use client'

import { useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import Button from './Button'

type Props = {
	children: React.ReactNode
	className?: string
}
export default function Header({ children, className }: Props) {
	const router = useRouter()

	const handleLogout = () => {
		//TODO : handle logout here
	}

	return (
		<div
			className={twMerge(
				'h-fit bg-gradient-to-b from-header-gradient-color p-6',
				className
			)}
		>
			<div className="w-full mb-4 flex items-center justify-between ">
				<div className="hidden md:flex gap-x-2 items-center">
					<button
						onClick={() => router.back()}
						className="rounded-full bg-background flex items-center justify-center hover:opacity-75 transition"
					>
						<RxCaretLeft
							className="text-text-lighter"
							size={35}
						/>
					</button>
					<button
						onClick={() => router.forward()}
						className="rounded-full bg-background flex items-center justify-center hover:opacity-75 transition"
					>
						<RxCaretRight
							className="text-text-lighter"
							size={35}
						/>
					</button>
				</div>
				<div className="flex md:hidden gap-x-2 items-center ">
					<button className="rounded-full p-2 bg-text-lighter items-center justify-center hover:opacity-75 transition">
						<HiHome
							className="text-background"
							size={20}
						/>
					</button>
					<button className="rounded-full p-2 bg-text-lighter items-center justify-center hover:opacity-75 transition">
						<BiSearch
							className="text-background"
							size={20}
						/>
					</button>
				</div>
				<div className="flex justify-between items-center gap-x-4 ">
					<>
						<div>
							<Button /> 
						</div>
					</>
				</div>
			</div>
		</div>
	)
}
