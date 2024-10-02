import React from 'react'

interface FeedbackItemProps {
	feedback: {
		id: number
		userId: number
		content: string
		isApproved: boolean
	}
	onApprove: (id: number) => void
	onDelete: (id: number) => void
}

const FeedbackItem: React.FC<FeedbackItemProps> = ({
	feedback,
	onApprove,
	onDelete,
}) => {
	return (
		<div className='bg-white shadow rounded-lg p-4 mb-4'>
			<p className='text-gray-600'>User ID: {feedback.userId}</p>
			<p className='mt-2'>{feedback.content}</p>
			<div className='mt-4 flex justify-between items-center'>
				<span
					className={`px-2 py-1 rounded ${feedback.isApproved ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}
				>
					{feedback.isApproved ? 'Approved' : 'Not Approved'}
				</span>
				<div>
					{!feedback.isApproved && (
						<button
							onClick={() => onApprove(feedback.id)}
							className='mr-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600'
						>
							Approve
						</button>
					)}
					<button
						onClick={() => onDelete(feedback.id)}
						className='px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600'
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	)
}

export default FeedbackItem
