import { Dish } from "../../types";
import images from "../imageData";
import { TFunction } from "i18next";

export const varmratterMenu = (t: TFunction): Dish[] => [
  {
    id: 1,
    dishName: t("yakiniku.name"),
    description: t("yakiniku.description"),
    type: [t("size.small"), t("size.medium"), t("size.large")],
    price: [89, 129, 149],
    image: images.Yakiniku,
  },
  {
    id: 2,
    dishName: t("yakitori.name"),
    description: t("yakitori.description"),
    type: [t("size.small"), t("size.medium"), t("size.large")],
    price: [89, 129, 149],
    image: images.Yakitori,
  },
  {
    id: 3,
    dishName: t("yakinikuSushi.name"),
    description: t("yakinikuSushi.description"),
    type: [],
    price: [159],
    image: images.YakinikuSushi,
  },
  {
    id: 4,
    dishName: t("bento.name"),
    description: t("bento.description"),
    type: [],
    price: [159],
    image: images.Bento,
  },
  {
    id: 5,
    dishName: t("bentoGyoza.name"),
    description: t("bentoGyoza.description"),
    type: [],
    price: [159],
    image: images.BentoGyoza,
  },
  {
    id: 6,
    dishName: t("bentoMiyabi.name"),
    description: t("bentoMiyabi.description"),
    type: [],
    price: [165],
    image: images.BentoMiyabi,
  },
  {
    id: 7,
    dishName: t("bentoDeluxe.name"),
    description: t("bentoDeluxe.description"),
    type: [],
    price: [185],
    image: images.BentoDeluxe,
  },
  {
    id: 8,
    dishName: t("gyoza.name"),
    description: t("gyoza.description"),
    type: ["6 Bitar", "8 Bitar"],
    price: [125, 139],
    image: images.Gyoza,
  },
  {
    id: 9,
    dishName: t("gyozaVeg.name"),
    description: t("gyozaVeg.description"),
    type: ["6 Bitar", "8 Bitar"],
    price: [125, 139],
    image: images.Gyoza,
  },
  {
    id: 10,
    dishName: t("yakisoba.name"),
    description: t("yakisoba.description"),
    type: [],
    price: [149],
    image: images.Yakisoba,
  },
  {
    id: 11,
    dishName: t("wokChicken.name"),
    description: t("wokChicken.description"),
    type: [],
    price: [149],
    image: images.WokadKyckling,
  },
  {
    id: 12,
    dishName: t("wokBeef.name"),
    description: t("wokBeef.description"),
    type: [],
    price: [149],
    image: images.WokadBiff,
  },
  {
    id: 13,
    dishName: t("wokShrimp.name"),
    description: t("wokShrimp.description"),
    type: [],
    price: [149],
    image: images.WokadRakor,
  },
  {
    id: 14,
    dishName: t("tempura.name"),
    description: t("tempura.description"),
    type: [],
    price: [149],
    image: images.Tempura,
  },
  {
    id: 15,
    dishName: t("karaage.name"),
    description: t("karaage.description"),
    type: [t("size.small"), t("size.medium")],
    price: [89, 149],
    image: images.Karaage,
  },
  {
    id: 16,
    dishName: t("friedriceChicken.name"),
    description: t("friedriceChicken.description"),
    type: [],
    price: [149],
    image: images.StektRisKyckling,
  },
  {
    id: 17,
    dishName: t("friedriceBeef.name"),
    description: t("friedriceBeef.description"),
    type: [],
    price: [149],
    image: images.StektRisEntrecote,
  },
  {
    id: 18,
    dishName: t("friedriceShrimp.name"),
    description: t("friedriceShrimp.description"),
    type: [],
    price: [149],
    image: images.StektRisRaka,
  },
  {
    id: 19,
    dishName: t("friedriceVeg.name"),
    description: t("friedriceVeg.description"),
    type: [],
    price: [149],
    image: images.StektRisVeg,
  },
  {
    id: 20,
    dishName: t("salmonTeriyaki.name"),
    description: t("salmonTeriyaki.description"),
    type: [],
    price: [149],
    image: images.Laxteriyaki,
  },
  {
    id: 21,
    dishName: t("springrolls.name"),
    description: t("springrolls.description"),
    type: [7 + t("pieces"), 10 + t("pieces")],
    price: [120, 135],
    image: images.Varrullar10,
  },
];