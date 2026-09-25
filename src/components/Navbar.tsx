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
    return(
        <nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-5 bg-[#EEF8FF] shadow-sm">
            <div className="font-bold text-lg text-[#000097]">Shally Liusiana</div>
            <ul className="flex gap-8 list-none">
                {navLinks.map((link) => (
                    <li key={link.targetId}>
                        <a href={`#${link.targetId}`}className="text-[#000097] font-semibold no-underline hover:opacity-70 transition-opacity">{link.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default NavBar;