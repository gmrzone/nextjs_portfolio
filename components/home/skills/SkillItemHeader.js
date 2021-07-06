const SkillsItemHeader = ({ icon, title, meta, activeAccordian, id }) => {
    return (
            <div className="flex justify-between bg-white px-6 py-2 rounded-md overflow-hidden cursor-pointer shadow-lg">
                <div className="flex flex-col justify-center">
                    <i className={`${icon} text-3xl text-main`} />
                </div>
                <div>
                    <h3 className="text-main">{title}</h3>
                    <span className="text-gray-600">{meta}&nbsp;</span>
                </div>
                <div className="flex flex-col justify-center">
                    <i className={`fas fa-caret-down text-xl text-main transition-transform duration-300 delay-100 desktop-st:hidden desktop-st:transition-none desktop-st:rotate-0 ${activeAccordian === id ? "rotate-180" : "rotate-0"}`} />
                </div>
            </div>
        )
}

export default SkillsItemHeader