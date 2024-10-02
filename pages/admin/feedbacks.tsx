import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Page from '@/components/page'
import Section from '@/components/section'
import FeedbackItem from '@/components/admin/FeedbackItem'

interface Feedback {
	id: number
	userId: number
	content: string
	isApproved: boolean
}

const AdminFeedbackPage: React.FC = () => {
	const [feedbacks, setFeedbacks] = useState<Feedback[]>([])
	const router = useRouter()

	useEffect(() => {
		fetchFeedbacks()
	}, [])

	const fetchFeedbacks = async () => {
		try {
			const token = localStorage.getItem('adminToken')
			if (!token) {
				router.push('/admin/login')
				return
			}

			const response = await fetch('/api/admin/feedback', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})

			if (response.ok) {
				const data = await response.json()
				setFeedbacks(data)
			} else if (response.status === 401) {
				router.push('/admin/login')
			} else {
				console.error('Failed to fetch feedbacks')
			}
		} catch (error) {
			console.error('Error fetching feedbacks:', error)
		}
	}

	const handleApproveFeedback = async (id: number) => {
		try {
			const token = localStorage.getItem('adminToken')
			const response = await fetch('/api/admin/feedback', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({ id, isApproved: true }),
			})

			if (response.ok) {
				fetchFeedbacks() // Refresh the feedback list
			} else if (response.status === 401) {
				router.push('/admin/login')
			} else {
				console.error('Failed to approve feedback')
			}
		} catch (error) {
			console.error('Error approving feedback:', error)
		}
	}

	const handleDeleteFeedback = async (id: number) => {
		try {
			const token = localStorage.getItem('adminToken')
			const response = await fetch(`/api/admin/feedback?id=${id}`, {
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})

			if (response.ok) {
				fetchFeedbacks() // Refresh the feedback list
			} else if (response.status === 401) {
				router.push('/admin/login')
			} else {
				console.error('Failed to delete feedback')
			}
		} catch (error) {
			console.error('Error deleting feedback:', error)
		}
	}

	return (
		<Page>
			<Section>
				<h2 className='text-2xl font-semibold mb-4'>Manage Feedbacks</h2>
				<div className='space-y-4'>
					{feedbacks.map((feedback) => (
						<FeedbackItem
							key={feedback.id}
							feedback={feedback}
							onApprove={handleApproveFeedback}
							onDelete={handleDeleteFeedback}
						/>
					))}
				</div>
			</Section>
		</Page>
	)
}

export default AdminFeedbackPage
