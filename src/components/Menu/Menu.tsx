import { useState, useEffect } from "react";
import MenuTabs from "../Navbar/MenuTabs";

import Lunch from "./Lunch/Lunch";
import Sushi from "./Sushi/Sushi";
import Norimaki from "./Norimaki/Norimaki";
import Sashimi from "./Sashimi/Sashimi";
import Pokebowl from "./Pokebowl/Pokebowl";
import Varmratter from "./Varmratter/Varmratter";
import Special from "./Special/Special";
import { MenuItem } from "../../types";
import { useTranslation } from "react-i18next";

const menuComponents: Omit<MenuItem, "heading">[] = [
  { id: "LunchMenu", ns: "lunch", component: Lunch },
  { id: "SushiMenu", ns: "sushi", component: Sushi },
  { id: "NorimakiMenu", ns: "norimaki", component: Norimaki },
  { id: "SashimiMenu", ns: "sashimi", component: Sashimi },
  { id: "PokebowlMenu", ns: "pokebowl", component: Pokebowl },
  { id: "VarmratterMenu", ns: "varmratter", component: Varmratter },
  { id: "SpecialMenu", ns: "special", component: Special },
];

const Menu = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("LunchMenu");

  const menuList = menuComponents.map((menu) => ({
    ...menu,
    heading: t(`${menu.ns}:heading`),
  }));

  const sectionOffsets: { [key: string]: number } = {};

  const handleScroll = () => {
    const scrollY = window.scrollY;

    menuList.forEach((section) => {
      const sectionElement = document.getElementById(section.id);
      if (sectionElement) {
        sectionOffsets[section.id] = sectionElement.offsetTop;
      }
    });

    let active = "LunchMenu";
    for (const section in sectionOffsets) {
      if (scrollY >= sectionOffsets[section] - 200) {
        active = section;
      }
    }
    setActiveSection(active);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuList]);
  return (
    <main className="">
      <h1 className="text-white text-center font-cormorant text-7xl font-bold tracking-wider mt-8">
        {t("menu")}
      </h1>
      <MenuTabs menuList={menuList} activeSection={activeSection} />

      <>
        {menuList.map((menu) => (
          <menu.component
            key={menu.id}
            heading={menu.heading}
            id={menu.id}
            ns={menu.ns}
          />
        ))}
      </>
    </main>
  );
};

export default Menu;
