import { links } from '@/utils/Constants'
import Link from 'next/link'
import { useRouter } from 'next/router'

const BottomNavbar = () => {
	const router = useRouter()

	return (
		<div className='sm:hidden'>
			<nav className='fixed bottom-0 w-full border-t bg-zinc-100 pb-safe'>
				<div className='mx-auto flex h-16 max-w-md items-center justify-around px-6'>
					{links.map(({ href, label, icon }) => (
						<Link
							key={label}
							href={href}
							className={`flex h-full w-full flex-col items-center justify-center space-y-1 ${
								router.pathname === href
									? 'text-indigo-500 '
									: 'text-zinc-600 hover:text-zinc-900'
							}`}
						>
							{icon}
							<span className='text-xs text-zinc-600'>
								{label}
							</span>
						</Link>
					))}
				</div>
			</nav>
		</div>
	)
}

export default BottomNavbar
