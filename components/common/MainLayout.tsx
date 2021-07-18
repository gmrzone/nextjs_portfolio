import Navbar from "../shared/header/Navbar";
import Footer from "../shared/footer/Footer";
import { NextPage } from "next";
import { useRef, MutableRefObject, ReactNode } from "react";

interface IHeader {
    children: (headerRef: MutableRefObject<HTMLHeadElement | null>) => ReactNode;
}
const MainLayout: NextPage<IHeader> = ({ children }) => {
    const headerRef = useRef<HTMLHeadElement | null>(null);
    const mainRef = useRef<HTMLDivElement | null>(null)
    return (
        <div className="main-body h-full flex flex-col">
            <header id="header" className="bg-bg-sec dark:bg-bg-sec-inverted sm:dark:bg-sec-dark fixed w-full z-30 transition-colors duration-500" ref={headerRef}>
                <Navbar mainRef={mainRef}/>
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
