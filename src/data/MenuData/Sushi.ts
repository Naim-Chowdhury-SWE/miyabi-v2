import { Dish } from "../../types";
import images from "../imageData";
import { TFunction } from "i18next";

export const sushiMenu = (t: TFunction): Dish[] => [
  {
    id: 1,
    dishName: [t("mixedSmall.name")],
    description: [t("mixedSmall.description")],
    type: [7 + t("pieces"), 8 + t("pieces"), 9 + t("pieces")],
    price: [89, 105, 115],
    image: [images.BlandadSushi8],
  },
  {
    id: 2,
    dishName: [t("mixedMedium.name")],
    description: [t("mixedMedium.description")],
    type: [11 + t("pieces"), 13 + t("pieces"), 14 + t("pieces")],
    price: [135, 155, 165],
    image: [images.BlandadSushi11],
  },
  {
    id: 3,
    dishName: [t("mixedLarge.name")],
    description: [t("mixedLarge.description")],
    type: [15 + t("pieces"), 16 + t("pieces"), 20 + t("pieces")],
    price: [175, 185, 229],
    image: [images.BlandadSushi20],
  },
  {
    id: 4,
    dishName: [t("salmonRolls.name")],
    description: [t("salmonRolls.description")],
    type: [8 + t("pieces"), 10 + t("pieces"), 12 + t("pieces")],
    price: [99, 119, 139],
    image: [images.LaxRullar8, images.LaxRullar10, images.LaxRullar12],
  },
  {
    id: 5,
    dishName: [t("vegetarian.name")],
    description: [t("vegetarian.description")],
    type: [10 + t("pieces"), 12 + t("pieces")],
    price: [115, 139],
    image: [images.VegetariskSushi10, images.VegetariskSushi12],
  },
  {
    id: 6,
    dishName: [t("avocado.name")],
    description: [t("avocado.description")],
    type: [8 + t("pieces"), 10 + t("pieces"), 12 + t("pieces")],
    price: [115, 135, 155],
    image: [images.AvocadoSushi],
  },
  {
    id: 7,
    dishName: [t("mother.name")],
    description: [t("mother.description")],
    type: [10 + t("pieces"), 12 + t("pieces")],
    price: [115, 139],
    image: [images.MammaSushi10, images.MammaSushi12],
  },
  {
    id: 8,
    dishName: [t("nigiri.name")],
    description: [t("nigiri.description")],
    type: [9 + t("pieces"), 12 + t("pieces")],
    price: [125, 165],
    image: [images.BlandadNigiri9, images.BlandadNigiri12],
  },
  {
    id: 9,
    dishName: [t("salmon.name")],
    description: [t("salmon.description")],
    type: [8 + t("pieces"), 10 + t("pieces"), 12 + t("pieces")],
    price: [139, 159, 179],
    image: [images.LaxSushi],
  },
  {
    id: 10,
    dishName: [t("salmonAvocado.name")],
    description: [t("salmonAvocado.description")],
    type: [8 + t("pieces"), 10 + t("pieces"), 12 + t("pieces")],
    price: [129, 139, 159],
    image: [images.LaxAvocadoSushi],
  },
  {
    id: 11,
    dishName: [t("salmonShrimp.name")],
    description: [t("salmonShrimp.description")],
    type: [8 + t("pieces"), 10 + t("pieces"), 12 + t("pieces")],
    price: [119, 139, 159],
    image: [images.LaxRakorSushi],
  },
  {
    id: 12,
    dishName: [t("shrimp.name")],
    description: [t("shrimp.description")],
    type: [8 + t("pieces"), 10 + t("pieces"), 12 + t("pieces")],
    price: [125, 145, 165],
    image: [images.RakSushi],
  },
  {
    id: 13,
    dishName: [t("grillSalmon.name")],
    description: [t("grillSalmon.description")],
    type: [8 + t("pieces"), 10 + t("pieces"), 12 + t("pieces")],
    price: [135, 155, 175],
    image: [images.GrillLaxSushi],
  },
  {
    id: 14,
    dishName: [t("family.name")],
    description: [t("family.description")],
    type: [
      30 + t("pieces"),
      40 + t("pieces"),
      50 + t("pieces"),
      70 + t("pieces"),
    ],
    price: [349, 449, 549, 749],
    image: [
      images.FamiljeSushi30,
      images.FamiljeSushi40,
      images.FamiljeSushi50,
      images.FamiljeSushi70,
    ],
  },
];
