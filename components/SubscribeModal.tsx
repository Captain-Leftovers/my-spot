'use client'

import { Price, ProductWithPrice } from '@/types'
import Modal from './Modal'
import Button from './Button'
import { useState } from 'react'
import { useUser } from '@/hooks/useUser'
import { toast } from 'react-hot-toast'
import { postData } from '@/libs/helpers'
import { getStripe } from '@/libs/stripeClient'

type SubscribeModalProps = {
	products: ProductWithPrice[]
}

const formatPrice = (price: Price) => {
	const priceString = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: price.currency,
		minimumFractionDigits: 0,
	}).format((price?.unit_amount || 0) / 100)

	return priceString
}

export default function SubscribeModal({ products }: SubscribeModalProps) {
	const { user, isLoading, subscription } = useUser()
	const [priceIdLoading, setPriceIdLoading] = useState<string>()

	const handleCheckout = async (price: Price) => {
		setPriceIdLoading(price.id)
		if (!user) {
			setPriceIdLoading(undefined)
			return toast.error('You must be logged in to subscribe')
		}

		if (subscription) {
			setPriceIdLoading(undefined)
			return toast('You are already subscribed')
		}

		try {
			const { sessionId } = await postData(
				//TODO check if correct
				'/api/create-checkout-session',
				{ price }
			)

			const stripe = await getStripe()
			stripe?.redirectToCheckout({ sessionId })
		} catch (error) {
			toast.error((error as Error)?.message)
		} finally {
			setPriceIdLoading(undefined)
		}
	}

	let content = <div className="text-center">No products available.</div>

	if (products.length) {
		content = (
			<div>
				{products.map((product) => {
					if (!product.prices?.length) {
						return <div key={product.id}>No prices available</div>
					}

					return product.prices.map((price) => (
						<Button
							key={price.id}
							onClick={() => handleCheckout(price)}
							disabled={isLoading || price.id === priceIdLoading}
							className="mb-4"
						>
							{`Subscribe for ${formatPrice(price)} a ${
								price.interval
							}`}
						</Button>
					))
				})}
			</div>
		)
	}

	if (subscription) {
		content = <div className="text-center">Already subscribed.</div>
	}

	return (
		<Modal
			title="Premium users only"
			description="Listen to music with no ads"
			isOpen
			onChange={() => {}}
		>
			{content}
		</Modal>
	)
}