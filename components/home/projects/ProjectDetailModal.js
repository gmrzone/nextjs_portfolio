import BlurBackDrop from "../../shared/header/BlurBackDrop";
import { useRef, useEffect } from "react";
import reactDom from "react-dom";
import ButtonLink from "../../common/ButtonLink";
import Image from "next/image";
const ProjectDetailModal = ({ active, closeModal, activeItem }) => {
    const backdrop = useRef();
    const container = useRef();
    const modalRight = useRef();
    const modalLeft = useRef();
    const transitionOutModal = () => {
        backdrop.current.classList.remove("block");
        backdrop.current.classList.remove("desktop-st:block");
        backdrop.current.classList.add("hidden");
        backdrop.current.classList.add("desktop-st:hidden");

        container.current.classList.remove("flex");
        container.current.classList.add("hidden");

        modalRight.current.classList.remove("block");
        modalLeft.current.classList.remove("block");
        modalRight.current.classList.add("hidden");
        modalLeft.current.classList.add("hidden");
    };
    const transitionInModal = () => {
        backdrop.current.classList.remove("bg-opacity-0");
        backdrop.current.classList.remove("backdrop-opacity-0");
        backdrop.current.classList.add("bg-opacity-60");
        backdrop.current.classList.add("backdrop-opacity-100");

        modalLeft.current.classList.remove("opacity-0");
        modalRight.current.classList.remove("opacity-0");
        modalLeft.current.classList.add("opacity-100");
        modalRight.current.classList.add("opacity-100");

        if (typeof window !== undefined) {
            if (window.innerWidth > 991) {
                modalLeft.current.classList.remove("desktop-st:-translate-y-full");
                modalRight.current.classList.remove("desktop-st:translate-y-full");
                modalLeft.current.classList.add("desktop-st:translate-y-0");
                modalRight.current.classList.add("desktop-st:translate-y-0");
            } else {
                modalLeft.current.classList.remove("-translate-x-full");
                modalRight.current.classList.remove("translate-x-full");
                modalLeft.current.classList.add("translate-x-0");
                modalRight.current.classList.add("translate-x-0");
            }
        }
    };
    useEffect(() => {
        if (active) {
            backdrop.current.classList.remove("hidden");
            backdrop.current.classList.remove("desktop-st:hidden");
            backdrop.current.classList.add("block");
            backdrop.current.classList.add("desktop-st:block");

            container.current.classList.remove("hidden");
            container.current.classList.add("flex");

            modalRight.current.classList.remove("hidden");
            modalLeft.current.classList.remove("hidden");
            modalRight.current.classList.add("block");
            modalLeft.current.classList.add("block");

            setTimeout(transitionInModal, 50);
        } else {
            backdrop.current.classList.remove("bg-opacity-60");
            backdrop.current.classList.remove("backdrop-opacity-100");
            backdrop.current.classList.add("bg-opacity-0");
            backdrop.current.classList.add("backdrop-opacity-0");

            modalLeft.current.classList.remove("opacity-100");
            modalRight.current.classList.remove("opacity-100");
            modalLeft.current.classList.add("opacity-0");
            modalRight.current.classList.add("opacity-0");

            if (typeof window !== undefined) {
                if (window.innerWidth > 991) {
                    modalLeft.current.classList.remove("desktop-st:translate-y-0");
                    modalRight.current.classList.remove("desktop-st:translate-y-0");
                    modalLeft.current.classList.add("desktop-st:-translate-y-full");
                    modalRight.current.classList.add("desktop-st:translate-y-full");
                } else {
                    modalLeft.current.classList.remove("translate-x-0");
                    modalRight.current.classList.remove("translate-x-0");
                    modalLeft.current.classList.add("-translate-x-full");
                    modalRight.current.classList.add("translate-x-full");
                }
            }

            setTimeout(transitionOutModal, 500);
        }
    }, [active]);

    const renderPoints = activeItem?.points.map((x, i) => {
        return <li key={i}>{x}</li>;
    });

    return reactDom.createPortal(
        <div className="fixed w-full h-full z-50 justify-center items-center hidden overflow-y-auto" ref={container}>
            <BlurBackDrop backdrop={backdrop} zIndex={{ zIndex: "40" }} close={closeModal} />
            <div
                className="absolute z-50 w-full max-w-6xl h-auto grid grid-cols-1 px-4 desktop-st:px-0 desktop-st:grid-cols-2"
                style={{ maxHeight: "95%" }}>
                <div
                    className="bg-main dark:bg-sec-dark hidden opacity-0 transition-all duration-500 -translate-x-full desktop-st:translate-x-0 desktop-st:-translate-y-full"
                    ref={modalLeft}>
                    <i
                        className="far fa-times text-2xl cursor-pointer text-white transition-colors duration-300 px-6 py-3"
                        onClick={closeModal}
                    />
                    <div className="flex justify-center">
                        <div className="p-4">
                            {activeItem && (
                                <Image
                                    src={activeItem?.secondary_image}
                                    alt={activeItem?.name + " secondary"}
                                    layout="intrinsic"
                                    width={688}
                                    height={363}
                                    placeholder="blur"
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div
                    className="bg-bg-sec dark:bg-bg-sec-inverted hidden p-8 opacity-0 text-main transition-all duration-500 translate-x-full desktop-st:translate-x-0 desktop-st:translate-y-full"
                    ref={modalRight}>
                    <div className="space-y-2">
                        <h3 className="text-main dark:text-main-dark">{activeItem?.name}</h3>
                        <p className="text-sm desktop-st:text-lg text-main dark:text-main-dark  ">{activeItem?.about}</p>
                    </div>
                    <ul className="list-disc p-6 text-sm desktop-st:text-lg">{renderPoints}</ul>
                    <div className="space-x-1 text-center desktop-st:text-left">
                        {activeItem?.link && (
                            <ButtonLink
                                text="Live Link"
                                icon="far fa-link text-xl"
                                action={true}
                                href={activeItem?.link}
                                target="_blank"
                                rel="noreferrer"
                            />
                        )}
                        <ButtonLink
                            text="Github"
                            icon="fab fa-github text-xl"
                            cssClasses="bg-gray-900 dark:bg-gray-900 hover:bg-gray-700 dark:hover:bg-gray-700 dark:text-white"
                            href={activeItem?.github}
                            target="_blank"
                            rel="noreferrer"
                        />
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById("modal"),
    );
};

export default ProjectDetailModal;

/*
 * Created on Tue Jul 13 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */
