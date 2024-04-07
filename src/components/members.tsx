import Link from "next/link";
import { Reveal } from "./Animations/Reveal";
import { useState } from "react";

const memberData = [
  {
    name: "Lasse Osmann",
    position: "Founder",
    imageUrl: "/team/lasseosmann.webp",
    secondImageUrl: "/team/lasseosmann.webp",
    linkedIn: "https://www.linkedin.com/in/lasse-osmann-%F0%9F%91%8B-1b6ab9243/"
  },
  {
    name: "Simon Maribo",
    position: "Co-Founder",
    imageUrl: "/team/simonmaribo.webp",
    secondImageUrl: "/team/simonmaribo.webp",
    linkedIn: "https://www.linkedin.com/in/simonmaribo/"
  },
  {
    name: "Mik Lønborg",
    position: "Head of outbound",
    imageUrl: "/team/miklonborg.webp",
    secondImageUrl: "/team/miklonborg.webp",
    linkedIn: "https://www.linkedin.com/in/mik-l%C3%B8nborg/"
  },
  {
    name: "Malte Pedersen",
    position: "Lead Manager",
    imageUrl: "/emptymember.webp",
    secondImageUrl: "/team/miklonborg.webp",
    linkedIn: "https://www.linkedin.com/in/malte-pedersen-2689772ab/"
  },
];

export default function Members() {
  return (
    <section className="py-[100px] pt-[00px]">
      <div className="w-[95%] mx-auto max-w-main lg:w-[90%]">
        <div className="grid grid-cols-4 gap-x-[20px] gap-y-[50px] members:grid-cols-3 membersSm:grid-cols-2 membersSmallest:grid-cols-1">
          {memberData.map((v, index) => (
            <MemberCard count={index} key={v} Obj={v} />
          ))}
        </div>
      </div>
    </section>
  );
}

const MemberCard = (props: any) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Reveal>
          <Link target="_blank" href={props.Obj.linkedIn} className="hover:opacity-70 transition-all">
      <div className="text-center flex flex-col items-center">
        <img
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="aspect-w-1 aspect-h-1 object-cover object-top mb-[20px] transition-all rounded-[14px]"
          src={isHovered ? props.Obj.secondImageUrl : props.Obj.imageUrl}
        ></img>

        <h1 className="text-[20px] font-[300] text-main">{props.Obj.name}</h1>
        <p className="text-gray-600 font-[100]">{props.Obj.position}</p>
      </div>
    </Link>
    </Reveal>

  );
};