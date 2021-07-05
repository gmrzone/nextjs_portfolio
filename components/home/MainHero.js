import HeroImage from "./HeroImage"
const MainHero = () => {
    return (
        <div className="w-full bg-main h-hero sm:h-hero-sm md:h-hero-mid lg:h-hero-large 2xl:h-hero-xl relative">
            <div className="container">
                <div className="">
                    <h1 className="text-white">AFzal Saiyed</h1>
                    <span className="text-gray-300 text-xl">FullStack Developer</span>
                </div>
                {/* <div className="absolute w-11/12 max-w-2xl bottom-0 ml-auto mr-auto left-0 right-0">
                    <HeroImage />
                </div> */}
            </div>
        </div>
    )
}

export default MainHero