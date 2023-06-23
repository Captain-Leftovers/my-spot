import Link from 'next/link'
import { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'

type Props = {
	icon: IconType
	label: string
	active?: boolean
	href: string
}
export default function SidebarItem({
	icon: Icon,
	label,
	active,
	href,
}: Props) {
	return (
		<Link
			href={href}
			className={twMerge(
				' flex flex-row items-center w-full gap-x-4 h-auto text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1',
				active && 'text-white'
			)}
		>
			<Icon size={26} />
            <p className='truncate w-full' >{label}</p>
		</Link>
	)
}