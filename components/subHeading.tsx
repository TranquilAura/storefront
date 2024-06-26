interface Props {
	children: React.ReactNode
}

const Subheading = ({ children }: Props) => (
	<section className='text-xl font-semibold'>{children}</section>
)

export default Subheading
