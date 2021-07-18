import { NextPage } from "next";
import { LegacyRef } from "react";
interface IProps {
    mainRef: LegacyRef<SVGPathElement>;
    centerRef: LegacyRef<SVGPathElement>;
    themeMainG: LegacyRef<SVGGeometryElement>;
    darkThemeActive: boolean;
}
const ThemeIcon: NextPage<IProps> = ({ mainRef, centerRef, themeMainG, darkThemeActive }) => {
    return (
        <div className="w-6 mx-auto">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                preserveAspectRatio="xMidYMid meet"
                className="w-full h-full transform-gpu">
                <defs>
                    <clipPath id="__lottie_element_448">
                        <rect width="24" height="24" x="0" y="0"></rect>
                    </clipPath>
                </defs>
                <g clipPath="url(#__lottie_element_448)">
                    <g transform="matrix(1,0,0,1,12,12)" opacity="1" className="block">
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                            <path
                                className="text-bg-sec-inverted dark:text-bg-sec transform-gpu transition-transform duration-300 ease-out fill-current opacity-100"
                                ref={centerRef}
                                d=" M0,-4 C-2.2100000381469727,-4 -4,-2.2100000381469727 -4,0 C-4,2.2100000381469727 -2.2100000381469727,4 0,4 C2.2100000381469727,4 4,2.2100000381469727 4,0 C4,-2.2100000381469727 2.2100000381469727,-4 0,-4z"></path>
                        </g>
                    </g>
                    <g transform="matrix(-1,0,0,-1,12,12)" opacity="1" className="block" ref={themeMainG}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                            <path
                                className="text-bg-sec-inverted dark:text-bg-sec fill-current opacity-100 transform-gpu transition-transform duration-500 ease-out rotate-0"
                                d=" M0,6 C-3.309999942779541,6 -6,3.309999942779541 -6,0 C-6,-3.309999942779541 -3.309999942779541,-6 0,-6 C3.309999942779541,-6 6,-3.309999942779541 6,0 C6,3.309999942779541 3.309999942779541,6 0,6z M8,-3.309999942779541 C8,-3.309999942779541 8,-8 8,-8 C8,-8 3.309999942779541,-8 3.309999942779541,-8 C3.309999942779541,-8 0,-11.3100004196167 0,-11.3100004196167 C0,-11.3100004196167 -3.309999942779541,-8 -3.309999942779541,-8 C-3.309999942779541,-8 -8,-8 -8,-8 C-8,-8 -8,-3.309999942779541 -8,-3.309999942779541 C-8,-3.309999942779541 -11.3100004196167,0 -11.3100004196167,0 C-11.3100004196167,0 -8,3.309999942779541 -8,3.309999942779541 C-8,3.309999942779541 -8,8 -8,8 C-8,8 -3.309999942779541,8 -3.309999942779541,8 C-3.309999942779541,8 0,11.3100004196167 0,11.3100004196167 C0,11.3100004196167 3.309999942779541,8 3.309999942779541,8 C3.309999942779541,8 8,8 8,8 C8,8 8,3.309999942779541 8,3.309999942779541 C8,3.309999942779541 11.3100004196167,0 11.3100004196167,0 C11.3100004196167,0 8,-3.309999942779541 8,-3.309999942779541z"
                                ref={mainRef}></path>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default ThemeIcon;

// center first g matrix(1,0,0,1,12,12) sun
// center firts g matrix(1.5,0,0,1.5,7,12) moon

// path D sun " M0,-4 C-2.2100000381469727,-4 -4,-2.2100000381469727 -4,0 C-4,2.2100000381469727 -2.2100000381469727,4 0,4 C2.2100000381469727,4 4,2.2100000381469727 4,0 C4,-2.2100000381469727 2.2100000381469727,-4 0,-4z"
// path D moon " M0,-4 C-2.2100000381469727,-4 -1.2920000553131104,-2.2100000381469727 -1.2920000553131104,0 C-1.2920000553131104,2.2100000381469727 -2.2100000381469727,4 0,4 C2.2100000381469727,4 4,2.2100000381469727 4,0 C4,-2.2100000381469727 2.2100000381469727,-4 0,-4z"

// main first g matrix(1,0,0,1,12,12) sun
// main first f matrix(-1,0,0,-1,12,12) moon
