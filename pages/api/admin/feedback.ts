import type { NextApiResponse } from 'next'
import Feedback from '../../../models/Feedback'
import { AuthenticatedRequest, withAdminAuth } from '../../../lib/auth'
import Admin from '../../../models/Admin'

async function handler(req: AuthenticatedRequest, res: NextApiResponse) {
	const adminId = req.userId
	if (adminId === undefined) {
		return res.status(403).json({ message: 'Not authorized' })
	}

	const admin = await Admin.findByPk(adminId)
	if (!admin) {
		return res.status(403).json({ message: 'Not authorized' })
	}

	if (req.method === 'GET') {
		try {
			const feedbacks = await Feedback.findAll()
			res.status(200).json(feedbacks)
		} catch (error) {
			res.status(500).json({ message: 'Error fetching feedbacks' })
		}
	} else if (req.method === 'PUT') {
		try {
			const { id, isApproved } = req.body
			const feedback = await Feedback.findByPk(id)
			if (feedback) {
				feedback.isApproved = isApproved
				await feedback.save()
				res.status(200).json(feedback)
			} else {
				res.status(404).json({ message: 'Feedback not found' })
			}
		} catch (error) {
			res.status(500).json({ message: 'Error updating feedback' })
		}
	} else if (req.method === 'DELETE') {
		try {
			const id = req.query.id
			if (typeof id !== 'string') {
				return res.status(400).json({ message: 'Invalid id parameter' })
			}
			const feedback = await Feedback.findByPk(id)
			if (feedback) {
				await feedback.destroy()
				res.status(200).json({ message: 'Feedback deleted successfully' })
			} else {
				res.status(404).json({ message: 'Feedback not found' })
			}
		} catch (error) {
			res.status(500).json({ message: 'Error deleting feedback' })
		}
	} else {
		res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
		res.status(405).end(`Method ${req.method} Not Allowed`)
	}
}

export default withAdminAuth(handler)
