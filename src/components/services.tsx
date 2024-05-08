import { Reveal } from "./Animations/Reveal";

export default function Services() {
    return (
        <section className="py-[100px]">
            <div className="w-[90%] mx-auto max-w-[660px]">
                <Reveal>
                    <h1 className="text-[54px] font-[300] leading-[110%] mb-[70px]">Custom development for any project</h1>
                </Reveal>
                <Reveal>
                    <div className="mb-14 flex flex-col gap-4">
                        <h2 className="text-2xl font-[300] text-main">Web Development</h2>
                        <p className="font-[200] text-[18px] text-gray-600">
                            By combining our expertise, the latest web-development frameworks and user-optimized interfaces, we&apos;re capable of delivering custom web-pages suiting your exact needs and expectations. The core of our web-development consists of prioritizing speed and conversion optimization, to deliver a functional product and seamless user experince for all visitors ensuring more organic leads.
                        </p>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="mb-14 flex flex-col gap-4">
                        <h2 className="text-2xl font-[300] text-main">Mobile App Development</h2>
                        <p className="font-[200] text-[18px] text-gray-600">
                            The future is mobile. We specialize in native cross-platform app development, to deliver 
                        </p>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="mb-14 flex flex-col gap-4">
                        <h2 className="text-2xl font-[300] text-main">Design & User Experience</h2>
                        <p className="font-[200] text-[18px] text-gray-600">
                            A software without user-friendly design and an easy-to-navigate user experience is nothing.
                        </p>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-[300] text-main">Shopify Ecommerce Development</h2>
                        <p className="font-[200] text-[18px] text-gray-600">
                            What sets us apart is our commitment to providing complete product solutions for our clients. We don&apos;t just offer development services; we also provide guidance on milestones, implementation strategies, and selecting the right platforms and service providers. We understand that success goes beyond coding - it requires a comprehensive approach.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>

    )
}