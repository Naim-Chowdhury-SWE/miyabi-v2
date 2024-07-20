import { Dish } from "../../types";
import images from "../imageData";
import { TFunction } from "i18next";

export const pokebowlMenu = (t: TFunction): Dish[] => [
  {
    id: 1,
    dishName: [t("salmonTuna")],
    description: [t("description")],
    type: [],
    price: [129],
    image: [images.PokebowlLax],
  },
  {
    id: 2,
    dishName: [t("shrimp")],
    description: [t("description")],
    type: [],
    price: [129],
    image: [images.PokebowlRaka],
  },
  {
    id: 3,
    dishName: [t("chicken")],
    description: [t("description")],
    type: [],
    price: [129],
    image: [images.PokebowlKyckling],
  },
  {
    id: 4,
    dishName: [t("tofu")],
    description: [t("description")],
    type: [],
    price: [129],
    image: [images.PokebowlTofu],
  },
];
