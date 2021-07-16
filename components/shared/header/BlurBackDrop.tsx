import { CSSProperties, MutableRefObject } from "react";
import { NextPage } from "next";

interface backdropProps {
    close: () => void;
    backdrop: MutableRefObject<HTMLDivElement | null>;
    zIndex: CSSProperties;
}
const BlurBackDrop: NextPage<backdropProps> = ({ backdrop, close, zIndex }) => {
    return (
        <div
            className="fixed top-0 right-0 w-screen h-screen bg-black backdrop-filter backdrop-blur-md bg-opacity-0 backdrop-opacity-0 hidden desktop-st:hidden transition-all duration-500 backdrop-firefox"
            ref={backdrop}
            onClick={close}
            style={zIndex}></div>
    );
};

export default BlurBackDrop;
