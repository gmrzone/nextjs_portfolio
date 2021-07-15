import HeroImage from "./HeroImageMain";
import ButtonLink from "../../common/ButtonLink";
import { useEffect, useRef } from "react";
const MainHero = ({ headerRef }) => {
    const mainRef = useRef()
    const socialMouseOver = (e) => {
        // e.target.classList.remove("text-sec");
        e.target.classList.add("scale-125");
        // e.target.classList.add("text-action");
    };
    const socialMouseOut = (e) => {
        // e.target.classList.remove("text-action");
        e.target.classList.remove("scale-125");
        // e.target.classList.add("text-sec");
    };
    useEffect(() => {
        const options = {
            rootMargin: "-150px 0px 0px 0px"
        }
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(x => {
                if (x.isIntersecting){
                    // light/dark Theme nav without sticky color
                    headerRef.current.classList.remove('bg-main')
                    headerRef.current.classList.remove('dark:bg-main-dark')
                    headerRef.current.classList.remove('sm:dark:bg-main-dark')
                    headerRef.current.classList.add('bg-bg-sec')
                    headerRef.current.classList.add('dark:bg-bg-sec-inverted')
                    headerRef.current.classList.add('sm:dark:bg-sec-dark')
                    headerRef.current.classList.remove('shadow-xl')

                    // Logo main
                    headerRef.current.children[0].children[0].children[0].children[0].children[0].classList.remove('text-bg-sec')
                    headerRef.current.children[0].children[0].children[0].children[0].children[0].classList.remove('dark:text-bg-sec-inverted')
                    headerRef.current.children[0].children[0].children[0].children[0].children[0].classList.add('text-main') 
                    headerRef.current.children[0].children[0].children[0].children[0].children[0].classList.add('dark:text-sec-dark')

                    // logo center dark only
                    headerRef.current.children[0].children[0].children[0].children[1].classList.remove('dark:text-bg-sec-dark')
                    headerRef.current.children[0].children[0].children[0].children[1].classList.add('dark:text-main-dark')

                    // mobile Nav opener

                    Array.from(headerRef.current.children[0].children[1].children).forEach(x => {
                        x.classList.remove('bg-bg-sec')
                        x.classList.remove('dark:bg-bg-sec-inverted')
                        x.classList.remove('sm:dark:bg-bg-sec-dark')
                        x.classList.add('bg-main')
                        x.classList.add('dark:bg-main-dark')
                        x.classList.add('sm:dark:bg-bg-sec-inverted')
                    })

                    
                }   
                else{
                    // light/dark Theme nav when sticky color
                    headerRef.current.classList.remove('bg-white')
                    headerRef.current.classList.remove('dark:bg-bg-sec-inverted')
                    headerRef.current.classList.remove('sm:dark:bg-sec-dark')
                    headerRef.current.classList.add('bg-main')
                    headerRef.current.classList.add('dark:bg-main-dark')
                    headerRef.current.classList.add('sm:dark:bg-main-dark')
                    headerRef.current.classList.add('shadow-xl')

                    // Logo
                   
                    headerRef.current.children[0].children[0].children[0].children[0].children[0].classList.remove('text-main') 
                    headerRef.current.children[0].children[0].children[0].children[0].children[0].classList.remove('dark:text-sec-dark')
                    headerRef.current.children[0].children[0].children[0].children[0].children[0].classList.add('text-bg-sec')
                    headerRef.current.children[0].children[0].children[0].children[0].children[0].classList.add('dark:text-bg-sec-inverted')

                    
                    // logo center dark only
                    headerRef.current.children[0].children[0].children[0].children[1].classList.remove('dark:text-main-dark')
                    headerRef.current.children[0].children[0].children[0].children[1].classList.add('dark:text-bg-sec-inverted')

                    // mobile Nav opener

                    Array.from(headerRef.current.children[0].children[1].children).forEach(x => {
    
                        x.classList.remove('bg-main')
                        x.classList.remove('dark:bg-main-dark')
                        x.classList.remove('sm:dark:bg-bg-sec-inverted')
                        x.classList.add('bg-bg-sec')
                        x.classList.add('dark:bg-bg-sec-inverted')
                        x.classList.add('sm:dark:bg-bg-sec-dark')
                    })


                  
                    
                }
            })
        }, options)
        observer.observe(mainRef.current)
    }, [headerRef])
    return (
        <div className="w-full bg-main transition-colors duration-300 dark:bg-main-dark h-hero sm:h-hero-sm md:h-hero-mid lg:h-hero-large 2xl:h-hero-xl relative main-gradiant before:absolute before:w-full before:h-full before:-translate-x-full before:animate-main-gradiant" ref={mainRef}>
            <div className="container h-full flex flex-col justify-center sm:flex-row absolute right-0 left-0 mx-auto">
                <div className="w-full order-2 flex flex-col justify-center text-center sm:w-3/5 sm:order-1 sm:text-left sm:mt-0 sm:mb-0 space-y-10">
                    <div className="">
                        <h1 className="text-bg-sec dark:text-bg-sec-inverted 2xl:text-6xl tracking-widest mb-2 inline-block overflow-hidden relative after:absolute after:w-full after:h-full after:bg-bg-sec after:left-0 after:translate-x-0 after:top-0 after:animate-theme-text desktop-st:mb-4">
                            Hi, I&apos;am <span className="text-action dark:text-blue-600 transition-colors duration-300">AFzal</span>
                        </h1>
                        <br />
                        <span className="text-gray-200 inline-block overflow-hidden text-xl desktop-st:text-2xl font-semibold m-0 relative after:absolute after:w-full after:h-full after:bg-bg-sec after:top-0 after:left-0 after:animate-theme-text">
                            FullStack Developer
                        </span>
                    </div>
                    <div className="space-x-4">
                        <ButtonLink text="Hire Me" href="#" icon="far fa-shield-check text-xl" forceBig={true} download action={true} />
                        <ButtonLink text="Get CV" href="#" icon="far fa-file text-xl" forceBig={true} download />
                    </div>
                    <div className="space-x-4 text-4xl">
                        <a href="https://github.com/gmrzone" target="_blank" rel="noreferrer" className="group">
                            <i
                                className="fab fa-github text-sec dark:text-bg-sec-inverted cursor-pointer transition-all duration-300 group-hover:text-action dark:group-hover:text-blue-600"
                                onMouseOver={socialMouseOver}
                                onMouseOut={socialMouseOut}
                            />
                        </a>
                        <a href="https://www.instagram.com/afzal__saiyed/" target="_blank" rel="noreferrer" className="group">
                            <i
                                className="fab fa-instagram text-sec dark:text-bg-sec-inverted cursor-pointer transition-all duration-300 group-hover:text-action dark:group-hover:text-blue-600"
                                onMouseOver={socialMouseOver}
                                onMouseOut={socialMouseOut}
                            />
                        </a>
                        <a href="" target="_blank" rel="noreferrer" className="group">
                            <i
                                className="fab fa-linkedin text-sec dark:text-bg-sec-inverted cursor-pointer transition-all duration-300 group-hover:text-action dark:group-hover:text-blue-600"
                                onMouseOver={socialMouseOver}
                                onMouseOut={socialMouseOut}
                            />
                        </a>
                    </div>
                </div>
                <div className="w-full absolute order-1 flex flex-col justify-center right-0 left-0 mr-auto ml-auto mb-10 opacity-10 sm:opacity-20 sm:static sm:w-2/5 sm:order-2 sm:mb-0">
                    <HeroImage />
                </div>
            </div>
            <style jsx>{`
                .main-gradiant::before {
                    display: none;
                }
                @media (min-width: 640px) {
                    .main-gradiant {
                        background: var(--color-main);
                        background: linear-gradient(290deg, var(--color-main) 100%, var(--color-main-gradiant) 100%);
                    }
                    .main-gradiant::before {
                        display: block;
                        background: linear-gradient(290deg, transparent 44%, var(--color-main-gradiant) 44%);
                    }
                }
            `}</style>
        </div>
    );
};

export default MainHero;

/*
 * Created on Tue Jul 06 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */
