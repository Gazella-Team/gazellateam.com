import { Reveal } from "./Animations/Reveal";

export default function Services() {
    return (
        <section className="py-12 pb-24 bg-cover bg-center flex flex-col items-end">
            <div className="w-[94%] md:w-[70%] mx-auto flex flex-col items-end">
                <div className="max-w-2xl">
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
                                The future is mobile. We specialize in native cross-platform app development, to deliver unique mobile experiences for both iOS and Anroid. Through the entire development process, we make sure of continuous iteration and feedback, followed by post-launch support to ensure a future-proof scalable solution suiting your vision.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className="mb-14 flex flex-col gap-4">
                            <h2 className="text-2xl font-[300] text-main">Design & User Experience</h2>
                            <p className="font-[200] text-[18px] text-gray-600">
                                A software without user-friendly design and an easy-to-navigate user experience is nothing. When working on a project, we ensure to design, test and implement a unique design along with a structured user experince, based on your target audience.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl font-[300] text-main">Shopify Ecommerce Development</h2>
                            <p className="font-[200] text-[18px] text-gray-600">
                                Having a conversion-optimized setup for your webshop is essential for optimal results. By implementing a unique brand identiy along with conversion-optimized pages and seamless checkout flows, we&apos;re able to maximize the potential of any webshop. 
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>

    )
}