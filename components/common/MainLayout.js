import Head from './Head'
const MainLayout = ({ children }) => {
    return (
        <div className="main-body h-full">
            <Head />
            <header id="header">

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