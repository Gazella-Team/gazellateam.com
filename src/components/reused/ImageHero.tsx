import { Reveal } from "../Animations/Reveal";

export default function ImageHero(props:any) {
    return (
        <Reveal>
            <img src={props.path} className="w-[100%] mx-auto h-[900px] object-cover"></img>
        </Reveal>
    )
}