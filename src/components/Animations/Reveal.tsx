import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation, useIsPresent } from 'framer-motion'

interface Props {
	children: JSX.Element
<<<<<<< HEAD
	delayTime: number
}

export const Reveal = ({ children, delayTime }: Props) => {
=======
}

export const Reveal = ({ children }: Props) => {
>>>>>>> c3ad152a5cb18ce49c671c7a6890f1bc7a168af2
	const ref = useRef(null)
	const isInView = useInView(ref, { once: false })
	const mainControls = useAnimation()

	useEffect(() => {
		if (isInView) {
			mainControls.start('visible')
		}
	}, [isInView])
	return (
		<div ref={ref}>
			<motion.div
				variants={{
<<<<<<< HEAD
					hidden: { opacity: 0, y: 0 },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				animate={mainControls}
				transition={{
					duration: 1,
					delay: delayTime,
					ease: [0.1, 0.1, 0.1, 1],
				}}
=======
					hidden: { opacity: 0 },
					visible: { opacity: 1 },
				}}
				initial="hidden"
				animate={mainControls}
				transition={{ duration: 0.3, delay: 0.3 }}
>>>>>>> c3ad152a5cb18ce49c671c7a6890f1bc7a168af2
			>
				{children}
			</motion.div>
		</div>
	)
<<<<<<< HEAD
}
=======
}
>>>>>>> c3ad152a5cb18ce49c671c7a6890f1bc7a168af2
