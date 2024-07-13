import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import common from "../Translation/common.json";

//Swedish
import navSv from "../Translation/sv/components/nav.json";
import headerSv from "../Translation/sv/components/header.json";
import ctaSv from "../Translation/sv/components/cta.json";
import footerSv from "../Translation/sv/components/footer.json";
//Menu
import sushiSv from "../Translation/sv/menu/sushi.json";
import norimakiSv from "../Translation/sv/menu/norimaki.json";
import sashimiSv from "../Translation/sv/menu/sashimi.json";
import pokebowlSv from "../Translation/sv/menu/pokebowl.json";
import varmratterSv from "../Translation/sv/menu/varmratter.json";

//English
import navEn from "../Translation/en/components/nav.json";
import headerEn from "../Translation/en/components/header.json";
import ctaEn from "../Translation/en/components/cta.json";
import footerEn from "../Translation/en/components/footer.json";
//Menu
import sushiEn from "../Translation/en/menu/sushi.json";
import norimakiEn from "../Translation/en/menu/norimaki.json";
import sashimiEn from "../Translation/en/menu/sashimi.json";
import pokebowlEn from "../Translation/en/menu/pokebowl.json";
import varmratterEn from "../Translation/en/menu/varmratter.json";

//Spanish
import navEs from "../Translation/es/components/nav.json";
import headerEs from "../Translation/es/components/header.json";
import ctaEs from "../Translation/es/components/cta.json";
import footerEs from "../Translation/es/components/footer.json";
//Menu
import sushiEs from "../Translation/es/menu/sushi.json";
import norimakiEs from "../Translation/es/menu/norimaki.json";
import sashimiEs from "../Translation/es/menu/sashimi.json";
import pokebowlEs from "../Translation/es/menu/pokebowl.json";
import varmratterEs from "../Translation/es/menu/varmratter.json";

const resources = {
  sv: {
    common: common,
    nav: navSv,
    header: headerSv,
    cta: ctaSv,
    footer: footerSv,
    //Menu
    sushi: sushiSv,
    norimaki: norimakiSv,
    sashimi: sashimiSv,
    pokebowl: pokebowlSv,
    varmratter: varmratterSv,
  },
  en: {
    common: common,
    nav: navEn,
    header: headerEn,
    cta: ctaEn,
    footer: footerEn,
    //Menu
    sushi: sushiEn,
    norimaki: norimakiEn,
    sashimi: sashimiEn,
    pokebowl: pokebowlEn,
    varmratter: varmratterEn,
  },
  es: {
    common: common,
    nav: navEs,
    header: headerEs,
    cta: ctaEs,
    footer: footerEs,
    //Menu
    sushi: sushiEs,
    norimaki: norimakiEs,
    sashimi: sashimiEs,
    pokebowl: pokebowlEs,
    varmratter: varmratterEs,
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
    "cta",
    "footer",
    "sushi",
    "norimaki",
    "sashimi",
    "pokebowl",
    "varmratter",
  ],
  defaultNS,
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
