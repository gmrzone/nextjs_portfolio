import { NextPage } from "next";
const NavbarLogo: NextPage = () => {
    return (
        <div className="w-14">
            {/* style={{ enableBackground: "new 0 0 567 500" }} */}
            <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 567 500"
                xmlSpace="preserve">
                <g id="XMLID_3_">
                    <path
                        id="XMLID_4_"
                        className="st0 fill-current text-main dark:text-sec-dark sm:dark:text-bg-sec-inverted"
                        d="M51.7,387L12.4,495H132l34.2-108H51.7z M321.7,4.9H190.8L84.5,297h107l52-161.9
                        c4.6-14.1,7.4-28.4,8.6-42.7h2.7c1.6,17.1,4.3,31.8,8.2,44.1L314.3,297h111.4L321.7,4.9z M457.7,387H341.2l34.5,108h120.3
                        L457.7,387z"
                    />
                </g>
                {/* <path id="XMLID_23_" className="st1" d="M81,306c150,0,301,0,451.3,0"/> */}
                <polygon
                    id="XMLID_31_"
                    className="st4 fill-current text-sec dark:text-main-dark sm:dark:text-bg-sec-dark"
                    points="558,378 54.1,378 79.5,306 530.2,306 "
                />
            </svg>
        </div>
    );
};

export default NavbarLogo;
