import Navbar from '../shared/header/Navbar'
const MainLayout = ({ children }) => {
    return (
        <div className="main-body h-full">
            <header id="header">
                <Navbar />
            </header>
            <main id="main">
                {children}
            </main>
            <footer id="footer">

            </footer>
        </div>
    )
}

export default MainLayout