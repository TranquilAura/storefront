interface Props {
	children: React.ReactNode
}

const Section = ({ children }: Props) => (
	<section className='mt-10 max-w-screen-xl'>{children}</section>
)

export default Section
