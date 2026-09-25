import { useRef } from "react";
import HeroBackground from "./HeroBackground";
import Clouds from "./Clouds";
import FlowerCluster from "./FlowerCluster";
import HeroContent from "./HeroContent"
import StickyNote from "./StickyNotes";
import { stickyNotes } from "./StickyNotesData";

function Hero(){
    const sectionRef = useRef<HTMLElement>(null);

    return(
       <section ref={sectionRef} id="home" className="relative min-h-screen overflow-hidden bg-[#EEF8FF] flex items-center justify-center">
        <div className="absolute inset-0">
          <HeroBackground />
        </div>
        <Clouds />
        <FlowerCluster side="left" />
        <FlowerCluster side="right" />
        <HeroContent />

        {stickyNotes.map((note) => (
        <StickyNote
          key={note.targetId}
          label={note.label}
          targetId={note.targetId}
          colorClass={note.colorClass}
          tapeColor={note.tapeColor}
          positionClass={note.positionClass}
          rotation={note.rotation}
        />
      ))}

</section>
    )
}

export default Hero
