import React from 'react'

function BannerComponent() {
	return (
		<div className='relative h-[90vh] mt-10'>
			<video
				autoPlay
				muted
				loop
				id='myVideo'
				className='w-full h-full object-cover'
			>
				<source src='videos/banner-video.mp4' type='video/mp4' />
				Your browser does not support HTML5 video.
			</video>
			<h1 className='absolute w-full h-full left-0 top-0 flex flex-col justify-end items-center bg-gradient-to-t from-black to-transparent p-10'>
				<div className='w-full flex max-md:flex-col justify-between max-md:items-center max-md:gap-5 items-end max-w-screen-xl'>
					<div className='text-2xl md:text-5xl text-white leading-tight max-md:text-center'>
						Welcome to <br /> Oud Tranquil Aura
					</div>
					<button className='font-sans bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded-md'>
						Learn More
					</button>
				</div>
			</h1>
		</div>
	)
}

export default BannerComponent
