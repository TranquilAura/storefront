import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Page from '@/components/page'
import Section from '@/components/section'

const AdminLogin: React.FC = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const router = useRouter()

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setError('')

		try {
			const response = await fetch('/api/admin/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ username, password }),
			})

			if (response.ok) {
				const { token } = await response.json()
				localStorage.setItem('adminToken', token)
				router.push('/admin/dashboard')
			} else {
				setError('Invalid credentials')
			}
		} catch (error) {
			setError('An error occurred. Please try again.')
		}
	}

	return (
		<Page>
			<Section>
				<h2 className='text-2xl font-semibold mb-4'>Admin Login</h2>
				<form onSubmit={handleSubmit} className='max-w-md mx-auto'>
					<div className='mb-4'>
						<label
							htmlFor='username'
							className='block text-sm font-medium text-gray-700'
						>
							Username
						</label>
						<input
							type='text'
							id='username'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
							required
						/>
					</div>
					<div className='mb-4'>
						<label
							htmlFor='password'
							className='block text-sm font-medium text-gray-700'
						>
							Password
						</label>
						<input
							type='password'
							id='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
							required
						/>
					</div>
					{error && <p className='text-red-500 mb-4'>{error}</p>}
					<button
						type='submit'
						className='w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
					>
						Login
					</button>
				</form>
			</Section>
		</Page>
	)
}

export default AdminLogin
