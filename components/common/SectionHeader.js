const SectionHeader = ({ title, meta }) => {
    return (
        <div className="mb-10 desktop-st:mb-16">
            <h2 className="text-main text-center">{title}</h2>
            <span className="text-center block text-gray-500 font-semibold">{meta}</span>
        </div>
    )
}

export default SectionHeader