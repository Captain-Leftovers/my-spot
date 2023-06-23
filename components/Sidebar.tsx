'use client'

import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'

type Props = {
	children: React.ReactNode
}
export default function Sidebar({ children }: Props) {
	const pathname = usePathname()

	const routes = useMemo(() => {
		return [
			{
				icon: HiHome,
				label: 'Home',
				active: pathname !== '/search',
				href: '/',
			},
			{
				icon: BiSearch,
				label: 'Search',
				active: pathname === '/search',
				href: '/search',
			},
		]
	}, [pathname])

	return <div className="">SIDEBAR!!</div>
}
