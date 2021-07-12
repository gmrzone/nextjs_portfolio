const ButtonLink = ({ loading = false, text, action, icon=null, ...attr }) => {
    return (
        <button
            {...attr}
            className={`px-4 inline-block py-3 self-center rounded-md flex-nowrap transition-colors duration-300 text-white text-lg font-semibold ${
                action ? "bg-action hover:bg-action-hover" : "bg-sec hover:bg-blue-700"
            } hover:text-white sm:self-start ${icon && "space-x-2"}`}>
            {loading ? <i className="fas fa-circle-notch animate-spin-fast" /> : <i className={icon} />}
            <span className={`${loading && "ml-2.5"}`}>{text}</span>
        </button>
    );
};
/*
 * Created on Tue Jul 06 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */

export default ButtonLink;
