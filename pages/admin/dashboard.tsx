import React from 'react'
import { useRouter } from 'next/router'
import Page from '@/components/page'
import Section from '@/components/section'
import Link from 'next/link'

const AdminDashboard: React.FC = () => {
	const router = useRouter()

	const handleLogout = () => {
		localStorage.removeItem('adminToken')
		router.push('/admin/login')
	}

	return (
		<Page>
			<Section>
				<div className='flex justify-between items-center mb-6'>
					<h2 className='text-2xl font-semibold'>Admin Dashboard</h2>
					<button
						onClick={handleLogout}
						className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50'
					>
						Logout
					</button>
				</div>
				<nav>
					<ul className='space-y-2'>
						<li>
							<Link
								href='/admin/feedbacks'
								className='text-blue-500 hover:underline'
							>
								Manage Feedbacks
							</Link>
						</li>
						{/* Add more admin navigation links here */}
					</ul>
				</nav>
			</Section>
		</Page>
	)
}

export default AdminDashboard
