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
        <nav className="flex justify-between items-center p-2 mx-5">
            <NavbarLogo />
            <ul className="flex space-x-10">
                {renderNavItems}
            </ul>
        </nav>
    )
}   

export default Navbar