/* import { MenuItem } from "../../types";
import ScrollLink from "../ScrollLink/ScrollLink";

type menuTabsProps = {
  menuList: MenuItem[];
  activeSection: string;
};

const menuTabs: React.FC<menuTabsProps> = ({ menuList, activeSection }) => {
  const menuItems = menuList.map((menuItem) => (
    <li
      key={menuItem.id}
      className={`bg-gradient-to-b from-red-950 via-red-800 via-70% to-red-950 to-95% shadow-inner shadow-black hover:bg-red-600 hover:text-golden font-light duration-300 hover:scale-105 cursor-pointer min-w-max rounded-full px-4 py-1 ${
        activeSection === menuItem.id ? "text-golden" : "text-white"
      }`}
    >
      <ScrollLink targetId={menuItem.id} offset="10">
        <button className="w-full h-full text-left">{menuItem.heading}</button>
      </ScrollLink>
    </li>
  ));
  return (
    <nav className="flex justify-start md:justify-center overflow-x-auto no-scrollbar p-4 sticky top-12 lg:top-20 z-20">
      <ul className="flex flex-row justify-center bg-gradient-to-b from-red-900 via-red-900 via-50% to-red-950 to-95% gap-2 py-2 px-4 text-lg font-chowfun font-semibold tracking-wide rounded-full shadow-inner shadow-black">
        {menuItems}
      </ul>
    </nav>
  );
};

export default menuTabs;
 */

import { useRef } from "react";
import { MenuItem } from "../../types";
import ScrollLink from "../ScrollLink/ScrollLink";

type menuTabsProps = {
  menuList: MenuItem[];
  activeSection: string;
};

const MenuTabs: React.FC<menuTabsProps> = ({ menuList, activeSection }) => {
  const navRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const button = e.currentTarget;
    const nav = navRef.current;

    if (nav) {
      const buttonRect = button.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      const buttonCenter = buttonRect.left + buttonRect.width / 2;
      const navCenter = navRect.left + navRect.width / 2;
      const scrollOffset = buttonCenter - navCenter;

      nav.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };

  const menuItems = menuList.map((menuItem) => (
    <li
      key={menuItem.id}
      className={`bg-gradient-to-b from-red-950 via-red-800 via-70% to-red-950 to-95% shadow-inner shadow-black hover:bg-red-600 hover:text-golden font-light duration-300 hover:scale-105 cursor-pointer min-w-max rounded-full px-4 py-1 ${
        activeSection === menuItem.id ? "text-golden" : "text-white"
      }`}
    >
      <ScrollLink targetId={menuItem.id} offset="10">
        <button
          className="w-full h-full text-left"
          onClick={(e) => handleClick(e)}
        >
          {menuItem.heading}
        </button>
      </ScrollLink>
    </li>
  ));

  return (
    <nav
      ref={navRef}
      className="flex justify-start md:justify-center overflow-x-auto no-scrollbar p-4 sticky top-12 lg:top-20 z-20"
    >
      <ul className="flex flex-row justify-center bg-gradient-to-b from-red-900 via-red-900 via-50% to-red-950 to-95% gap-2 py-2 px-4 text-lg font-chowfun font-semibold tracking-wide rounded-full shadow-inner shadow-black">
        {menuItems}
      </ul>
    </nav>
  );
};

export default MenuTabs;
