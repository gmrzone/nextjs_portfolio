const ResponsiveLink = ({ title, action, icon }) => {
    return (
        <div
            className={`inline-block bg-sec dark:bg-bg-sec-inverted font-semibold p-2 shadow-md rounded-md transition-colors duration-200 text-white dark:text-main-dark hover:bg-bg-sec dark:hover:bg-bg-sec-dark desktop-st:p-3 hover:text-main ${
                icon && "space-x-2"
            }`}
            onClick={action}>
            {icon && <i className={icon} />}
            <span>{title}</span>
        </div>
    );
};

export default ResponsiveLink;
