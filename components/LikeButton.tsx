'use client'

import useAuthModal from '@/hooks/useAuthModal'
import { useUser } from '@/hooks/useUser'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

type LikeButtonProps = {
	songId: string
}
export default function LikeButton({ songId }: LikeButtonProps) {
	const router = useRouter()
	const supabaseClient = useSupabaseClient()

	const authModal = useAuthModal()
	const { user } = useUser()

	const [isLiked, setIsLiked] = useState(false)

	useEffect(() => {
		if (!user?.id) return

		const fetchData = async () => {
			const { data, error } = await supabaseClient
				.from('liked_songs')
				.select('*')
				.eq('user_id', user.id)
				.eq('song_id', songId)
				.single()

			if (!error && data) {
				setIsLiked(true)
			}
		}

		fetchData()
	}, [user?.id, songId, supabaseClient])

	const Icon = isLiked ? AiFillHeart : AiOutlineHeart

	const handleLike = async () => {
		if (!user) {
			return authModal.onOpen()
		}

		if (isLiked) {
			const { error } = await supabaseClient
				.from('liked_songs')
				.delete()
				.eq('user_id', user.id)
				.eq('song_id', songId)

			if (error) {
				
				toast.error(error.message)
			} else {
				setIsLiked(false)
			}
		} else {	
			
			const { error } = await supabaseClient
				.from('liked_songs')
				.insert({ song_id: songId, user_id: user.id })
				
                if (error) {
                    toast.error(error.message)
                } else {
                    setIsLiked(true)

                    toast.success('Song liked!')
                }
		} 

        router.refresh()
	}

	return (
		<button className="hover:opacity-75 transition" onClick={handleLike}>
			<Icon color={isLiked ? '#e11d48' : 'white'} size={25} />
		</button>
	)
}
