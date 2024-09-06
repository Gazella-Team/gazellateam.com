import { cn } from '@/lib/utils';
import { Reveal } from '../Animations/Reveal';
import { RevealWild } from '../Animations/RevealWild';
import SectionStarter from './SectionStarter';

interface CaseHeroProps {
  heading: string;
}

interface IdentifyMarkedWordProps {
  word: string;
  markedWords: string[];
}

export default function CaseHero({ heading }: CaseHeroProps) {

  function IdentifyMarkedWord({ word, markedWords }: IdentifyMarkedWordProps): boolean {
    return markedWords.includes(word);
  }

  return (
    <section className="py-16 md:py-24">
      <div className="w-[90%] max-w-7xl mx-auto">
        <Reveal>
          <h1 className="font-semibold text-main tracking-tight max-w-3xl text-[40px] md:text-5xl xl:text-5xl leading-[120%] mb-8">
            {heading}
            <span className='text-second'>.</span>
          </h1>
        </Reveal>
      </div>
    </section>
  );
}
