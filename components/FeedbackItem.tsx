import React from 'react'

interface FeedbackItemProps {
	feedback: {
		id: number
		userId: number
		content: string
	}
}

const FeedbackItem: React.FC<FeedbackItemProps> = ({ feedback }) => {
	return (
		<div className='bg-white shadow rounded-lg p-4'>
			<p className='text-gray-600'>User ID: {feedback.userId}</p>
			<p className='mt-2'>{feedback.content}</p>
		</div>
	)
}

export default FeedbackItem
