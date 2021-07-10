import {useEffect, useRef} from 'react'
const ContactContent = () => {
    const container = useRef()
    useEffect(() => {
        const options = {
            rootMargin: "0px 0px -70px 0px",
        };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(x => {
                if (x.isIntersecting){
                    x.target.classList.remove('-translate-x-full')
                    x.target.classList.remove('opacity-0')
                    x.target.classList.add("translate-x-0")
                    x.target.classList.add('opacity-100')
                }
                else{
                    x.target.classList.remove('translate-x-0')
                    x.target.classList.remove('opacity-100')
                    x.target.classList.add('-translate-x-full')
                    x.target.classList.add('opacity-0')
                }
            })
        }, options)

        Array.from(container.current.children).forEach(x => {
            observer.observe(x)
        })
    }, [])
    return (
        <div className="w-full space-y-4 desktop-st:space-y-8 desktop-st:pt-6 desktop-st:w-1/2 desktop-st:text-left" ref={container}>
            <div className="flex flex-nowrap space-x-2 items-center -translate-x-full opacity-0 transition-all duration-500 ease-in-out">
                <i className="fal fa-phone-alt text-4xl text-sec w-16" />
                <div>
                    <h3 className="text-main mb-1">Call Me</h3>
                    <span className="text-gray-500 font-semibold">9221018330</span>
                </div>
            </div>
            <div className="flex flex-nowrap space-x-2 items-center -translate-x-full opacity-0 transition-all duration-500 ease-in-out">
                <i className="fal fa-envelope text-4xl text-sec w-16" />
                <div>
                    <h3 className="text-main mb-1">Email</h3>
                    <span className="text-gray-500 font-semibold">saiyedafzalgz@gmail.com</span>
                </div>
            </div>
            <div className="flex flex-nowrap space-x-2 items-center -translate-x-full opacity-0 transition-all duration-500 ease-in-out">
                <i className="fal fa-map-marker-alt text-4xl text-sec w-16"></i>
                <div>
                    <h3 className="text-main mb-1">Location</h3>
                    <span className="text-gray-500 font-semibold">Mumbai/Maharashtra</span>
                </div>
            </div>
        </div>
    );
};

export default ContactContent;
