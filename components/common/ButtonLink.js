const ButtonLink = ({ text, action, icon = null, forceBig, cssClasses = null, ...attr }) => {
    return (
        <a
            {...attr}
            className={`${
                forceBig ? "px-4 py-3 text-lg" : "px-2 py-2 text-md"
            } inline-block self-center rounded-md flex-nowrap transition-colors duration-300 text-white font-semibold cursor-pointer desktop-st:text-lg desktop-st:px-4 desktop-st:py-3 ${
                icon && "space-x-2"
            } ${action ? "bg-action hover:bg-action-hover" : "bg-sec hover:bg-blue-700"} hover:text-white sm:self-start ${
                cssClasses && cssClasses
            }`}>
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
