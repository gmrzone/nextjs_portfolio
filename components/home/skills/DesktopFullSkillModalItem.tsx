import BlurBackDrop from "../../shared/header/BlurBackDrop";
import { useRef, useEffect } from "react";
import reactDom from "react-dom";
import SkillItems from "./SkillItems";
import { NextPage } from "next";
import { ISkillsDataStats } from "../data";

interface IPROPS {
    active: boolean;
    close: () => void;
    title: string;
    data: ISkillsDataStats[];
    id: number;
}
const DesktopFullSkillModalItem: NextPage<IPROPS> = ({ active, close, title, data, id }) => {
    const backdrop = useRef<HTMLDivElement | null>(null);
    const container = useRef<HTMLDivElement | null>(null);
    const modal = useRef<HTMLDivElement | null>(null);
    const transitionIn = () => {
        if (backdrop.current && modal.current) {
            backdrop.current.classList.remove("backdrop-opacity-0");
            backdrop.current.classList.remove("bg-opacity-0");
            backdrop.current.classList.add("bg-opacity-60");
            backdrop.current.classList.add("backdrop-opacity-100");

            modal.current.classList.remove("opacity-0");
            modal.current.classList.add("opacity-100");

            modal.current.children[0].classList.remove("-translate-y-full");
            modal.current.children[0].classList.add("translate-y-0");
            modal.current.children[1].classList.remove("translate-y-full");
            modal.current.children[1].classList.add("translate-y-0");
        }
    };
    const transitionOut = () => {
        if (backdrop.current && container.current && modal.current) {
            backdrop.current.classList.add("desktop-st:hidden");

            container.current.classList.remove("desktop-st:flex");
            container.current.classList.add("desktop-st:hidden");

            modal.current.classList.add("desktop-st:hidden");
        }
    };
    useEffect(() => {
        if (active) {
            if (backdrop.current && container.current && modal.current) {
                backdrop.current.classList.remove("desktop-st:hidden");
                backdrop.current.classList.add("desktop-st:block");

                container.current.classList.remove("desktop-st:hidden");
                container.current.classList.add("desktop-st:flex");

                modal.current.classList.remove("desktop-st:hidden");
                modal.current.classList.add("desktop-st:flex");
            }
            setTimeout(transitionIn, 25);
        } else {
            if (backdrop.current && modal.current) {
                backdrop.current.classList.remove("bg-opacity-60");
                backdrop.current.classList.remove("backdrop-opacity-100");
                backdrop.current.classList.add("backdrop-opacity-0");
                backdrop.current.classList.add("bg-opacity-0");

                modal.current.classList.remove("opacity-100");
                modal.current.classList.add("opacity-0");

                modal.current.children[0].classList.remove("translate-y-0");
                modal.current.children[0].classList.add("-translate-y-full");
                modal.current.children[1].classList.remove("translate-y-0");
                modal.current.children[1].classList.add("translate-y-full");
            }
            setTimeout(transitionOut, 500);
        }
    }, [active]);

    return reactDom.createPortal(
        <div className="hidden fixed desktop-st:hidden w-screen h-screen z-40 justify-center items-center" ref={container}>
            <BlurBackDrop backdrop={backdrop} close={close} zIndex={{ zIndex: 40 }} />
            <div
                className="absolute z-50 hidden desktop-st:hidden modal-main w-auto rounded-sm opacity-0 transition-all duration-300"
                ref={modal}>
                <div className="w-full flex flex-col justify-center desktop-skill-item-content bg-main dark:bg-main-dark p-12 space-y-8 relative -translate-y-full transition-all duration-500">
                    <div className="absolute top-0 left-0">
                        <i
                            className="far fa-times text-2xl cursor-pointer text-white transition-colors duration-300 px-6 py-3"
                            onClick={close}
                        />
                    </div>
                    <h2 className="text-bg-sec dark:text-bg-sec-inverted">{title}</h2>
                    <hr></hr>
                    <h2 className="text-bg-sec dark:text-bg-sec-inverted text-right">Skills</h2>
                </div>
                <div className="w-full bg-white dark:bg-bg-sec-inverted max-w-md p-6 relative translate-y-full transition-all duration-500">
                    <SkillItems data={data} id={id} forceFull={true} />
                </div>
            </div>
            <style>{`
                .modal-main {
                    min-width: 840px;
                }

            `}</style>
        </div>,
        document.getElementById("modal") as HTMLDivElement,
    );
};
export default DesktopFullSkillModalItem;

/*
 * Created on Wed Jul 07 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */
