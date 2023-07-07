'use client'

import Box from '@/components/Box'
import { BounceLoader } from 'react-spinners'

export default function loading() {
	return <Box className='h-full flex items-center justify-center' >
        <BounceLoader color='#047857' size={40} />
    </Box>
}
