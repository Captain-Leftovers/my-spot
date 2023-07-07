'use client'

import Box from '@/components/Box'
import { BounceLoader } from 'react-spinners'

export default function loading() {
	return <Box className='h-full flex items-center justify-center' >
        <BounceLoader color='#1d4ed8' size={40} />
    </Box>
}
