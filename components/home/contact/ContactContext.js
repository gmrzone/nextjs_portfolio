const ContactContent = () => {
    return (
        <div className="w-full space-y-8 desktop-st:pt-6 desktop-st:w-1/2 desktop-st:text-left">
            <div>
                <div className="flex flex-nowrap space-x-6 items-center">
                    <i className="fal fa-phone-alt text-4xl text-sec" />
                    <div>
                        <h3 className="text-main mb-1">Call ME.</h3>
                        <span className="text-gray-500 font-semibold">9221018330</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-nowrap space-x-6 items-center">
                <i className="fal fa-envelope text-4xl text-sec" />
                <div>
                    <h3 className="text-main mb-1">Email.</h3>
                    <span className="text-gray-500 font-semibold">saiyedafzalgz@gmail.com</span>
                </div>
            </div>
            <div className="flex flex-nowrap space-x-6 items-center">
                <i className="fal fa-map-marker-alt text-4xl text-sec"></i>
                <div>
                    <h3 className="text-main mb-1">Location</h3>
                    <span className="text-gray-500 font-semibold">Mumbai/Maharashtra</span>
                </div>
            </div>
        </div>
    )

}

export default ContactContent