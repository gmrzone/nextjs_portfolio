const ButtonLink = ({loading=false, text, ...attr}) => {
    return (
        <a {...attr} className="px-4 py-3 self-center bg-main rounded-md flex-nowrap transition-colors duration-300 text-white text-lg font-semibold hover:bg-green-900 hover:text-white sm:self-start">
            {loading && <i className="fas fa-circle-notch animate-spin-fast" />}
            <span className={`${loading && "ml-2.5"}`}>{text}</span>
        </a>
    )   
}

export default ButtonLink