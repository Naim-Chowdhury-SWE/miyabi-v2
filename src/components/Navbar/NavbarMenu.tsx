import { MenuItem } from "../../types";
import ScrollLink from "../ScrollLink/ScrollLink";

type NavbarMenuProps = {
  menuList: MenuItem[];
};

const NavbarMenu: React.FC<NavbarMenuProps> = ({ menuList }) => {
  const menuItems = menuList.map((menuItem) => (
    <li
      key={menuItem.id}
      className="from-red-950 via-red-800 via-70% to-red-950 to-95% bg-gradient-to-b shadow-inner shadow-black hover:bg-red-600 hover:text-white duration-300 hover:scale-105 cursor-pointer rounded-full px-4 py-1"
    >
      <ScrollLink targetId={menuItem.id} offset="8">
        <a>{menuItem.name}</a>
      </ScrollLink>
    </li>
  ));

  return (
    <nav className="flex justify-center p-4 sticky top-12 lg:top-20">
      <ul className="flex flex-row px-4 py-2 gap-4 text-lg font-chowfun font-semibold tracking-wide from-red-900 via-red-900 via-50% to-red-950 to-95% bg-gradient-to-b rounded-full shadow-inner shadow-black">
        {menuItems}
      </ul>
    </nav>
  );
};

export default NavbarMenu;
