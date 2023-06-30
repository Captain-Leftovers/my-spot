import { twMerge } from 'tailwind-merge'

type Props = {
	children: React.ReactNode
	className?: string
}
export default function Box({ children, className }: Props) {
	return (
		<div
			className={twMerge(
				' bg-background-lighter rounded-lg h-fit w-full',
				className
			)}
		>
			{children}
		</div>
	)
}
