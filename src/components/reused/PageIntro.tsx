import { cn } from '@/lib/utils';
import { Reveal } from '../Animations/Reveal';
import { RevealWild } from '../Animations/RevealWild';
import SectionStarter from './SectionStarter';

interface PageIntroProps {
  heading: string;
  description: string;
  marked: string[];
}

interface IdentifyMarkedWordProps {
  word: string;
  markedWords: string[];
}

export default function PageIntro({ heading, description, marked }: PageIntroProps) {

  function IdentifyMarkedWord({ word, markedWords }: IdentifyMarkedWordProps): boolean {
    return markedWords.includes(word);
  }

  return (
    <section className="py-16 md:py-24">
      <div className="w-[90%] max-w-7xl mx-auto">
        <Reveal>
          <h1 className="font-semibold text-main tracking-tight max-w-3xl text-[40px] md:text-5xl xl:text-6xl leading-[120%] mb-8">
            {heading}
            <span className='text-second'>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <p className="font-light text-[16px] md:text-[18px] xl:text-[20px] leading-[150%] max-w-xl text-gray-600">
            {description.split(" ").map((word: string, index: number) => (
              <span 
                key={index} 
                className={cn("", IdentifyMarkedWord({ word, markedWords: marked }) && "text-third")}
              >
                {word}{" "}
              </span>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
