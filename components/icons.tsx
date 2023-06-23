import { SVGProps } from 'react'

type Props = {
	className?: string
} & SVGProps<SVGSVGElement>

export const HearthSVG = ({ className, ...rest }: Props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={144}
		height={143}
		viewBox="0 0 144 143"
		fill="none"
		className={`w-full h-auto ${className}`}
		{...rest}
	>
		<path
			fill="#FAF7FB"
			d="m83.23 82.93-6.188-12.218-7.14 21.752L60.083 59.4l-4.497 17.427-11.632.033 29.588 29.425 29.426-29.592-13.775.039-5.963 6.197Z"
		/>
		<path
			fill="#FAF7FB"
			d="M107.036 44.176c-7.85-7.809-20.544-7.773-28.35.08a19.968 19.968 0 0 0-5.293 9.497 19.918 19.918 0 0 0-5.34-9.467c-7.851-7.809-20.545-7.773-28.351.08-7.807 7.849-7.77 20.545.08 28.349l.557.553 12.452-.035 7.047-27.312 10.238 34.464 6.259-19.058 7.819 15.447 3.503-3.64 18.906-.053.553-.557c7.807-7.848 7.771-20.544-.08-28.348Z"
		/>
	</svg>
)
