'use client'
import { useRouter } from 'next/navigation'
import { FaPlay } from 'react-icons/fa'

import Image from 'next/image'

type Props = {
	image: string
	name: string
	href: string
}
export default function ListItem({ image, name, href }: Props) {
	const router = useRouter()

	const onClick = () => {
		//TODO : add authentication before push
		router.push(href)
	}
	return (
		<button
			onClick={onClick}
			className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4 "
		>
			<div className="relative min-h-[64px] min-w-[64px]">
				<Image
					className="object-cover bg-gradient-to-br from-purple-600 "
					fill
					src={image}
					alt="image"
				/>
			</div>
			<p className="font-medium truncate py-5">{name}</p>
			<div className=" absolute transition opacity-0 rounded-full flex items-center justify-center bg-primary p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110">
				<FaPlay className="text-background" />
			</div>
		</button>
	)
}
