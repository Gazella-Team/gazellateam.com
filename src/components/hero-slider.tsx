import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Slider from 'react-infinite-logo-slider'

const sliderData = [
    {
        image: "/hero-slider-images/test.webp",
        heading: "LM Capital",
        description: "lalalal",
        link: "/"
    },
    {
        image: "/hero-slider-images/test.webp",
        heading: "LM Capital",
        description: "lalalal",
        link: "/"
    },
    {
        image: "/hero-slider-images/test.webp",
        heading: "LM Capital",
        description: "lalalal",
        link: "/"
    },
    {
        image: "/hero-slider-images/test.webp",
        heading: "LM Capital",
        description: "lalalal",
        link: "/"
    },
    {
        image: "/hero-slider-images/test.webp",
        heading: "LM Capital",
        description: "lalalal",
        link: "/"
    },
    {
        image: "/hero-slider-images/test.webp",
        heading: "LM Capital",
        description: "lalalal",
        link: "/"
    },
    {
        image: "/hero-slider-images/test.webp",
        heading: "LM Capital",
        description: "lalalal",
        link: "/"
    },

]

export default function HeroSlider() {
	return (
		<section className="flex items-center overflow-hidden">
			<div className="flex items-center">
				<Slider
					width="550px"
					duration={50}
					pauseOnHover={false}
					blurBorders={true}
					blurBoderColor={'#fffff'}
				>
					{sliderData.map((profile, index) => (
						<Slider.Slide key={profile.heading}>
                            <img className='pr-10 w-[]' src={profile.image}></img>
						</Slider.Slide>
					))}
				</Slider>
			</div>
		</section>
	)
}