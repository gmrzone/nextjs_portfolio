const ButtonLink = ({loading=false, text, ...attr}) => {
    return (
        <a {...attr} className="px-4 py-3 self-center bg-white rounded-md flex-nowrap transition-colors duration-300 text-black text-lg font-semibold hover:bg-sec hover:text-white sm:self-start">
            {loading && <i className="fas fa-circle-notch animate-spin-fast" />}
            <span className={`${loading && "ml-2.5"}`}>{text}</span>
        </a>
    )   
}

export default ButtonLink