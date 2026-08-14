import Navbar from "../shared/header/Navbar";
import Footer from "../shared/footer/Footer";
import { NextPage } from "next";
import { useRef, RefObject, ReactNode, useEffect } from "react";

interface IHeader {
    children: (headerRef: RefObject<HTMLHeadElement | null>) => ReactNode;
}
const MainLayout: NextPage<IHeader> = ({ children }) => {
    const headerRef = useRef<HTMLHeadElement | null>(null);
    const mainRef = useRef<HTMLDivElement | null>(null);
    const mobileNav = useRef<HTMLUListElement | null>(null);
    useEffect(() => {
        const activateNavLink = () => {
            const navHeight = window.innerWidth > 992 ? 70 : 76;
            const topScrollOffset = window.scrollY;
            if (mainRef.current) {
                const sections = Array.from(mainRef.current.children) as HTMLLIElement[];
                for (let i = 0; i < sections.length; i++) {
                    const elStyle = window.getComputedStyle(sections[i]);
                    const scrollId = sections[i].id;
                    const margin = parseFloat(elStyle["marginTop"]);
                    const sectionHeight = sections[i].clientHeight;
                    let offsetTop = sections[i].offsetTop - navHeight;
                    if (scrollId !== "home") {
                        offsetTop -= margin;
                    }
                    // console.log(topScrollOffset, offsetTop, (offsetTop + sectionHeight + margin))
                    if (topScrollOffset + window.innerHeight === document.documentElement.scrollHeight) {
                        const navItems = mobileNav.current?.querySelectorAll(`a[class~=nav-link]`);
                        if (navItems) {
                            navItems.forEach((x) => {
                                if ((x as HTMLAnchorElement).dataset.scroll === "contact") {
                                    x.classList.add("nav-active");
                                } else {
                                    x.classList.remove("nav-active");
                                }
                            });
                        }
                    } else if (topScrollOffset >= offsetTop && topScrollOffset < offsetTop + sectionHeight + margin) {
                        const navItem = mobileNav.current?.querySelector(`a[href=${scrollId}]`);
                        if (navItem) {
                            navItem.classList.add("nav-active");
                        }
                    } else {
                        const navItem = mobileNav.current?.querySelector(`a[href=${scrollId}]`);
                        if (navItem) {
                            navItem.classList.remove("nav-active");
                        }
                    }
                }
            }
        };
        // activateNavLink reads offsetTop / clientHeight / getComputedStyle for
        // every section, which forces a synchronous layout. Coalescing to one
        // run per frame keeps a burst of scroll events from triggering repeated
        // layout passes. `passive` because the handler never preventDefaults.
        let frame = 0;
        const onScroll = () => {
            if (frame) return;
            frame = window.requestAnimationFrame(() => {
                frame = 0;
                activateNavLink();
            });
        };
        document.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            document.removeEventListener("scroll", onScroll);
            if (frame) window.cancelAnimationFrame(frame);
        };
    }, []);
    return (
        <div className="main-body h-full flex flex-col">
            <header
                id="header"
                className="bg-bg-sec dark:bg-bg-sec-inverted sm:dark:bg-sec-dark fixed w-full z-30 transition-colors duration-500"
                ref={headerRef}>
                <Navbar mainRef={mainRef} mobileNav={mobileNav} />
            </header>
            <main id="main" className="bg-bg-sec dark:bg-bg-sec-dark" ref={mainRef}>
                {children(headerRef)}
            </main>
            <footer id="footer" className="bg-main dark:bg-black mt-auto w-full text-center">
                <Footer />
            </footer>
            <style jsx>{`
                #main {
                    margin-top: 76px;
                }
                @media (min-width: 992px) {
                    #main {
                        margin-top: 70px;
                    }
                }
            `}</style>
        </div>
    );
};

export default MainLayout;

/*
 * Created on Wed Jul 07 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */
