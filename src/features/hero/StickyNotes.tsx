import WashiTape from "../../components/WashiTape";
import type { StickyNote as StickyNoteType } from "./StickyNotesData";

type StickyNotesProps = {
    label: string;
    targetId: string;
    colorClass: string;
    tapeColor: StickyNoteType["tapeColor"];
    positionClass: string;
    rotation: number;
}

function StickyNote({label, targetId, colorClass, tapeColor, positionClass, rotation}: StickyNotesProps){
    const handleClick = () => {
        document.getElementById(targetId)?.scrollIntoView({behavior:"smooth"})
    };

    return(
        <button onClick={handleClick}
                style={{transform: `rotate(${rotation}deg)`}}
                className= {`absolute z-20 ${positionClass} bg-white rounded-xl shadow-md px-4 py-3 text-sm lg:px-10 lg:py-6 font-jua lg:text-2xl ${colorClass} hover:scale-105 transition-transform`}>
                <WashiTape color={tapeColor} rotate={rotation * -1.5} width={64} className="absolute -top-4 left-1/2 -translate-x-1/2" />
                {label}
        </button>
    )
}

export default StickyNote;
