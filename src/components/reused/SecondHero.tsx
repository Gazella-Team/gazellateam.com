import { Reveal } from "../Animations/Reveal";

export default function SecondHero(props:any) {
    return (
        <section className="py-[100px]">
            {props.founders &&  <Reveal>
            <div className="flex items-center justify-center mb-[40px]">
                <div className="bg-white rounded-full p-[4px]">
                    <img className="w-[70px] rounded-full" src="/team/lasseosmann.webp"></img>
                </div>
                <div className="bg-white rounded-full p-[4px] ml-[-20px]">
                    <img className="w-[70px] rounded-full" src="/team/simonmaribo.webp"></img>
                </div>
                <div className="bg-white rounded-full p-[4px] ml-[-20px]">
                    <img className="w-[70px] rounded-full" src="/team/miklonborg.webp"></img>
                </div>
            </div>
            </Reveal>}
            <div className="w-[100%] max-w-[1200px] mx-auto">
                <Reveal>
                    <h1 className="font-[200] text-[60px] leading-[70px] text-main mb-[20px]">{props.heading}</h1>
                </Reveal>
                <Reveal>
                    <p className="font-[100] text-[20px] text-gray-600">{props.description}</p>
                </Reveal>
            </div>
        </section>
    )
}