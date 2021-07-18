import { NextPage } from "next";

interface Item {
    item: {
        name: string;
        to: string;
    };
}
const NavbarItem: NextPage<Item> = ({ item }) => {
    return (
        <li className="text-lg p-4 font-semibold cursor-pointer desktop-st:p-1">
            <a className="text-main hover:text-sec dark:text-bg-sec-inverted dark:hover:text-bg-sec-dark" href={item.to}>{item.name}</a>
        </li>
    );
};
export default NavbarItem;
