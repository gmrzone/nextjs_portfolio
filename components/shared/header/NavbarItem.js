const NavbarItem = ({ item }) => {
    return (
        <li className="text-lg p-4 font-semibold text-main hover:text-sec dark:text-bg-sec-inverted dark:hover:text-bg-sec-dark cursor-pointer transition-colors duration-300 desktop-st:p-1">
            {item.name}
        </li>
    );
};
export default NavbarItem;
