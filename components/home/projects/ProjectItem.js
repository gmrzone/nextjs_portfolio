import Image from 'next/image';
import { useEffect, useRef } from 'react';

const ProjectItem = ({ item }) => {
    const projectRef = useRef()
    const projectText = useRef()

    useEffect(() => {
        const options = {
            rootMargin: "0px 0px -150px 0px",
        }
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(x => {
                if (x.isIntersecting){
                    x.target.classList.remove("after:translate-x-0")
                    x.target.classList.add("after:translate-x-full")
                    observer.unobserve(x.target)
                }
            })
        }, options)
        observer.observe(projectRef.current)
        observer.observe(projectText.current)
    }, [])

    return (
        <div className="group rounded-lg overflow-hidden shadow-md cursor-pointer relative after:block after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-10 after:bg-gradient-to-r after:from-main after:to-sec after:translate-x-0 after:transition-transform after:duration-500 after:opacity-95" ref={projectRef}>
            <div className="">
                <Image alt="project_image" src={item.main_image} layout="intrinsic" width={600} height={296} />
            </div>
            <div className="text-center bg-white p-2 desktop-st:group-hover:before:translate-x-0 desktop-st:relative before:hidden desktop-st:before:block before:absolute before:w-full before:h-full before:bg-sec before:top-0 before:left-0 before:-translate-x-full before:transition-transform before:duration-300">
                <p className="text-main desktop-st:group-hover:text-white transition-colors duration-300 inline-block font-semibold overflow-hidden text-lg relative after:absolute after:top-0 after:h-full after:w-full after:bg-sec after:left-0 after:translate-x-0 after:transition-transform after:duration-500" ref={projectText}>{item.name}</p>
            </div>
        </div>
    )
}

export default ProjectItem