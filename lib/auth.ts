import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import Admin from '../models/Admin'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

// Extend the NextApiRequest type
export interface AuthenticatedRequest extends NextApiRequest {
	userId?: number
}

export function generateToken(userId: number): string {
	return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1d' })
}

export function verifyToken(token: string): { userId: number } | null {
	try {
		return jwt.verify(token, JWT_SECRET) as { userId: number }
	} catch (error) {
		return null
	}
}

export function withAdminAuth(
	handler: (req: AuthenticatedRequest, res: NextApiResponse) => Promise<void>,
) {
	return async (req: AuthenticatedRequest, res: NextApiResponse) => {
		const token = req.headers.authorization?.split(' ')[1]
		if (!token) {
			return res.status(401).json({ message: 'Authentication required' })
		}

		const decoded = verifyToken(token)
		if (!decoded) {
			return res.status(401).json({ message: 'Invalid token' })
		}

		const admin = await Admin.findByPk(decoded.userId)
		if (!admin) {
			return res.status(403).json({ message: 'Not authorized' })
		}

		req.userId = decoded.userId

		return handler(req, res)
	}
}
