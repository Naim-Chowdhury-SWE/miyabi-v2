import { Dish } from "../../types";
import images from "../imageData";
import { TFunction } from "i18next";

export const sashimiMenu = (t: TFunction): Dish[] => [
  {
    id: 1,
    dishName: [
      t("salmon.name") + " " + t("small"),
      t("salmon.name") + " " + t("big"),
    ],
    description: [t("salmon.description")],
    type: [t("small"), t("big")],
    price: [149, 249],
    image: [images.SashimiLaxLiten, images.SashimiLaxStor],
  },
  {
    id: 2,
    dishName: [
      t("tuna.name") + " " + t("small"),
      t("tuna.name") + " " + t("big"),
    ],
    description: [t("tuna.description")],
    type: [t("small"), t("big")],
    price: [149, 249],
    image: [images.missingImage],
  },
  {
    id: 3,
    dishName: [
      t("salmonTuna.name") + " " + t("small"),
      t("salmonTuna.name") + " " + t("big"),
    ],
    description: [t("salmonTuna.description")],
    type: [t("small"), t("big")],
    price: [149, 249],
    image: [images.SashimiLaxTunaLiten, images.SashimiLaxTunaStor],
  },
  {
    id: 4,
    dishName: [
      t("mixed.name") + " " + t("small"),
      t("mixed.name") + " " + t("big"),
    ],
    description: [t("mixed.description")],
    type: [t("small"), t("big")],
    price: [149, 249],
    image: [images.SashimiMixLiten, images.SashimiMixStor],
  },
];
