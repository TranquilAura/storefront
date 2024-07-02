import SearchBar from '@/components/search-bar/SearchBar'
import { links, pageRoutes } from '@/utils/Constants'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import logo from '@/assets/images/logo.png'

const Navbar = () => {
	const router = useRouter()

	return (
		<div className='fixed top-0 left-0 z-20 w-full bg-zinc-900 pt-safe'>
			<header className='border-b bg-zinc-100 px-safe'>
				<div className='mx-auto flex h-20 max-w-screen-xl items-center justify-between px-6'>
					<Link href='/'>
						<Image className='h-10 w-auto' alt='Tranquil Aura Logo' src={logo} />
					</Link>

					<nav className='flex items-center space-x-6'>
						<div className='hidden sm:block'>
							<div className='flex items-center space-x-6'>
								{links.map(({ label, href }) => (
									<Link
										key={label}
										href={href}
										className={`text-sm ${
											router.pathname === href
												? 'text-indigo-500'
												: 'text-zinc-600 hover:text-zinc-900'
										}`}
									>
										{label}
									</Link>
								))}
							</div>
						</div>
					</nav>
					<div className='flex items-center space-x-3'>
						<SearchBar />
						<Link
							href={pageRoutes.cart}
							className={
								router.pathname === pageRoutes.cart
									? 'text-indigo-500'
									: 'text-zinc-600 hover:text-zinc-900'
							}
						>
							<svg
								viewBox='0 0 15 15'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								width='15'
								height='15'
							>
								<path
									d='M.5.5l.6 2m0 0l2.4 8h11v-6a2 2 0 00-2-2H1.1zm11.4 12a1 1 0 110-2 1 1 0 010 2zm-8-1a1 1 0 112 0 1 1 0 01-2 0z'
									stroke='currentColor'
								></path>
							</svg>
						</Link>

						<div
							title='Gluten Free'
							className='h-10 w-10 rounded-full bg-zinc-200 bg-cover bg-center shadow-inner'
							style={{
								backgroundImage:
									'url(https://images.unsplash.com/photo-1612480797665-c96d261eae09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80)',
							}}
						/>
					</div>
				</div>
			</header>
		</div>
	)
}

export default Navbar
