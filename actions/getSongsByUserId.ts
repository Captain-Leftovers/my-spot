import type { Song } from '@/types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { toast } from 'react-hot-toast'

const getSongsByUseId = async (): Promise<Song[]> => {
	const supabase = createServerComponentClient({
		cookies: cookies,
	})

    const { data:sessionData, error:sessionError } = await supabase.auth.getSession()
    
    if (sessionError) {
        toast.error(sessionError.message)
        return []
    }

    const { data, error } = await supabase.from('songs').select('*').eq('user_id', sessionData.session?.user.id).order('created_at', { ascending: false })

    if (error) {
        toast.error(error.message)
    }

    return data as Song[] || []


}

export default getSongsByUseId
