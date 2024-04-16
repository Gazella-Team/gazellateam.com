import { Reveal } from "../Animations/Reveal";

export default function SecondHero(props:any) {
    return (
        <section className="py-[100px]">
            {props.founders &&  <Reveal>
            <div className="flex items-center justify-center w-[94%] max-w-[1300px] mx-auto mb-[40px]">
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
            <div className="w-[94%]  max-w-[1300px] mx-auto text-center">
                <Reveal>
                    <h1 className="font-[200] text-[40px] tracking-tight md:text-[50px] xl:text-[50px] leading-[110%] text-main mb-[20px]">{props.heading}</h1>
                </Reveal>
                <Reveal>
                    <p className="font-[200] mx-auto text-[16px] md:text-[18px] xl:text-base leading-[170%] max-w-[1000px] text-gray-600">{props.description}</p>
                </Reveal>
            </div>
        </section>
    )
}