import { Reveal } from "./Animations/Reveal";

export default function Hero() {
    return (
        <>
        <section className="py-[100px]">
            <div className="w-[90%] mx-auto">
                <Reveal>
                    <h1 className="text-[70px] leading-[84px] w-[60%] font-[200] mb-[14px]">We develop software solutions with impact</h1>
                </Reveal>
                <Reveal>
                    <p className="font-[100] text-[20px] w-[60%]">We&apos;re passionate about building unique and useful solutions by combining software and advanced technology with user-friendly design.</p>
                </Reveal>
            </div>
        </section>
        <div className="mx-auto w-[100%]">
            <video autoPlay loop muted playsInline width="100%">
                <source src="/videos/video01.mp4" type="video/mp4" />
            </video>
        </div>
        </>

    )
}