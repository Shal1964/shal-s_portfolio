import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

type NavLink = {
    label : string;
    targetId: string;
};

const navLinks : NavLink[] = [
    {label: "Home", targetId : "home"},
    {label: "About", targetId: "about"},
    {label: "Skills", targetId: "skills"},
    {label: "Projects", targetId: "projects"},
    {label: "Experience", targetId: "experience"},
    {label: "Contact", targetId: "contact"}
]

function NavBar(){
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return(
        <nav ref={menuRef} className="sticky top-0 z-50 bg-[#EEF8FF] shadow-sm">
            <div className="flex items-center justify-between px-8 py-4">
                <div className="font-bold text-base text-[#000097]">Shally Liusiana</div>

                <ul className="hidden md:flex gap-7 list-none">
                    {navLinks.map((link) => (
                        <li key={link.targetId}>
                            <a href={`#${link.targetId}`}className="text-sm text-[#000097] font-semibold no-underline hover:opacity-70 transition-opacity">{link.label}</a>
                        </li>
                    ))}
                </ul>

                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-expanded={isOpen}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    className="md:hidden flex h-9 w-9 items-center justify-center rounded-full text-[#000097] hover:opacity-70 transition-opacity"
                >
                    {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="md:hidden overflow-hidden px-4 pb-4"
                    >
                        <ul className="flex flex-col gap-2 list-none rounded-2xl bg-white p-3 shadow-[0_8px_18px_rgba(0,0,151,0.15)]">
                            {navLinks.map((link) => (
                                <li key={link.targetId}>
                                    <a
                                        href={`#${link.targetId}`}
                                        onClick={() => setIsOpen(false)}
                                        className="block rounded-xl px-4 py-3 text-sm text-[#000097] font-semibold no-underline hover:bg-[#EEF8FF] transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
export default NavBar;
