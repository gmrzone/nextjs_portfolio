import NavBarItem from "./NavbarItem";
import NavbarLogo from "./NavbarLogo";
import { useRef } from "react";
import dynamic from "next/dynamic";
import BlurBackDrop from "./BlurBackDrop";
import { NextPage } from "next";

const ThemeSwitcher = dynamic(() => import("../ThemeSwitcher"), { ssr: false });
const Navbar: NextPage = () => {
    // const [mobileNanActive, setMobileNavActive] = useState(false);
    const mobileNav = useRef<HTMLUListElement | null>(null);
    const backdrop = useRef<HTMLDivElement | null>(null);
    const navData = [
        {
            name: "Home",
            to: "#home",
        },
        {
            name: "Skills",
            to: "#skills",
        },
        {
            name: "Projects",
            to: "#projects",
        },
        {
            name: "About",
            to: "#about",
        },
        {
            name: "Contact",
            to: "#contact",
        },
    ];
    const transitionMobileNav: () => void = () => {
        if (mobileNav.current && backdrop.current) {
            mobileNav.current.classList.remove("translate-x-full");
            mobileNav.current.classList.add("translate-x-0");
            backdrop.current.classList.remove("backdrop-opacity-0");
            backdrop.current.classList.remove("bg-opacity-0");
            backdrop.current.classList.add("bg-opacity-50");
            backdrop.current.classList.add("backdrop-opacity-100");
        }
    };
    const openMobileNav: () => void = () => {
        if (mobileNav.current && backdrop.current) {
            mobileNav.current.classList.remove("hidden");
            backdrop.current.classList.remove("hidden");
            mobileNav.current.classList.add("flex");
            backdrop.current.classList.add("block");
        }
        setTimeout(transitionMobileNav, 25);
    };
    const hideMobileNav: () => void = () => {
        if (mobileNav.current && backdrop.current) {
            mobileNav.current.classList.remove("flex");
            mobileNav.current.classList.add("hidden");
            backdrop.current.classList.remove("block");
            backdrop.current.classList.add("hidden");
        }
    };
    const closeMobileNav: () => void = () => {
        if (mobileNav.current && backdrop.current) {
            mobileNav.current.classList.remove("translate-x-0");
            mobileNav.current.classList.add("translate-x-full");
            backdrop.current.classList.remove("backdrop-opacity-100");
            backdrop.current.classList.add("backdrop-opacity-0");
            backdrop.current.classList.remove("bg-opacity-50");
            backdrop.current.classList.add("bg-opacity-0");
        }

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
                <span className="bg-main dark:bg-main-dark sm:dark:bg-bg-sec-inverted h-1 w-8 rounded-sm"></span>
                <span className="bg-main dark:bg-main-dark sm:dark:bg-bg-sec-inverted h-1 w-10 rounded-sm"></span>
                <span className="bg-main dark:bg-main-dark sm:dark:bg-bg-sec-inverted h-1 w-10 rounded-sm"></span>
                <span className="bg-main dark:bg-main-dark sm:dark:bg-bg-sec-inverted h-1 w-10 rounded-sm"></span>
            </div>
            {/* backdrop */}
            <BlurBackDrop backdrop={backdrop} close={closeMobileNav} zIndex={{ zIndex: 35 }} />
            {/* Nav */}
            <ul
                className="hidden fixed right-0 translate-x-full transition-transform p-2 duration-500 top-0 h-full w-full max-w-full flex-col bg-bg-sec dark:bg-sec-dark desktop-st:dark:bg-transparent shadow-mobile-nav sm:max-w-sm z-40 desktop-st:flex desktop-st:static desktop-st:w-auto desktop-st:bg-transparent desktop-st:text-black desktop-st:max-w-auto desktop-st:h-auto desktop-st:shadow-none desktop-st:max-w-max desktop-st:-translate-x-0 desktop-st:z-0 main-container"
                ref={mobileNav}>
                <div className="flex flex-row align-middle justify-items-start py-3 px-4 text-main dark:text-bg-sec-inverted border-b border-gray-200 sm:px-6 desktop-st:hidden">
                    <i className="far fa-times text-2xl cursor-pointer" onClick={closeMobileNav} />
                    <div className="text-xl font-semibold w-full text-center leading-8">Close</div>
                </div>
                <div className="flex flex-col text-center py-6 mb-auto overflow-x-auto desktop-st:flex-row desktop-st:space-x-10 desktop-st:mt-0 desktop-st:py-0 desktop-st:overflow-hidden">
                    {renderNavItems}
                    <li className="flex justify-center mt-6 desktop-st:mt-0" data-ignore="true">
                        <ThemeSwitcher />
                    </li>
                </div>
            </ul>
            <style jsx>{`
                .main-container {
                    backface-visibility: hidden;
                    perspective: 1000;
                    will-change: transform;
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
