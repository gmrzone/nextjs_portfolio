import Navbar from "../shared/header/Navbar";
import Footer from "../shared/footer/Footer";
import { useRef } from "react";
const MainLayout = ({ children }) => {
    const main = useRef();
    return (
        <div className="main-body h-full flex flex-col" ref={main}>
            <header id="header" className="bg-transparent transition-colors duration-300 dark:bg-black">
                <Navbar main={main} />
            </header>
            <main id="main" className="mb-10">
                {children}
            </main>
            <footer id="footer" className="bg-main transition-colors duration-300 dark:bg-black mt-auto w-full text-center">
                <Footer />
            </footer>
        </div>
    );
};

export default MainLayout;

/*
 * Created on Wed Jul 07 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */
