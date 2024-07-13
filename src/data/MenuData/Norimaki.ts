import { Dish } from "../../types";
import images from "../imageData";
import { TFunction } from "i18next";

export const norimakiMenu = (t: TFunction): Dish[] => [
  {
    id: 1,
    dishName: t("california.name"),
    description: t("california.description"),
    type: [],
    price: [129],
    image: images.CaliforniaRoll,
  },
  {
    id: 2,
    dishName: t("tempura.name"),
    description: t("tempura.description"),
    type: [],
    price: [129],
    image: images.TempuraRollFriterad,
  },
  {
    id: 3,
    dishName: t("kappa.name"),
    description: t("kappa.description"),
    type: [],
    price: [129],
    image: images.KappaMaki,
  },
  {
    id: 4,
    dishName: t("dragon.name"),
    description: t("dragon.description"),
    type: [],
    price: [129],
    image: images.DragonRoll,
  },
];
