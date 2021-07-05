import HeroImage from "./HeroImageMain";
import ButtonLink from '../common/ButtonLink'
const MainHero = () => {
    return (
        <div className="w-full bg-sec h-hero sm:h-hero-sm md:h-hero-mid lg:h-hero-large 2xl:h-hero-xl relative">
            <div className="container h-full flex flex-col justify-center sm:flex-row">
                <div className="w-full order-2 flex flex-col justify-center text-center sm:w-3/5 sm:order-1 sm:text-left space-y-4">
                    <h1 className="text-white">AFzal Saiyed</h1>
                    <span className="text-gray-200 text-2xl font-semibold m-0">FullStack Developer</span>
                    <ButtonLink text="Resume" href="#" loading={false} download/>
                </div>
                <div className="w-9/12 order-1 flex flex-col justify-center mr-auto ml-auto mb-10 opacity-20 sm:w-2/5 sm:order-2 sm:mb-0">
                    <HeroImage />
                </div>
                {/* <div className="absolute w-11/12 max-w-2xl bottom-0 ml-auto mr-auto left-0 right-0">
                    <HeroImage />
                </div> */}
            </div>
        </div>
    )
}

export default MainHero