import { Reveal } from '@/components/Animations/Reveal'
import { RevealWild } from '@/components/Animations/RevealWild'
import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'
import CalEmbed from '@/components/cal'
import KunderGrid from '@/components/kunder'
import PageIntro from '@/components/reused/PageIntro'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Kunder() {
	return (
		<Layout cta={true}>
			<Meta title={`Kontakt os - Gazella Team`} />
            <section className="py-24 gap-16 flex flex-col justify-center relative bg-cover bg-center">
                <div className="w-[90%] max-w-7xl relative mx-auto flex flex-col ">
                    <div className="flex flex-col">
                        <RevealWild delayTime={0.3}>
                            <h1 className="text-4xl max-w-[700px] font-semibold tracking-tight text-main md:text-5xl xl:leading-[120%] mb-[30px]">
                                <p>Hundredevis af gladekunder. Hver enkel er noget særligt<span className='text-second'>.</span></p>
                            </h1>
                        </RevealWild>
                    </div>
                </div>
            </section>
            <KunderGrid />
		</Layout>
	)
}
