const NavbarItem = ({ item }) => {
    return (
        <li className="text-lg p-4 font-semibold hover:text-sec cursor-pointer transition-colors duration-100 desktop-st:p-1">
            {item.name}
        </li>
    );
};
export default NavbarItem;
