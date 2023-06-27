'use client'

import { useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import Button from './Button'
import useAuthModal from '@/hooks/useAuthModal'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useUser } from '@/hooks/useUser'
import { FaUserAlt } from 'react-icons/fa'
import { toast } from 'react-hot-toast'

type Props = {
	children: React.ReactNode
	className?: string
}
export default function Header({ children, className }: Props) {
	const router = useRouter()
	const authModal = useAuthModal()
	const supabaseClient = useSupabaseClient()
	const { user } = useUser()

	const handleLogout = async () => {
		const { error } = await supabaseClient.auth.signOut()

		//TODO : reset playing songs when implemented
		router.refresh()

		if (error) {
			toast.error(error.message)
		} else {
			toast.success('Logged out successfully')
		}
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
					{user ? (
						<div className="flex gap-x-4 items-ceter">
							<Button
								onClick={
									handleLogout
								}
								className="bg-text-lighter px-6 py-2"
							>
								Logout
							</Button>
							<Button
								onClick={() =>
									router.push(
										'/account'
									)
								}
								className="bg-text-lighter"
							>
								<FaUserAlt />
							</Button>
						</div>
					) : (
						<>
							<div>
								<Button
									onClick={
										authModal.onOpen
									}
									className="bg-transparent text-text-btn font-medium"
								>
									Sign up
								</Button>
							</div>
							<div>
								<Button
									onClick={
										authModal.onOpen
									}
									className="bg-text-lighter  px-6 py-2"
								>
									Log in
								</Button>
							</div>
						</>
					)}
				</div>
			</div>
			{children}
		</div>
	)
}

//TODO : add onbClick to buttons sometime later
