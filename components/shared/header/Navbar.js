import NavBarItem from "./NavbarItem";
import NavbarLogo from "./NavbarLogo";
import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import BlurBackDrop from "./BlurBackDrop";

const ThemeSwitcher = dynamic(() => import("../ThemeSwitcher"), { ssr: false });
const Navbar = () => {
    // const [mobileNanActive, setMobileNavActive] = useState(false);
    const mobileNav = useRef();
    const backdrop = useRef();
    const navData = [
        {
            name: "Home",
            to: "#home",
        },
        {
            name: "Skills",
            to: "#Skills",
        },
        {
            name: "Projects",
            to: "#Projects",
        },
        {
            name: "About",
            to: "#About",
        },
        {
            name: "Contact",
            to: "#Contact",
        },
    ];
    const transitionMobileNav = () => {
        mobileNav.current.classList.remove("translate-x-full");
        mobileNav.current.classList.add("translate-x-0");
        backdrop.current.classList.remove("backdrop-opacity-0");
        backdrop.current.classList.remove("bg-opacity-0");
        backdrop.current.classList.add("bg-opacity-50");
        backdrop.current.classList.add("backdrop-opacity-100");
    };
    const openMobileNav = () => {
        mobileNav.current.classList.remove("hidden");
        backdrop.current.classList.remove("hidden");
        mobileNav.current.classList.add("flex");
        backdrop.current.classList.add("block");
        setTimeout(transitionMobileNav, 25);
    };
    const hideMobileNav = () => {
        mobileNav.current.classList.remove("flex");
        mobileNav.current.classList.add("hidden");
        backdrop.current.classList.remove("block");
        backdrop.current.classList.add("hidden");
    };
    const closeMobileNav = () => {
        mobileNav.current.classList.remove("translate-x-0");
        mobileNav.current.classList.add("translate-x-full");
        backdrop.current.classList.remove("backdrop-opacity-100");
        backdrop.current.classList.add("backdrop-opacity-0");
        backdrop.current.classList.remove("bg-opacity-50");
        backdrop.current.classList.add("bg-opacity-0");
        setTimeout(hideMobileNav, 500);
    };
    const renderNavItems = navData.map((x, i) => {
        return <NavBarItem item={x} key={i} />;
    });
    return (
        <nav className="container flex justify-between items-center p-2 mx-5">
            {/* Logo */}
            <NavbarLogo />
            {/* Burger Icon */}
            <div className="flex flex-col p-4 desktop-st:hidden space-y-1 cursor-pointer" onClick={openMobileNav}>
                <span className="bg-gray-800 dark:bg-bg-sec-dark h-1 w-8 rounded-sm"></span>
                <span className="bg-gray-800 dark:bg-bg-sec-dark h-1 w-10 rounded-sm"></span>
                <span className="bg-gray-800 dark:bg-bg-sec-dark h-1 w-10 rounded-sm"></span>
                <span className="bg-gray-800 dark:bg-bg-sec-dark h-1 w-10 rounded-sm"></span>
            </div>
            {/* backdrop */}
            <BlurBackDrop backdrop={backdrop} close={closeMobileNav} zIndex="35" />
            {/* Nav */}
            <ul
                className="hidden fixed right-0 translate-x-full transition-transform duration-500 top-0 h-full w-full max-w-full flex-col bg-bg-sec shadow-mobile-nav sm:max-w-sm z-40 desktop-st:flex desktop-st:static desktop-st:w-auto desktop-st:bg-transparent desktop-st:text-black desktop-st:max-w-auto desktop-st:h-auto desktop-st:shadow-none desktop-st:max-w-max desktop-st:-translate-x-0 desktop-st:z-0"
                ref={mobileNav}>
                <div className="flex flex-row align-middle justify-items-start py-3 px-4 text-gray-800 border-b border-gray-200 sm:px-6 desktop-st:hidden">
                    <i className="far fa-times text-2xl cursor-pointer" onClick={closeMobileNav} />
                    <div className="text-xl font-semibold w-full text-center leading-8">Close</div>
                </div>
                <div className="flex flex-col text-center py-6 mb-auto overflow-x-auto desktop-st:flex-row desktop-st:space-x-10 desktop-st:mt-0 desktop-st:py-0 desktop-st:overflow-hidden">
                    {renderNavItems}
                    <li className="flex justify-center mt-6 desktop-st:mt-0">
                        <ThemeSwitcher />
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
