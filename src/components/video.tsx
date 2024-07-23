import React, { useEffect } from 'react'

const VideoPlayer = () => {
	useEffect(() => {
		const script1 = document.createElement('script')
		script1.src = 'https://fast.wistia.com/embed/medias/9j67mfrz2c.jsonp'
		script1.async = true
		document.body.appendChild(script1)

		const script2 = document.createElement('script')
		script2.src = 'https://fast.wistia.com/assets/external/E-v1.js'
		script2.async = true
		document.body.appendChild(script2)

		return () => {
			document.body.removeChild(script1)
			document.body.removeChild(script2)
		}
	}, [])

	return (
		<div
			className="wistia_responsive_padding rounded-2xl"
			style={{ position: 'relative' }}
		>
			<div
				className="wistia_responsive_wrapper rounded-2xl"
				style={{ height: '100%', left: 0, top: 0, width: '100%' }}
			>
				<div
					className="wistia_embed wistia_async_9j67mfrz2c seo=true videoFoam=true rounded-2xl"
					style={{
						height: '100%',
						position: 'relative',
						width: '100%',
					}}
				>
					<div
						className="wistia_swatch rounded-2xl"
						style={{
							height: '100%',
							left: 0,
							opacity: 0,
							overflow: 'hidden',
							position: 'absolute',
							top: 0,
							transition: 'opacity 200ms',
							width: '100%',
						}}
					>
						<img
							className="rounded-2xl"
							src="https://fast.wistia.com/embed/medias/9j67mfrz2c/swatch"
							style={{
								filter: 'blur(5px)',
								height: '100%',
								objectFit: 'contain',
								width: '100%',
							}}
							alt=""
							aria-hidden="true"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default VideoPlayer
