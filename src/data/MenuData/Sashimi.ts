import { Dish } from "../../types";
import images from "../imageData";
import { TFunction } from "i18next";

export const sashimiMenu = (t: TFunction): Dish[] => [
  {
    id: 1,
    dishName: [
      t("salmon.name" + " " + "small"),
      t("salmon.name" + " " + "big"),
    ],
    description: [t("salmon.description")],
    type: [t("small"), t("big")],
    price: [149, 249],
    image: [images.SashimiLaxLiten, images.SashimiLaxStor],
  },
  {
    id: 2,
    dishName: [t("tuna.name" + " " + "small"), t("tuna.name" + " " + "big")],
    description: [t("tuna.description")],
    type: [t("small"), t("big")],
    price: [149, 249],
    image: [images.missingImage],
  },
  {
    id: 3,
    dishName: [
      t("salmonTuna.name" + " " + "small"),
      t("salmonTuna.name" + " " + "big"),
    ],
    description: [t("salmonTuna.description")],
    type: [t("small"), t("big")],
    price: [149, 249],
    image: [images.SashimiLaxTunaLiten, images.SashimiLaxTunaStor],
  },
  {
    id: 4,
    dishName: [t("mixed.name" + " " + "small"), t("mixed.name" + " " + "big")],
    description: [t("mixed.description")],
    type: [t("small"), t("big")],
    price: [149, 249],
    image: [images.SashimiMixLiten, images.SashimiMixStor],
  },
];
