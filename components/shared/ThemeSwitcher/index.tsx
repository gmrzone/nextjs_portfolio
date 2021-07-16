import style from "../../../styles/themeSwitcher.module.scss";
import { useState, useEffect, useRef } from "react";
const ThemeSwitcher = () => {
    const darkThemeInitial = (localStorage.getItem("dark") === "true");
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

    const dartIcon = useRef<HTMLDivElement | null>(null);
    const LightIcon = useRef<HTMLDivElement | null>(null);
    const firstRender = useRef<boolean>(true);
    const fr = firstRender.current;

    const displayDarkIcon = () => {
        if (dartIcon.current){
            dartIcon.current.classList.remove("opacity-0");
            dartIcon.current.classList.remove("opacity-100");
        }
    };
    const hideDarkIcon = () => {
        if (dartIcon.current){
            dartIcon.current.classList.add("hidden");
        }
    };
    const displayLightIcon = () => {
        if (LightIcon.current){
            LightIcon.current.classList.remove("opacity-0");
            LightIcon.current.classList.remove("opacity-100");
        }
    };
    const hideLightIcon = () => {
        if (LightIcon.current){
            LightIcon.current.classList.add("hidden");
        }
        
    };
    console.log(darkThemeActive);
    useEffect(() => {
        if (darkThemeActive) {
            if (fr) {
                // If First Render then without animating show approprite icon
                if (LightIcon.current && dartIcon.current){
                    LightIcon.current.classList.remove("hidden");
                    LightIcon.current.classList.add("opacity-100");
                    dartIcon.current.classList.add("hidden");
                    dartIcon.current.classList.remove("opacity-100");
                }

            } else {
                if (LightIcon.current && dartIcon.current){
                    LightIcon.current.classList.remove("hidden");
                    dartIcon.current.classList.remove("opacity-100");
                    dartIcon.current.classList.add("opacity-0");
                }
                // if not first render show approprite icon by animating
                setTimeout(displayLightIcon, 100);
                setTimeout(hideDarkIcon, 100);
            }
        } else {
            if (fr) {
                // If First Render then without animating show approprite icon
                if (dartIcon.current && LightIcon.current){
                    dartIcon.current.classList.remove("hidden");
                    dartIcon.current.classList.add("opacity-100");
    
                    LightIcon.current.classList.add("hidden");
                    LightIcon.current.classList.remove("opacity-100");
                }

            } else {
                // if not first render show approprite icon by animating
                if (dartIcon.current && LightIcon.current){
                    dartIcon.current.classList.remove("hidden");
                    LightIcon.current.classList.remove("opacity-100");
                    LightIcon.current.classList.add("opacity-0");
                }
                setTimeout(displayDarkIcon, 100);
                setTimeout(hideLightIcon, 100);
            }
        }
    }, [darkThemeActive, fr]);
    firstRender.current = false;
    return (
        <div
            className={`relative border border-solid bg-white rounded-full transition duration-300 ${
                darkThemeActive ? "border-blue-400" : "border-gray-400"
            } ${style["theme-switcher__container"]}`}>
            <div
                className={`absolute left-0 rounded-full transition-all duration-300 w-8 h-8 bg-sec-dark dark:bg-sec cursor-pointer ${
                    darkThemeActive ? "translate-x-full" : "translate-x-0"
                } ${style["main-switch"]}`}
                onClick={toggleTheme}>
                <i className={`fas fa-moon w-3 text-white text-xl mr-1 transition-opacity`} ref={dartIcon} />
                <i className={`fas fa-sun w-3 text-white text-xl transition-opacity ${style["dark-icon"]}`} ref={LightIcon} />
            </div>
        </div>
    );
};
export default ThemeSwitcher;
