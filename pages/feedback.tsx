import React, { useState, useEffect } from 'react'
import Page from '@/components/page'
import Section from '@/components/section'
import FeedbackItem from '@/components/FeedbackItem'
import FeedbackForm from '@/components/FeedbackForm'

interface Feedback {
	id: number
	userId: number
	content: string
}

const FeedbackPage: React.FC = () => {
	const [feedbacks, setFeedbacks] = useState<Feedback[]>([])

	useEffect(() => {
		fetchFeedbacks()
	}, [])

	const fetchFeedbacks = async () => {
		try {
			const response = await fetch('/api/feedback')
			if (response.ok) {
				const data = await response.json()
				setFeedbacks(data)
			} else {
				console.error('Failed to fetch feedbacks')
			}
		} catch (error) {
			console.error('Error fetching feedbacks:', error)
		}
	}

	const handleSubmitFeedback = async (feedback: {
		userId: number
		content: string
	}) => {
		try {
			const response = await fetch('/api/feedback', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(feedback),
			})

			if (response.ok) {
				fetchFeedbacks() // Refresh the feedback list
			} else {
				console.error('Failed to submit feedback')
			}
		} catch (error) {
			console.error('Error submitting feedback:', error)
		}
	}

	return (
		<Page>
			<Section>
				<h2 className='text-2xl font-semibold mb-4'>Customer Feedback</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					{feedbacks.map((feedback) => (
						<FeedbackItem key={feedback.id} feedback={feedback} />
					))}
				</div>
			</Section>
			<Section>
				<h3 className='text-xl font-semibold mb-4'>Submit Your Feedback</h3>
				<FeedbackForm onSubmit={handleSubmitFeedback} />
			</Section>
		</Page>
	)
}

export default FeedbackPage
