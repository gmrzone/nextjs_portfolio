import { NextPage } from "next";
interface ButtonProps {
    text: string;
    action?: boolean;
    icon: null | string;
    forceBig?: boolean;
    cssClasses?: string;
    href: string;
    download: boolean
}
const ButtonLink: NextPage<ButtonProps> = ({ text, action, icon = null, forceBig, cssClasses = null, ...attr }) => {
    return (
        <a
            {...attr}
            className={`${
                forceBig ? "px-4 py-3 text-lg" : "px-2 py-2 text-md"
            } inline-block self-center rounded-md flex-nowrap transition-colors duration-300 text-bg-sec dark:text-main font-semibold cursor-pointer desktop-st:text-lg desktop-st:px-4 desktop-st:py-3 ${
                icon && "space-x-2"
            } ${
                action
                    ? "bg-action hover:bg-action-hover dark:bg-blue-600 dark:text-bg-sec-inverted dark:hover:bg-blue-900"
                    : "bg-sec dark:bg-bg-sec-dark dark:hover:bg-bg-sec-inverted hover:bg-blue-700"
            } hover:text-white sm:self-start ${cssClasses && cssClasses}`}>
            {icon && <i className={icon} />}
            <span className="">{text}</span>
        </a>
    );
};
/*
 * Created on Tue Jul 06 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */

export default ButtonLink;
