import { Dish } from "../../types";
import images from "../imageData";
import { TFunction } from "i18next";

export const lunchMenu = (t: TFunction): Dish[] => [
  {
    id: 1,
    dishName: [t("monday")],
    description: [t("dish1")],
    type: [],
    price: [129],
    image: [images.RisnudlarEntrecote],
  },
  {
    id: 2,
    dishName: [t("tuesday")],
    description: [t("dish2")],
    type: [],
    price: [129],
    image: [images.WokadKyckling],
  },
  {
    id: 3,
    dishName: [t("wednesday")],
    description: [t("dish3")],
    type: [],
    price: [129],
    image: [images.KycklingJapanskCurry],
  },
  {
    id: 4,
    dishName: [t("thursday")],
    description: [t("dish4")],
    type: [],
    price: [129],
    image: [images.Yakisoba],
  },
  {
    id: 5,
    dishName: [t("friday")],
    description: [t("dish5")],
    type: [],
    price: [129],
    image: [images.Karaage],
  },
];
