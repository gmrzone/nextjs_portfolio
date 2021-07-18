import ButtonLink from "../../common/ButtonLink";
import { NextPage } from "next";
const AboutContent: NextPage = () => {
    return (
        <div
            className="w-full flex flex-col justify-center desktop-st:w-2/3 transform-gpu translate-x-full opacity-0 transition-all duration-500 main-container"
            data-name="content">
            <div className="space-y-8">
                <h3 className="text-main dark:text-main-dark">I am AFzal and I&apos;am a Fullstack Developer</h3>
                <p className="text-gray-700 dark:text-sec-dark font-semibold">
                    Highly motivated self-thought developer seeking to launch a career building web application. High level experiance in
                    web design and development Knowledge producing quality work. Familiar with development and deployment process of many
                    web-based technologies such as Python, Django, DRF, JavaScript, JQuery, Node, React, Redux and Next.js etc..
                </p>
            </div>
            <div className="mt-8">
                <ButtonLink
                    text="Download CV"
                    icon="far fa-file text-xl"
                    cssClasses="dark:bg-sec-dark dark:text-bg-sec-inverted dark:hover:bg-main-dark"
                    href="#"
                    download={true}
                />
            </div>
            <style jsx>{`
                .main-container {
                    backface-visibility: hidden;
                    perspective: 1000;
                    will-change: transform;
                }
            `}</style>
        </div>
    );
};

export default AboutContent;

/*
 * Created on Wed Jul 07 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */
