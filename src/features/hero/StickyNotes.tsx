import { motion, useReducedMotion, type Variants } from "framer-motion";
import WashiTape from "../../components/WashiTape";
import type { StickyNote as StickyNoteType } from "./StickyNotesData";

const NOTE_STAGGER = 0.12;
const RESTING_SHADOW = "0 4px 6px rgba(0,0,0,0.15)";
const LANDING_SHADOW = "0 14px 24px rgba(0,0,0,0.35)";

type StickyNotesProps = {
    label: string;
    targetId: string;
    colorClass: string;
    tapeColor: StickyNoteType["tapeColor"];
    positionClass: string;
    rotation: number;
    entranceIndex: number;
}

function getEntranceVariants(rotation: number, entranceIndex: number, shouldReduceMotion: boolean): Variants {
    if (shouldReduceMotion) {
        return {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                rotate: rotation,
                boxShadow: RESTING_SHADOW,
                transition: { duration: 0.2, delay: entranceIndex * 0.04 },
            },
        };
    }

    const overshootRotation = rotation >= 0 ? rotation + 5 : rotation - 5;

    return {
        hidden: { opacity: 0, y: -30, scale: 1.18, rotate: overshootRotation, boxShadow: RESTING_SHADOW },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: rotation,
            boxShadow: [RESTING_SHADOW, LANDING_SHADOW, RESTING_SHADOW],
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: entranceIndex * NOTE_STAGGER,
                boxShadow: { duration: 0.5, times: [0, 0.55, 1], ease: "easeOut", delay: entranceIndex * NOTE_STAGGER },
            },
        },
    };
}

function StickyNote({label, targetId, colorClass, tapeColor, positionClass, rotation, entranceIndex}: StickyNotesProps){
    const shouldReduceMotion = useReducedMotion();
    const handleClick = () => {
        document.getElementById(targetId)?.scrollIntoView({behavior:"smooth"})
    };

    return(
        <motion.button
                onClick={handleClick}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={getEntranceVariants(rotation, entranceIndex, !!shouldReduceMotion)}
                whileHover={{ scale: 1.05 }}
                className= {`absolute z-20 ${positionClass} bg-white rounded-xl px-4 py-2.5 text-sm sm:px-3 sm:py-2 sm:text-xs lg:px-7 lg:py-4 font-jua lg:text-xl ${colorClass} transition-transform`}>
                <WashiTape color={tapeColor} rotate={rotation * -1.5} width={36} height={20} className="absolute -top-2 left-1/2 -translate-x-1/2" />
                {label}
        </motion.button>
    )
}

export default StickyNote;
