import ButtonLink from "../../common/ButtonLink";
import { NextPage } from "next";
import { useEffect, useRef } from "react";
import { TypeWritterText } from "../../../utils/typewritterText";
const AboutContent: NextPage = () => {
    const typingText = useRef<HTMLSpanElement | null>(null);
    const typingTextInstance = useRef<TypeWritterText | null>(null);
    useEffect(() => {
        if (!typingTextInstance.current) {
            typingTextInstance.current = new TypeWritterText(
                typingText,
                ["Tech Lead Engineer.", "Fullstack Engineer.", "Fintech Builder."],
                50,
                160,
            );
        }
        return () => {
            typingTextInstance.current?.stop();
            typingTextInstance.current = null;
        };
    }, []);
    return (
        <div
            className="w-full flex flex-col justify-center desktop-st:w-2/3 transform-gpu translate-x-full opacity-0 transition-all duration-500 main-container"
            data-name="content">
            <div className="">
                <h3 className="text-main dark:text-main-dark h-20">
                    I am AFzal and I&apos;m a{" "}
                    <span
                        ref={typingText}
                        className="text-action inline-block dark:text-blue-600 relative after:absolute after:w-1 after:-right-2 after:animate-type-text-cursor after:bg-black after:h-full"></span>
                </h3>
                <p className="text-gray-700 dark:text-sec-dark font-semibold">
                    Fullstack engineer with more than five years of experience, the last three and a half in fintech, building KYC and
                    identity-verification products that banks and insurers run in production. Currently leading two engineers at Perfios,
                    working across the Python and JavaScript ecosystems and the AWS infrastructure behind them.
                </p>
            </div>
            <div className="mt-8">
                <ButtonLink
                    text="Download CV"
                    icon="far fa-file text-xl"
                    cssClasses="dark:bg-sec-dark dark:text-bg-sec-inverted! dark:hover:bg-main-dark"
                    href="./resume.pdf"
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
