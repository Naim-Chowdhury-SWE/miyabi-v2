import { MenuItem } from "../../types";
import ScrollLink from "../ScrollLink/ScrollLink";

type NavbarMenuProps = {
  menuList: MenuItem[];
};

const NavbarMenu: React.FC<NavbarMenuProps> = ({ menuList }) => {
  const menuItems = menuList.map((menuItem) => (
    <li
      key={menuItem.id}
      className="bg-gradient-to-b from-red-950 via-red-800 via-70% to-red-950 to-95% shadow-inner shadow-black hover:bg-red-600 hover:text-white hover:font-thin duration-300 hover:scale-105 cursor-pointer min-w-max rounded-full px-4 py-1"
    >
      <ScrollLink targetId={menuItem.id} offset="10">
        <a>{menuItem.heading}</a>
      </ScrollLink>
    </li>
  ));
  return (
    <nav className="flex justify-start md:justify-center overflow-x-auto no-scrollbar p-4 sticky top-12 lg:top-20 z-30">
      <ul className="flex flex-row justify-center bg-gradient-to-b from-red-900 via-red-900 via-50% to-red-950 to-95% gap-2 py-2 px-4 text-lg font-chowfun font-semibold tracking-wide rounded-full shadow-inner shadow-black">
        {menuItems}
      </ul>
    </nav>
  );
};

export default NavbarMenu;
