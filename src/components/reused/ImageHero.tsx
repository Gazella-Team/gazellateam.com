import { Reveal } from "../Animations/Reveal";

export default function ImageHero(props:any) {
    return (
        <Reveal>
            <img src={props.path} className="w-[94%] rounded-[14px] mx-auto h-[900px] object-cover"></img>
        </Reveal>
    )
}