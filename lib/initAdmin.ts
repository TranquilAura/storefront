import Admin from '../models/Admin'

export async function initializeAdmin() {
	try {
		const adminCount = await Admin.count()
		if (adminCount === 0) {
			const defaultUsername = process.env.DEFAULT_ADMIN_USERNAME || 'admin'
			const defaultPassword = process.env.DEFAULT_ADMIN_PASSWORD || 'admin123'

			await Admin.create({
				username: defaultUsername,
				password: defaultPassword,
			})

			console.log('Default admin user created')
		}
	} catch (error) {
		console.error('Error initializing admin user:', error)
	}
}
