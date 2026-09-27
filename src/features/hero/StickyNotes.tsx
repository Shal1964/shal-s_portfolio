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
                className= {`absolute z-20 ${positionClass} bg-white rounded-xl shadow-md px-3 py-2 text-xs lg:px-7 lg:py-4 font-jua lg:text-xl ${colorClass} hover:scale-105 transition-transform`}>
                <WashiTape color={tapeColor} rotate={rotation * -1.5} width={36} height={20} className="absolute -top-2 left-1/2 -translate-x-1/2" />
                {label}
        </button>
    )
}

export default StickyNote;
