import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<meta charSet='utf-8' />
				<link rel='icon' href='/images/favicon.ico' />
				{/* <!-- Primary Meta Tags --> */}
				<meta
					name='description'
					content='Your Premier Destination for Oud Perfumes in UAE'
				/>

				{/* <!-- Open Graph / Facebook --> */}
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://ota-storefront.vercel.app/' />
				<meta
					property='og:description'
					content='Your Premier Destination for Oud Perfumes in UAE'
				/>
				<meta property='og:image' content='/images/logo.png' />

				{/* <!-- Twitter --> */}
				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='/images/logo.png' />
				<meta
					property='twitter:description'
					content='Your Premier Destination for Oud Perfumes in UAE'
				/>
				<meta property='twitter:image' content='/images/logo.png' />
				{/* <meta
					name='viewport'
					content='width=device-width, initial-scale=1, user-scalable=0, viewport-fit=cover'
				/>
				<meta
					name='theme-color'
					content='#18181b'
					media='(prefers-color-scheme: light)'
				/>
				<meta name='theme-color' content='#f4f4f5' />
				<link rel='apple-touch-icon' href='/images/icon-maskable-512.png' />
				<link rel='manifest' href='/manifest.json' /> */}
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='anonymous'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Prata&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
