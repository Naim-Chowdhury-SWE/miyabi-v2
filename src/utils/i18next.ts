import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import common from "../locales/common.json";

//Swedish
import navSv from "../locales/sv/components/nav.json";
import headerSv from "../locales/sv/components/header.json";
import carouselSv from "../locales/sv/components/carousel.json";
import ctaSv from "../locales/sv/components/cta.json";
import footerSv from "../locales/sv/components/footer.json";
//Menu
import lunchSv from "../locales/sv/menu/lunch.json";
import sushiSv from "../locales/sv/menu/sushi.json";
import norimakiSv from "../locales/sv/menu/norimaki.json";
import sashimiSv from "../locales/sv/menu/sashimi.json";
import pokebowlSv from "../locales/sv/menu/pokebowl.json";
import varmratterSv from "../locales/sv/menu/varmratter.json";
import specialSv from "../locales/sv/menu/special.json";

//English
import navEn from "../locales/en/components/nav.json";
import headerEn from "../locales/en/components/header.json";
import carouselEn from "../locales/en/components/carousel.json";
import ctaEn from "../locales/en/components/cta.json";
import footerEn from "../locales/en/components/footer.json";
//Menu
import lunchEn from "../locales/en/menu/lunch.json";
import sushiEn from "../locales/en/menu/sushi.json";
import norimakiEn from "../locales/en/menu/norimaki.json";
import sashimiEn from "../locales/en/menu/sashimi.json";
import pokebowlEn from "../locales/en/menu/pokebowl.json";
import varmratterEn from "../locales/en/menu/varmratter.json";
import specialEn from "../locales/en/menu/special.json";

//Spanish
import navEs from "../locales/es/components/nav.json";
import headerEs from "../locales/es/components/header.json";
import carouselEs from "../locales/es/components/carousel.json";
import ctaEs from "../locales/es/components/cta.json";
import footerEs from "../locales/es/components/footer.json";
//Menu
import lunchEs from "../locales/es/menu/lunch.json";
import sushiEs from "../locales/es/menu/sushi.json";
import norimakiEs from "../locales/es/menu/norimaki.json";
import sashimiEs from "../locales/es/menu/sashimi.json";
import pokebowlEs from "../locales/es/menu/pokebowl.json";
import varmratterEs from "../locales/es/menu/varmratter.json";
import specialEs from "../locales/es/menu/special.json";

const resources = {
  sv: {
    common: common,
    //Components
    nav: navSv,
    header: headerSv,
    carousel: carouselSv,
    cta: ctaSv,
    footer: footerSv,
    //Menu
    lunch: lunchSv,
    sushi: sushiSv,
    norimaki: norimakiSv,
    sashimi: sashimiSv,
    pokebowl: pokebowlSv,
    varmratter: varmratterSv,
    special: specialSv,
  },
  en: {
    common: common,
    // Components
    nav: navEn,
    header: headerEn,
    carousel: carouselEn,
    cta: ctaEn,
    footer: footerEn,
    //Menu
    lunch: lunchEn,
    sushi: sushiEn,
    norimaki: norimakiEn,
    sashimi: sashimiEn,
    pokebowl: pokebowlEn,
    varmratter: varmratterEn,
    special: specialEn,
  },
  es: {
    common: common,
    //Components
    nav: navEs,
    header: headerEs,
    carousel: carouselEs,
    cta: ctaEs,
    footer: footerEs,
    //Menu
    lunch: lunchEs,
    sushi: sushiEs,
    norimaki: norimakiEs,
    sashimi: sashimiEs,
    pokebowl: pokebowlEs,
    varmratter: varmratterEs,
    special: specialEs,
  },
};

const defaultNS = "header";

i18next.use(initReactI18next).init({
  resources,
  lng: "sv",
  fallbackLng: "en",
  ns: [
    "common",
    "nav",
    "header",
    "carousel",
    "cta",
    "footer",
    "lunch",
    "sushi",
    "norimaki",
    "sashimi",
    "pokebowl",
    "varmratter",
    "special",
  ],
  defaultNS,
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
