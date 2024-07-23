type SectionStarterProps = {
	message: string
}

export default function SectionStarter(props: SectionStarterProps) {
	return (
		<div>
			<p className="mb-6 text-lg text-gray-600 font-[monospace]">{`{${props.message}}`}</p>
		</div>
	)
}
