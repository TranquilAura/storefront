import React, { useState } from 'react'

interface FeedbackFormProps {
	onSubmit: (feedback: { userId: number; content: string }) => void
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onSubmit }) => {
	const [userId, setUserId] = useState('')
	const [content, setContent] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		onSubmit({ userId: parseInt(userId), content })
		setUserId('')
		setContent('')
	}

	return (
		<form onSubmit={handleSubmit} className='mt-4'>
			<div className='mb-4'>
				<label
					htmlFor='userId'
					className='block text-sm font-medium text-gray-700'
				>
					User ID
				</label>
				<input
					type='number'
					id='userId'
					value={userId}
					onChange={(e) => setUserId(e.target.value)}
					className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
					required
				/>
			</div>
			<div className='mb-4'>
				<label
					htmlFor='content'
					className='block text-sm font-medium text-gray-700'
				>
					Feedback
				</label>
				<textarea
					id='content'
					value={content}
					onChange={(e) => setContent(e.target.value)}
					className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
					rows={4}
					required
				></textarea>
			</div>
			<button
				type='submit'
				className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
			>
				Submit Feedback
			</button>
		</form>
	)
}

export default FeedbackForm
