const NavbarItem = ({item}) => {
    return (
        <li className="text-lg font-semibold hover:text-blue-600 cursor-pointer transition-colors duration-100">{item.name}</li>
    )
}
export default NavbarItem