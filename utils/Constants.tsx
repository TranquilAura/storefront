import { StaticImageData } from 'next/image'
import logo from '@/assets/images/logo.png'
import { ReactElement } from 'react'

export type NavLinkType = {
	label: string
	href: string
	target?: '_blank' | '_self' | '_parent' | '_top'
	icon: ReactElement<any, any>
}

export type ClientInfo = {
	firm: string
	contactNo: string
	email: string
	address: string
	geoCoordinates: string
	embedMap: string
	logo: StaticImageData
	socialMediaLinks: {
		facebook: string
		instagram: string
		linkedIn: string
		x: string
		whatsapp: string
	}
}

export const pageRoutes = {
	home: '/',
	shop: '/shop',
	aboutUs: '/about-us',
	blog: '/blogs',
	search: '/search',
	profile: '/user',
	cart: '/user/cart',
}

export const links: NavLinkType[] = [
	{
		label: 'Home',
		href: pageRoutes.home,
		icon: (
			<svg
				viewBox='0 0 15 15'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				width='18'
				height='18'
			>
				<path
					d='M7.5.5l.325-.38a.5.5 0 00-.65 0L7.5.5zm-7 6l-.325-.38L0 6.27v.23h.5zm5 8v.5a.5.5 0 00.5-.5h-.5zm4 0H9a.5.5 0 00.5.5v-.5zm5-8h.5v-.23l-.175-.15-.325.38zM1.5 15h4v-1h-4v1zm13.325-8.88l-7-6-.65.76 7 6 .65-.76zm-7.65-6l-7 6 .65.76 7-6-.65-.76zM6 14.5v-3H5v3h1zm3-3v3h1v-3H9zm.5 3.5h4v-1h-4v1zm5.5-1.5v-7h-1v7h1zm-15-7v7h1v-7H0zM7.5 10A1.5 1.5 0 019 11.5h1A2.5 2.5 0 007.5 9v1zm0-1A2.5 2.5 0 005 11.5h1A1.5 1.5 0 017.5 10V9zm6 6a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zm-12-1a.5.5 0 01-.5-.5H0A1.5 1.5 0 001.5 15v-1z'
					fill='currentColor'
				/>
			</svg>
		),
	},
	{
		label: 'Shop',
		href: pageRoutes.shop,
		icon: (
			<svg
				viewBox='0 0 15 15'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				width='15'
				height='15'
			>
				<path
					d='M2.401 6.39l-.497-.056.497.056zm-.778 7l.497.055-.497-.055zm11.754 0l-.497.055.497-.055zm-.778-7l.497-.056-.497.056zM1.904 6.334l-.778 7 .994.11.778-7-.994-.11zM2.617 15h9.766v-1H2.617v1zm11.257-1.666l-.778-7-.994.11.778 7 .993-.11zM11.604 5H3.396v1h8.21V5zm1.492 1.334A1.5 1.5 0 0011.605 5v1a.5.5 0 01.497.445l.994-.11zM12.383 15a1.5 1.5 0 001.49-1.666l-.993.11a.5.5 0 01-.497.556v1zM1.126 13.334A1.5 1.5 0 002.617 15v-1a.5.5 0 01-.497-.555l-.994-.11zm1.772-6.89A.5.5 0 013.395 6V5a1.5 1.5 0 00-1.49 1.334l.993.11zM5 4v-.5H4V4h1zm5-.5V4h1v-.5h-1zM7.5 1A2.5 2.5 0 0110 3.5h1A3.5 3.5 0 007.5 0v1zM5 3.5A2.5 2.5 0 017.5 1V0A3.5 3.5 0 004 3.5h1z'
					fill='currentColor'
				></path>
			</svg>
		),
	},
	{
		label: 'About Us',
		href: pageRoutes.aboutUs,
		icon: (
			<svg
				viewBox='0 0 15 15'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				width='18'
				height='18'
			>
				<path
					d='M2.5.5V0H2v.5h.5zm10 0h.5V0h-.5v.5zM4.947 4.724a.5.5 0 00-.894-.448l.894.448zM2.5 8.494l-.447-.223-.146.293.21.251.383-.32zm5 5.997l-.384.32a.5.5 0 00.769 0l-.385-.32zm5-5.996l.384.32.21-.251-.146-.293-.447.224zm-1.553-4.219a.5.5 0 00-.894.448l.894-.448zM8 9.494v-.5H7v.5h1zm-.5-4.497A4.498 4.498 0 013 .5H2a5.498 5.498 0 005.5 5.497v-1zM2.5 1h10V0h-10v1zM12 .5a4.498 4.498 0 01-4.5 4.497v1c3.038 0 5.5-2.46 5.5-5.497h-1zM4.053 4.276l-2 3.995.895.448 2-3.995-.895-.448zM2.116 8.815l5 5.996.769-.64-5-5.996-.769.64zm5.768 5.996l5-5.996-.768-.64-5 5.996.769.64zm5.064-6.54l-2-3.995-.895.448 2 3.995.895-.448zM8 14.49V9.494H7v4.997h1z'
					fill='currentColor'
				/>
			</svg>
		),
	},
	{
		label: 'Blog',
		href: pageRoutes.blog,
		target: "_blank",
		icon: (
			<svg
				viewBox='0 0 15 15'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				width='18'
				height='18'
			>
				<path
					d='M7.5 15V7m0 .5v3m0-3a4 4 0 00-4-4h-3v3a4 4 0 004 4h3m0-3h3a4 4 0 004-4v-3h-3a4 4 0 00-4 4v3zm0 0l4-4m-4 7l-4-4'
					stroke='currentColor'
				/>
			</svg>
		),
	},
]

export const clientInfo: ClientInfo = {
	firm: 'Tranquil Aura',
	contactNo: '+971 50 369 0484',
	email: 'info@tranquilaura.com',
	address:
		'New Muwailah, Al Maha Building - Office No. 108 - Muwaileh Commercial - Industrial Area - Sharjah',
	geoCoordinates: 'https://maps.app.goo.gl/V3D75rNbusScCKxW6',
	embedMap:
		'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14427.571558540818!2d55.4606197!3d25.3078025!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f68e794ace5%3A0x6ad666c577433ca7!2sJKS%20Olive%20Academy!5e0!3m2!1sen!2sae!4v1718363697617!5m2!1sen!2sae',
	logo: logo,
	socialMediaLinks: {
		facebook: 'https://www.facebook.com/',
		instagram: 'https://www.instagram.com/',
		linkedIn: 'https://www.linkedin.com/company/',
		x: 'https://twitter.com/',
		whatsapp: 'https://wa.me/+971503690484'
	},
}