const BlurBackDrop = ({ backdrop, close }) => {
    return (
    <div className="fixed top-0 right-0 w-screen h-screen bg-gray-600 backdrop-filter backdrop-blur-md bg-opacity-0 backdrop-opacity-0 hidden desktop-st:hidden transition-all duration-500 z-50"
        ref={backdrop} onClick={close}>
    </div>
    )
}

export default BlurBackDrop