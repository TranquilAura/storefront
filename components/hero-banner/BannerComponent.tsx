import React from 'react'

function BannerComponent() {
	return (
		<div className='relative h-[90vh]'>
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
			<h1 className='absolute w-full h-full left-0 top-0 flex flex-col justify-end bg-gradient-to-t from-black to-transparent p-10'>
				<div className='w-full flex justify-between items-end'>
					<div className='font-bold text-5xl text-white leading-tight'>
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
