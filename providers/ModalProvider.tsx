'use client'

import Modal from '@/components/Modal'
import { useEffect, useState } from 'react'

type ModalProviderProps = {
	children: React.ReactNode
}

const ModalProvider = ({ children }: ModalProviderProps) => {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) return null

	return (
		<>
			<Modal></Modal>
		</>
	)
}

export default ModalProvider

//TODO : add modals here later
