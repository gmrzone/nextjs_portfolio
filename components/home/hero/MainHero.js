import HeroImage from "./HeroImageMain";
import ButtonLink from "../../common/ButtonLink";
const MainHero = () => {
    const socialMouseOver = (e) => {
        e.target.classList.remove("text-sec");
        e.target.classList.add("scale-125");
        e.target.classList.add("text-action");
    };
    const socialMouseOut = (e) => {
        e.target.classList.remove("text-action");
        e.target.classList.remove("scale-125");
        e.target.classList.add("text-sec");
    };
    return (
        <div className="w-full bg-main h-hero sm:h-hero-sm md:h-hero-mid lg:h-hero-large 2xl:h-hero-xl relative">
            <div className="container h-full flex flex-col justify-center sm:flex-row">
                <div className="w-full order-2 flex flex-col justify-center text-center sm:w-3/5 sm:order-1 sm:text-left sm:mt-0 sm:mb-0 space-y-10">
                    <div className="space-y-3">
                        <h1 className="text-white 2xl:text-6xl tracking-widest">
                            Hi, I&apos;am <span className="text-action">AFzal</span>
                        </h1>
                        <span className="text-gray-200 text-2xl font-semibold m-0">FullStack Developer</span>
                    </div>
                    <div className="space-x-4">
                        <ButtonLink text="Hire Me" href="#" download action={true} />
                        <ButtonLink text="Get CV" href="#" download />
                    </div>
                    <div className=" space-x-4 text-4xl">
                        <a href="https://github.com/gmrzone" target="_blank" rel="noreferrer">
                            <i
                                className="fab fa-github text-sec cursor-pointer transition-all duration-300"
                                onMouseOver={socialMouseOver}
                                onMouseOut={socialMouseOut}
                            />
                        </a>
                        <a href="https://www.instagram.com/afzal__saiyed/" target="_blank" rel="noreferrer">
                            <i
                                className="fab fa-instagram text-sec cursor-pointer transition-all duration-300"
                                onMouseOver={socialMouseOver}
                                onMouseOut={socialMouseOut}
                            />
                        </a>
                        <a href="" target="_blank" rel="noreferrer">
                            <i
                                className="fab fa-linkedin text-sec cursor-pointer transition-all duration-300"
                                onMouseOver={socialMouseOver}
                                onMouseOut={socialMouseOut}
                            />
                        </a>
                    </div>
                </div>
                <div className="w-10/12 absolute order-1 flex flex-col justify-center right-0 left-0 mr-auto ml-auto mb-10 opacity-10 sm:opacity-20 sm:static sm:w-2/5 sm:order-2 sm:mb-0">
                    <HeroImage />
                </div>
            </div>
        </div>
    );
};

export default MainHero;

/*
 * Created on Tue Jul 06 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */
