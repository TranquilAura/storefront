import BannerComponent from '@/components/hero-banner/BannerComponent'
import Page from '@/components/page'
import Section from '@/components/section'
import Subheading from '@/components/subHeading'
import { homeContent } from '@/utils/Constants'
import Head from 'next/head'

const Index = () => (
	<>
		<Head>
			<title>OudTranquilAura | Home Page</title>
			<meta name='title' content='OudTranquilAura | Home Page' />
			<meta property='og:title' content='OudTranquilAura | Home Page' />
			<meta property='twitter:title' content='OudTranquilAura | Home Page' />
		</Head>
		<BannerComponent />
		<Page>
			<div className='text-center'>
				<p>
					Indulge in the timeless allure of attar, where each drop tells a story
					of heritage, tradition, and luxury. we invite you to embark on a
					sensory journey through our exquisite collection of attars
					meticulously crafted to captivate your senses.
				</p>
				{homeContent.map((obj, index) => (
					<Section key={index}>
						<div className='flex flex-col gap-2'>
							<Subheading>{obj.title}</Subheading>
							<p>{obj.content}</p>
						</div>
					</Section>
				))}
			</div>
		</Page>
	</>
)

export default Index
