import photo from '../../../public/placeholder.png';
import Image from 'next/image'
const AboutPhoto = () => {
    return (
        <div className="w-full mr-0 mb-6 desktop-st:mr-8 desktop-st:mb-0 desktop-st:w-1/3 -translate-x-full opacity-0 transition-all duration-500" data-name="photo">   
            <div className="rounded-md overflow-hidden">
                <Image alt="profile_pic" src={photo} placeholder="blur" width={380} height={380} className="rounded-md"/>
            </div>
        </div>
    )
}

export default AboutPhoto