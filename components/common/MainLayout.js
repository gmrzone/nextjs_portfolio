import Navbar from "../shared/header/Navbar";
import Footer from "../shared/footer/Footer";
const MainLayout = ({ children }) => {
    return (
        <div className="main-body h-full flex flex-col">
            <header id="header" className="bg-nav transition-colors duration-300 dark:bg-nav-dark">
                <Navbar />
            </header>
            <main id="main" className="bg-bg-sec dark:bg-bg-sec-dark transition-colors duration-300">
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
