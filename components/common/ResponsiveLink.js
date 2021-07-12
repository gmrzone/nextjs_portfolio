const ResponsiveLink = ({ title }) => {
    return (
        <div className="inline-block bg-sec font-semibold p-2 shadow-md rounded-md transition-colors duration-200 text-white hover:bg-bg-sec desktop-st:p-3 hover:text-main">
            {title}
        </div>
    )
}

export default ResponsiveLink