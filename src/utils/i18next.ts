import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// Import all translation files
import staticData from "../Translation/static.json";
import navSv from "../Translation/sv/nav.json";
import ctaSv from "../Translation/sv/cta.json";
import mainSv from "../Translation/sv/main.json";
import footerSv from "../Translation/sv/footer.json";
import navEn from "../Translation/en/nav.json";
import ctaEn from "../Translation/en/cta.json";
import mainEn from "../Translation/en/main.json";
import footerEn from "../Translation/en/footer.json";
import navEs from "../Translation/es/nav.json";
import ctaEs from "../Translation/es/cta.json";
import mainEs from "../Translation/es/main.json";
import footerEs from "../Translation/es/footer.json";

const resources = {
  sv: {
    static: staticData,
    nav: navSv,
    cta: ctaSv,
    main: mainSv,
    footer: footerSv,
  },
  en: {
    static: staticData,
    nav: navEn,
    cta: ctaEn,
    main: mainEn,
    footer: footerEn,
  },
  es: {
    static: staticData,
    nav: navEs,
    cta: ctaEs,
    main: mainEs,
    footer: footerEs,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "sv", // default language
  fallbackLng: "en", // fallback language
  ns: ["static", "nav", "cta", "main", "footer"], // Define namespaces
  defaultNS: "main",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
