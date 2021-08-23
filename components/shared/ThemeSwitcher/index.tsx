import style from "../../../styles/themeSwitcher.module.scss";
import { useState, useEffect, useRef } from "react";
import { NextPage } from "next";
import ThemeIcon from "./ThemeIcon";
const ThemeSwitcher: NextPage = () => {
    const darkThemeInitial = localStorage.getItem("dark") === "true";
    const [darkThemeActive, setDarkThemeActive] = useState<boolean>(darkThemeInitial);

    const toggleTheme = () => {
        setDarkThemeActive((s) => !s);
        localStorage.setItem("dark", (!darkThemeActive).toString());
        if (!darkThemeActive) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    };
    const ThemeMainRef = useRef<SVGPathElement | null>(null);
    const ThemecenterRef = useRef<SVGPathElement | null>(null);

    const themeMainG = useRef<SVGGeometryElement | null>(null);
    // const dartIcon = useRef<HTMLDivElement | null>(null);
    // const LightIcon = useRef<HTMLDivElement | null>(null);
    const firstRender = useRef<boolean>(true);
    const fr = firstRender.current;

    useEffect(() => {
        if (darkThemeActive) {
            if (ThemeMainRef.current && ThemecenterRef.current) {
                ThemeMainRef.current.classList.remove("rotate-0");
                ThemeMainRef.current.style.transform = "rotate(360deg)";

                ThemecenterRef.current.classList.remove("scale-125");
                ThemecenterRef.current.classList.remove("-translate-x-1");
                ThemecenterRef.current.classList.add("scale-100");
                ThemecenterRef.current.classList.add("translarte-x-0");
            }
        } else {
            if (ThemeMainRef.current && ThemecenterRef.current) {
                ThemeMainRef.current.style.transform = "rotate(0deg)";
                ThemeMainRef.current.classList.add("rotate-0");

                ThemecenterRef.current.classList.remove("scale-100");
                ThemecenterRef.current.classList.remove("translarte-x-0");
                ThemecenterRef.current.classList.add("scale-125");
                ThemecenterRef.current.classList.add("-translate-x-1");
            }
        }
    }, [darkThemeActive]);
    firstRender.current = false;
    return (
        <div
            className={`relative border border-solid bg-white rounded-full  ${darkThemeActive ? "border-blue-400" : "border-gray-400"} ${
                style["theme-switcher__container"]
            }`}>
            <div
                className={`static desktop-st:absolute flex left-0 rounded-full transition-all duration-300 w-8 h-8 transform-gpu bg-sec-dark dark:bg-sec cursor-pointer main-container ${
                    darkThemeActive ? "sm:translate-x-full" : "sm:translate-x-0"
                } ${style["main-switch"]}`}
                onClick={toggleTheme}>
                <ThemeIcon mainRef={ThemeMainRef} centerRef={ThemecenterRef} themeMainG={themeMainG} darkThemeActive={darkThemeActive} />
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
export default ThemeSwitcher;
