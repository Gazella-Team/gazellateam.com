export default function GraphicDisplay({ image }: { image: string }) {
	return (
		<section>
			<img
				className="w-[100%] mx-auto h-[100vh] object-cover"
				src={image}
			></img>
		</section>
	)
}
