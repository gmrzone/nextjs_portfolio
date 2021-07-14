import style from "../../../styles/themeSwitcher.module.scss";
import { useState, useEffect, useRef } from "react";
const ThemeSwitcher = () => {
    const darkThemeInitial = localStorage.getItem("dark") === "true";
    const [darkThemeActive, setDarkThemeActive] = useState(darkThemeInitial);
    const toggleTheme = () => {
        setDarkThemeActive((s) => !s);
        localStorage.setItem("dark", !darkThemeActive);
        if (!darkThemeActive) {
          document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    };
    const dartIcon = useRef();
    const LightIcon = useRef();
    const firstRender = useRef(true);
    const fr = firstRender.current;

    const displayDarkIcon = () => {
        dartIcon.current.classList.remove("opacity-0");
        dartIcon.current.classList.remove("opacity-100");
    };
    const hideDarkIcon = () => {
        dartIcon.current.classList.add("hidden");
    };
    const displayLightIcon = () => {
        LightIcon.current.classList.remove("opacity-0");
        LightIcon.current.classList.remove("opacity-100");
    };
    const hideLightIcon = () => {
        LightIcon.current.classList.add("hidden");
    };
    console.log(darkThemeActive);
    useEffect(() => {
        if (darkThemeActive) {
            if (fr) {
                // If First Render then without animating show approprite icon
                LightIcon.current.classList.remove("hidden");
                LightIcon.current.classList.add("opacity-100");

                dartIcon.current.classList.add("hidden");
                dartIcon.current.classList.remove("opacity-100");
            } else {
                // if not first render show approprite icon by animating
                LightIcon.current.classList.remove("hidden");
                setTimeout(displayLightIcon, 100);

                dartIcon.current.classList.remove("opacity-100");
                dartIcon.current.classList.add("opacity-0");
                setTimeout(hideDarkIcon, 100);
            }
        } else {
            if (fr) {
                // If First Render then without animating show approprite icon
                dartIcon.current.classList.remove("hidden");
                dartIcon.current.classList.add("opacity-100");

                LightIcon.current.classList.add("hidden");
                LightIcon.current.classList.remove("opacity-100");
            } else {
                // if not first render show approprite icon by animating
                dartIcon.current.classList.remove("hidden");
                setTimeout(displayDarkIcon, 100);

                LightIcon.current.classList.remove("opacity-100");
                LightIcon.current.classList.add("opacity-0");
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
                className={`absolute left-0 rounded-full transition-all duration-300 w-8 h-8 bg-sec-dark dark:bg-sec ${
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
