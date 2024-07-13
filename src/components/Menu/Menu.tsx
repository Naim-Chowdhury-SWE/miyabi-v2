import NavbarMenu from "../Navbar/NavbarMenu";
import Norimaki from "./Norimaki/Norimaki";
import Sushi from "./Sushi/Sushi";
import Sashimi from "./Sashimi/Sashimi";
import Pokebowl from "./Pokebowl/Pokebowl";
import Varmratter from "./Varmratter/Varmratter";
import { MenuItem } from "../../types";
import { useTranslation } from "react-i18next";

const menuList: MenuItem[] = [
  { id: "SushiMenu", name: "Sushi", ns: "sushi", component: Sushi },
  { id: "NorimakiMenu", name: "Norimaki", ns: "norimaki", component: Norimaki },
  { id: "SashimiMenu", name: "Sashimi", ns: "sashimi", component: Sashimi },
  { id: "PokebowlMenu", name: "PokéBowl", ns: "pokebowl", component: Pokebowl },
  {
    id: "VarmratterMenu",
    name: "Varmrätter",
    ns: "varmratter",
    component: Varmratter,
  },
];

const Menu = () => {
  const { t } = useTranslation("header");
  return (
    <main className="">
      <h1 className="text-white text-center font-cormorant text-7xl font-bold tracking-wider mt-8">
        {t("menu")}
      </h1>
      <NavbarMenu menuList={menuList} />

      <div className="snap-x">
        {menuList.map((menu) => (
          <menu.component key={menu.id} id={menu.id} ns={menu.ns} />
        ))}
      </div>
    </main>
  );
};
export default Menu;
