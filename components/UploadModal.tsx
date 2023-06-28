'use client'

import useUploadModal from '@/hooks/useUploadModal'
import Modal from './Modal'
import { FieldValues, useForm } from 'react-hook-form'

export default function UploadModal() {
	const uploadModal = useUploadModal()

	const { register, handleSubmit, reset } = useForm<FieldValues>({
		defaultValues: {
			author: '',
			title: '',
			song: null,
			image: null,
		},
	})

	const onChange = (open: boolean) => {
		if (!open) {
			reset()

			uploadModal.onClose()
		}
	}

    const onSubmit = (data: FieldValues) => {

        //TODO : upload to supabase
    }

	return (
		<Modal
			title="Add a song"
			description="upload an mp3 file"
			isOpen={uploadModal.isOpen}
			onChange={onChange}
		>
			form
		</Modal>
	)
}
