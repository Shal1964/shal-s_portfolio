export type StickyNote = {
    label: string;
    targetId: string;
    colorClass: string;
    tapeColor: "purple" | "pink" | "orange" | "yellow" | "blue" | "green";
    positionClass: string;
    rotation: number;
};

export const stickyNotes: StickyNote[] = [
    {
        label: "About",
        targetId: "about",
        colorClass: "text-green-600",
        tapeColor: "green",
        positionClass: "top-[14%] left-[3%] lg:top-[40%] lg:left-[10%]",
        rotation: -6,
    },
    {
        label: "Skills",
        targetId: "skills",
        colorClass: "text-purple-600",
        tapeColor: "purple",
        positionClass: "top-[27%] left-[3%] lg:top-[55%] lg:left-[13%]",
        rotation: 4,
    },
    {
        label: "Project",
        targetId: "projects",
        colorClass: "text-purple-400",
        tapeColor: "blue",
        positionClass: "top-[40%] left-[3%] lg:top-[45%] lg:left-[27%]",
        rotation: -3,
    },
    {
        label: "Experience",
        targetId: "experience",
        colorClass: "text-pink-400",
        tapeColor: "pink",
        positionClass: "top-[14%] right-[3%] lg:top-[45%] lg:right-[27%]",
        rotation: 5,
    },
    {
        label: "Contact",
        targetId: "contact",
        colorClass: "text-orange-400",
        tapeColor: "orange",
        positionClass: "top-[27%] right-[3%] lg:top-[58%] lg:right-[9%]",
        rotation: -4,
    },
];
