import style from "../../../styles/themeSwitcher.module.scss";
import { useState, useEffect, useRef } from "react";
import { NextPage } from "next";
import ThemeIcon from './ThemeIcon'
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
    const ThemeMainRef = useRef<SVGPathElement | null>(null)
    const ThemecenterRef = useRef<SVGPathElement | null>(null)

    const themeMainG = useRef<SVGGeometryElement | null>(null)
    // const dartIcon = useRef<HTMLDivElement | null>(null);
    // const LightIcon = useRef<HTMLDivElement | null>(null);
    const firstRender = useRef<boolean>(true);
    const fr = firstRender.current;

    useEffect(() => {
        if (darkThemeActive){
            if (ThemeMainRef.current && ThemecenterRef.current){
                ThemeMainRef.current.classList.remove('rotate-0')
                ThemeMainRef.current.style.transform = "rotate(360deg)"

                ThemecenterRef.current.classList.remove('scale-125')
                ThemecenterRef.current.classList.remove('-translate-x-1')
                ThemecenterRef.current.classList.add('scale-100')
                ThemecenterRef.current.classList.add('translarte-x-0')
                
            }

        }
        else{
            if (ThemeMainRef.current && ThemecenterRef.current){
                ThemeMainRef.current.style.transform = "rotate(0deg)"
                ThemeMainRef.current.classList.add('rotate-0')
                

                ThemecenterRef.current.classList.remove('scale-100')
                ThemecenterRef.current.classList.remove('translarte-x-0')
                ThemecenterRef.current.classList.add('scale-125')
                ThemecenterRef.current.classList.add('-translate-x-1')
          }
        }
    }, [darkThemeActive])
    firstRender.current = false;
    return (
        <div
            className={`relative border border-solid bg-white rounded-full transition duration-300 ${
                darkThemeActive ? "border-blue-400" : "border-gray-400"
            } ${style["theme-switcher__container"]}`}>
            <div
                className={`absolute flex left-0 rounded-full transition-all duration-300 w-8 h-8 bg-sec-dark dark:bg-sec cursor-pointer ${
                    darkThemeActive ? "translate-x-full" : "translate-x-0"
                } ${style["main-switch"]}`}
                onClick={toggleTheme}>
                {/* <i className={`fas fa-moon w-3 text-white text-xl mr-1 transition-opacity`} ref={dartIcon} />
                <i className={`fas fa-sun w-3 text-white text-xl transition-opacity ${style["dark-icon"]}`} ref={LightIcon} /> */}
                <ThemeIcon mainRef={ThemeMainRef} centerRef={ThemecenterRef} themeMainG={themeMainG} darkThemeActive={darkThemeActive}/>
            </div>
        </div>
    );
};
export default ThemeSwitcher;
