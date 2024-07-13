// Sushi.ts
import { Dish } from "../../types";
import images from "../imageData";
import { TFunction } from "i18next";

export const sashimiMenu = (t: TFunction): Dish[] => [
  {
    id: 1,
    dishName: t("salmon.small"),
    description: t("salmon.description"),
    type: [],
    price: [149],
    image: images.SashimiLaxLiten,
  },
  {
    id: 2,
    dishName: t("salmon.big"),
    description: t("salmon.description"),
    type: [],
    price: [249],
    image: images.SashimiLaxStor,
  },
  {
    id: 3,
    dishName: t("tuna.small"),
    description: t("tuna.description"),
    type: [],
    price: [149],
    image: images.missingImage,
  },
  {
    id: 4,
    dishName: t("tuna.big"),
    description: t("tuna.description"),
    type: [],
    price: [249],
    image: images.missingImage,
  },
  {
    id: 5,
    dishName: t("salmonTuna.small"),
    description: t("salmonTuna.description"),
    type: [],
    price: [149],
    image: images.SashimiLaxTunaLiten,
  },
  {
    id: 6,
    dishName: t("salmonTuna.big"),
    description: t("salmonTuna.description"),
    type: [],
    price: [249],
    image: images.SashimiLaxTunaStor,
  },
  {
    id: 7,
    dishName: t("mixed.small"),
    description: t("mixed.description"),
    type: [],
    price: [149],
    image: images.SashimiMixLiten,
  },
  {
    id: 8,
    dishName: t("mixed.big"),
    description: t("mixed.description"),
    type: [],
    price: [249],
    image: images.SashimiMixStor,
  },
];
