import BlurBackDrop from "../../shared/header/BlurBackDrop";
import { useRef, useEffect } from "react";
import reactDom from "react-dom";
const DesktopFullSkillModalItem = ({ active, close, title }) => {
    const backdrop = useRef();
    const container = useRef();
    const modal = useRef();
    const transitionIn = () => {
        backdrop.current.classList.remove("backdrop-opacity-0");
        backdrop.current.classList.remove("bg-opacity-0");
        backdrop.current.classList.add("bg-opacity-30");
        backdrop.current.classList.add("backdrop-opacity-100");

        modal.current.classList.remove("opacity-0");
        modal.current.classList.add("opacity-100");
    };
    const transitionOut = () => {
        backdrop.current.classList.add("desktop-st:hidden");

        container.current.classList.remove("desktop-st:block");
        container.current.classList.add("desktop-st:hidden");

        modal.current.classList.add("desktop-st:hidden");
    };
    useEffect(() => {
        if (active) {
            backdrop.current.classList.remove("desktop-st:hidden");
            backdrop.current.classList.add("desktop-st:block");

            container.current.classList.remove("desktop-st:hidden");
            container.current.classList.add("desktop-st:block");

            modal.current.classList.remove("desktop-st:hidden");
            modal.current.classList.add("desktop-st:block");
            setTimeout(transitionIn, 25);
        } else {
            backdrop.current.classList.remove("bg-opacity-30");
            backdrop.current.classList.remove("backdrop-opacity-100");
            backdrop.current.classList.add("backdrop-opacity-0");
            backdrop.current.classList.add("bg-opacity-0");

            modal.current.classList.remove("opacity-100");
            modal.current.classList.add("opacity-0");
            setTimeout(transitionOut, 500);
        }
    }, [active]);

    return reactDom.createPortal(
        <div className="hidden absolute desktop-st:hidden w-full h-full" ref={container}>
            <BlurBackDrop backdrop={backdrop} close={close} zIndex="40" />
            <div className="bg-white fixed z-50 hidden desktop-st:hidden opacity-0 transition-all duration-500" ref={modal}>
                <div className="desktop-skill-item-content">
                    <h2>{title} Skills.</h2>
                </div>
                <div></div>
            </div>
        </div>,
        document.getElementById("modal"),
    );
};

export default DesktopFullSkillModalItem;

/*
 * Created on Wed Jul 07 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */
