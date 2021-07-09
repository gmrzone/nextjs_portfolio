const SectionHeader = ({ title, meta, inverted=false }) => {
    return (
        <div className="mb-10 desktop-st:mb-16">
            <h2 className={`text-center ${inverted ? "text-white" : "text-main"}`}>{title}</h2>
            <span className={`text-center block font-semibold ${inverted ? "text-gray-400" : "text-gray-500"}`}>{meta}</span>
        </div>
    )
}

export default SectionHeader