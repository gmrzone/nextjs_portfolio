import Image from 'next/image';


const ProjectItem = ({ item }) => {
    return (
        <div className="rounded-lg overflow-hidden shadow-md cursor-pointer relative after:block after:absolute after:top-0 after:w-full after:h-full after:z-10 after:bg-gradient-to-r after:from-main after:to-sec after:translate-x-0 after:transition-transform after:duration-500">
            <div className="">
                <Image alt="project_image" src={item.main_image} layout="intrinsic" width={600} height={296} />
            </div>
            <div className="text-center bg-sec p-2">
                <p className="text-white font-semibold text-lg">{item.name}</p>
            </div>
        </div>
    )
}

export default ProjectItem