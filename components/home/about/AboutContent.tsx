import ButtonLink from "../../common/ButtonLink";
import { NextPage } from "next";

// The typewriter that used to sit here ran the same two titles as the hero and
// left "I am AFzal and I'm a" dangling whenever it was mid-cycle. The hero says
// what I build; this section covers how the career got here, so the two no
// longer repeat each other.
const FACTS = [
    { label: "Based in", value: "Mumbai, India" },
    { label: "Currently", value: "Tech Lead at Perfios" },
    { label: "Works across", value: "Python · TypeScript · AWS" },
];

const AboutContent: NextPage = () => {
    return (
        <div
            className="w-full flex flex-col justify-center desktop-st:w-2/3 transform-gpu translate-x-full opacity-0 transition-all duration-500 main-container"
            data-name="content">
            <h3 className="text-main dark:text-main-dark leading-tight">From freelance to leading a KYC platform</h3>

            <p className="mt-5 text-gray-700 dark:text-sec-dark font-semibold max-w-[62ch] leading-relaxed">
                I started out freelancing for a US healthcare client in 2019, spent two years building the CMS behind Kroger&apos;s banner
                ecosystem, and now lead a small team at Perfios. I work across the whole stack — Python and FastAPI behind the API,
                TypeScript with React, Angular and Vue in front of it, and the AWS and HAProxy layer underneath.
            </p>

            <dl className="mt-8 grid gap-5 sm:grid-cols-3 max-w-[42rem]">
                {FACTS.map((fact) => (
                    <div key={fact.label} className="border-l-2 border-sec/40 dark:border-blue-600/40 pl-4">
                        <dt className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-700">{fact.label}</dt>
                        <dd className="mt-1 text-main dark:text-main-dark font-semibold">{fact.value}</dd>
                    </div>
                ))}
            </dl>

            <div className="mt-9">
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
