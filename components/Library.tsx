'use client'

import { TbPlaylist } from 'react-icons/tb'
import { AiOutlinePlus } from 'react-icons/ai'

type Props = {}

export default function Library({}: Props) {
	const onClick = () => {
		console.log('clicked')
        //TODO : add upload functionality
	}

	return (
		<div className="flex flex-col ">
			<div className="flex items-center justify-between px-5 pt-4">
				<div className="inline-flex items-center gap-x-2">
					<TbPlaylist size={26} className='text-text'/>
                    <p className='text-text font-medium text-base' >
                        Your Library
                    </p>
				</div>
                <AiOutlinePlus onClick={onClick} size={20} className='text-text cursor-pointer hover:text-text-lighter transition'/>
			</div>
            <div className="flex flex-col gap-y-2 mt-4 px-3 ">
              //TODO : display list of songs
            </div>
		</div>
	)
}
