'use client'

import { TbPlaylist } from 'react-icons/tb'
import { AiOutlinePlus } from 'react-icons/ai'
import useAuthModal from '@/hooks/useAuthModal'
import { useUser } from '@/hooks/useUser'
import useUploadModal from '@/hooks/useUploadModal'
import { Song } from '@/types'
import MediaItem from './MediaItem'

type LibraryProps = {
	songs: Song[]
}

export default function Library({songs}: LibraryProps) {
	const uploadModal = useUploadModal()
	const authModal = useAuthModal()
	const { user } = useUser()

	const onClick = () => {
		if (!user) {
			return authModal.onOpen()
		}
		return uploadModal.onOpen()

		//TODO : check for subscription
	}

	return (
		<div className="flex flex-col ">
			<div className="flex items-center justify-between px-5 pt-4">
				<div className="inline-flex items-center gap-x-2">
					<TbPlaylist
						size={26}
						className="text-text"
					/>
					<p className="text-text font-medium text-base">
						Your Library
					</p>
				</div>
				<AiOutlinePlus
					onClick={onClick}
					size={20}
					className="text-text cursor-pointer hover:text-text-lighter transition"
				/>
			</div>
			<div className="flex flex-col gap-y-2 mt-4 px-3 ">
				{songs.map((item) => {
					return ( 
						<MediaItem onClick={()=>{}} key={item.id} data={item} />
					)
				})}
			</div>
		</div>

	)
}
