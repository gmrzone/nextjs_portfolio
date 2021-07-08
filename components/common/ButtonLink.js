const ButtonLink = ({ text, action, ...attr }) => {
    return (
        <a
            {...attr}
            className={`px-4 inline-block py-3 self-center rounded-md flex-nowrap transition-colors duration-300 text-white text-lg font-semibold ${
                action ? "bg-action hover:bg-action-hover" : "bg-sec hover:bg-blue-700"
            } hover:text-white sm:self-start`}>
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
