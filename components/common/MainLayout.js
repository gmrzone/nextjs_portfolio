import Navbar from "../shared/header/Navbar";
import Footer from "../shared/footer/Footer";
import { useEffect, useRef } from 'react'
const MainLayout = ({ children }) => {
    const headerRef = useRef()
    useEffect(() => {
        const handleScroll = (e) => {
            if(window.pageYOffset > 0){
                headerRef.current.classList.remove('dark:bg-nav-dark')
                headerRef.current.classList.remove('bg-bg-sec')
                headerRef.current.classList.add('dark:bg-sec-inverted')
                headerRef.current.classList.add('bg-white')
                headerRef.current.classList.add('shadow-md')
            }
            else{
                headerRef.current.classList.remove('bg-white')
                headerRef.current.classList.remove('dark:bg-sec-inverted')
                headerRef.current.classList.remove('shadow-md')
                headerRef.current.classList.add('dark:bg-nav-dark')
                headerRef.current.classList.add('bg-bg-sec')
            }
            
        }
        window.addEventListener('scroll', handleScroll)


    }, [])
    return (
        <div className="main-body h-full flex flex-col">
            <header id="header" className="bg-bg-sec transition-colors duration-500 dark:bg-nav-dark fixed w-full z-50" ref={headerRef}>
                <Navbar />
            </header>
            <main id="main" className="bg-bg-sec dark:bg-bg-sec-dark transition-colors duration-300">
                {children}
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
