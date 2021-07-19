import { NextPage } from "next";
import { MutableRefObject, MouseEvent } from 'react';
import { useContext } from 'react'
import { NavItemActiveContext } from '../../../context/navItemActiveContext'
interface Item {
    item: {
        name: string;
        to: string;
    };
    closeNav: () => void;
    mainRef: MutableRefObject<HTMLDivElement | null>
}
const NavbarItem: NextPage<Item> = ({ item, closeNav, mainRef }) => {
    const { activeItem } = useContext(NavItemActiveContext)
    const handleNavItemClick = (e: MouseEvent<HTMLAnchorElement>) => {
        if (mainRef.current){
            e.preventDefault()
            const scrollId = (e.target as HTMLAnchorElement).dataset.scroll
            let HeightToScroll = 0
            const sections = Array.from(mainRef.current.children)
            let iterator = 0
            while (sections[iterator].id !== scrollId || iterator > sections.length){
                const elStyle = window.getComputedStyle(sections[iterator])
                const margin = parseFloat(elStyle['marginTop'])
                HeightToScroll += sections[iterator].clientHeight
                HeightToScroll += margin
                iterator++
            }
    
            window.scrollTo({top: HeightToScroll, behavior: 'smooth'})
            closeNav()
        }
    }
    return (
        <li className="text-lg font-semibold cursor-pointer">
            {console.log(activeItem)}
            <a className="nav-link text-main dark:text-bg-sec-inverted block hover:text-sec dark:hover:text-blue-600 p-4 desktop-st:p-1" href={item.to} onClick={handleNavItemClick} data-scroll={item.to} data-active={activeItem === item.to}>{item.name}</a>
            <style jsx>{`
                .nav-active {
                    color: var(--nav-item-color);
                }
            `}</style>
        </li>
    );
};
export default NavbarItem;
