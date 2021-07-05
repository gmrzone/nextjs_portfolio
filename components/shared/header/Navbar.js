import NavBarItem from './NavbarItem';
import NavbarLogo from './NavbarLogo';
const Navbar = () => {
    const navData = [
        {
            name: "Home",
            to: "#home"
        },
        {
            name: "Skills",
            to: "#Skills"
        },
        {
            name: "Projects",
            to: "#Projects"
        },
        {
            name: "About",
            to: "#About"
        },
        {
            name: "Contact",
            to: "#Contact"
        }
    ]
    const renderNavItems = navData.map((x, i) => {
        return <NavBarItem item={x} key={i}/>
    })
    return (
        <nav className="container flex justify-between items-center p-2 mx-5">
            <NavbarLogo />
            <ul className="flex absolute right-0 top-0 h-screen w-full max-w-full flex-col bg-white text-black shadow-mobile-nav sm:max-w-sm desktop-st:static desktop-st:w-auto desktop-st:bg-transparent desktop-st:text-black desktop-st:max-w-auto desktop-st:h-auto desktop-st:shadow-none">
                <div className="flex flex-row align-middle justify-items-start py-4 px-4 text-gray-800 border-b border-gray-200 sm:px-6 desktop-st:hidden">
                    <i className="far fa-times text-2xl cursor-pointer" />
                    <div className="text-xl font-semibold w-full text-center leading-8">Close</div>
                </div>
                <div className="flex flex-col desktop-st:flex-row text-center mt-10 mb-auto desktop-st:space-x-10 desktop-st:mt-0">   
                    {renderNavItems}
                </div>
            </ul>
        </nav>
    )
}   

export default Navbar