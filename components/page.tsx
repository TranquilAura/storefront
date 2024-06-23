import Head from 'next/head'
import Navbar from '@/components/navbar/top-navbar/Navbar'
import BottomNavbar from '@/components/navbar/bottom-navbar/BottomNavbar'

interface Props {
	title?: string
	children: React.ReactNode
}

const Page = ({ title, children }: Props) => (
	<>
		{title ? (
			<Head>
				<title>Tranquil Aura | {title}</title>
			</Head>
		) : null}

		<Navbar />

		<main
			/**
			 * Padding top = `appbar` height
			 * Padding bottom = `bottom-nav` height
			 */
			className='mx-auto max-w-screen-xl pt-20 pb-16 px-safe sm:pb-0'
		>
			<div className='p-6'>{children}</div>
		</main>

		<BottomNavbar />
	</>
)

export default Page
