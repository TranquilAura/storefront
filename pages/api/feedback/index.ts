import type { NextApiRequest, NextApiResponse } from 'next'
import Feedback from '../../../models/Feedback'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method === 'GET') {
		try {
			const feedbacks = await Feedback.findAll({ where: { isApproved: true } })
			res.status(200).json(feedbacks)
		} catch (error) {
			res.status(500).json({ message: 'Error fetching feedbacks' })
		}
	} else if (req.method === 'POST') {
		try {
			const { userId, content } = req.body
			const feedback = await Feedback.create({ userId, content })
			res.status(201).json(feedback)
		} catch (error) {
			res.status(500).json({ message: 'Error creating feedback' })
		}
	} else {
		res.setHeader('Allow', ['GET', 'POST'])
		res.status(405).end(`Method ${req.method} Not Allowed`)
	}
}
