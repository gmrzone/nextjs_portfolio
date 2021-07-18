import { NextPage } from "next";
import { MutableRefObject, MouseEvent } from 'react'
interface Item {
    item: {
        name: string;
        to: string;
    };
    closeNav: () => void;
    mainRef: MutableRefObject<HTMLDivElement | null>
}
const NavbarItem: NextPage<Item> = ({ item, closeNav, mainRef }) => {
    const handleNavItemClick = (e: MouseEvent<HTMLAnchorElement>) => {
        if (mainRef.current){
            e.preventDefault()
            const scrollId = (e.target as HTMLAnchorElement).dataset.scroll
            let HeightToScroll = 0
            const sections = Array.from(mainRef.current.children)
            let iterator = 0
            while (sections[iterator].id !== scrollId || iterator > sections.length){
                const elStyle = window.getComputedStyle(sections[iterator])
                const margin = parseFloat(elStyle['marginTop']) + parseFloat(elStyle['marginBottom'])
                HeightToScroll += sections[iterator].clientHeight
                HeightToScroll += margin
                iterator++
            }
    
            window.scrollTo({top: HeightToScroll, behavior: 'smooth'})
            console.log(HeightToScroll)
            closeNav()
        }
    }
    return (
        <li className="text-lg font-semibold cursor-pointer">
            <a className="text-main block hover:text-sec dark:text-bg-sec-inverted dark:hover:text-bg-sec-dark p-4 desktop-st:p-1" href={item.to} onClick={handleNavItemClick} data-scroll={item.to}>{item.name}</a>
        </li>
    );
};
export default NavbarItem;
