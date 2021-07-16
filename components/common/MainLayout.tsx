import Navbar from "../shared/header/Navbar";
import Footer from "../shared/footer/Footer";
import { useRef, MutableRefObject, ReactNode, FC } from 'react'


interface IHeader {
    children: (headerRef: MutableRefObject<HTMLHeadElement | null>) => ReactNode
}
const MainLayout: FC<IHeader> = ({ children }) => {
    const headerRef = useRef<HTMLHeadElement | null>(null)
    
    return (
        <div className="main-body h-full flex flex-col">
            <header id="header" className="bg-bg-sec transition-colors duration-500 dark:bg-bg-sec-inverted sm:dark:bg-sec-dark fixed w-full z-30" ref={headerRef}>
                <Navbar />
            </header>
            <main id="main" className="bg-bg-sec dark:bg-bg-sec-dark transition-colors duration-300">
                {children(headerRef)}
            </main>
            <footer id="footer" className="bg-main transition-colors duration-300 dark:bg-black mt-auto w-full text-center">
                <Footer />
            </footer>
            <style jsx>{`
                #main {
                    margin-top: 76px;
                }
                @media (min-width: 992px){
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
