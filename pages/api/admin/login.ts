import type { NextApiRequest, NextApiResponse } from 'next'
import { generateToken } from '../../../lib/auth'

// This is a mock user for demonstration purposes
// In a real application, you would fetch the user from your database
const ADMIN_USER = {
	id: 1,
	username: 'admin',
	password: 'password123', // In a real app, this would be hashed
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method === 'POST') {
		const { username, password } = req.body

		if (username === ADMIN_USER.username && password === ADMIN_USER.password) {
			const token = generateToken(ADMIN_USER.id)
			res.status(200).json({ token })
		} else {
			res.status(401).json({ message: 'Invalid credentials' })
		}
	} else {
		res.setHeader('Allow', ['POST'])
		res.status(405).end(`Method ${req.method} Not Allowed`)
	}
}
