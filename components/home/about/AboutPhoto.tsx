import photo from "../../../public/profile.jpg";
import Image from "next/image";
import { NextPage } from "next";
const AboutPhoto: NextPage = () => {
    return (
        <div
            className="w-full mr-0 mb-6 desktop-st:mr-8 desktop-st:mb-0 desktop-st:w-1/3 transform-gpu -translate-x-full opacity-0 transition-all duration-500 main-container"
            data-name="photo">
            {/* offset accent frame behind the photo — the plain square read as an
                unstyled placeholder next to the rest of the page */}
            <div className="relative inline-block">
                <span
                    className="pointer-events-none absolute -bottom-3 -left-3 h-full w-full rounded-md border-2 border-sec dark:border-blue-600"
                    aria-hidden="true"
                />
                <div className="relative rounded-md overflow-hidden shadow-lg">
                    <Image alt="profile_pic" src={photo} placeholder="blur" width={380} height={380} className="rounded-md" />
                </div>
            </div>
            <style jsx>{`
                .main-container {
                    backface-visibility: hidden;
                    perspective: 1000;
                    will-change: transform;
                }
            `}</style>
        </div>
    );
};

export default AboutPhoto;

/*
 * Created on Wed Jul 07 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */
