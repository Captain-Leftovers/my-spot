'use client'

import Modal from '@/components/Modal'
import { useEffect, useState } from 'react'

const ModalProvider = () => {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) return null

	return (
		<>
			<Modal
				title="testModal"
				description="Test description"
				isOpen={true}
				onChange={() => {}}
			>
				test children here
			</Modal>
		</>
	)
}

export default ModalProvider

//TODO : add modals here later
