import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// Import all translation files
import navSv from "../Translation/sv/nav.json";
import mainSv from "../Translation/sv/main.json";
import footerSv from "../Translation/sv/footer.json";
import navEn from "../Translation/en/nav.json";
import mainEn from "../Translation/en/main.json";
import footerEn from "../Translation/en/footer.json";
import navEs from "../Translation/es/nav.json";
import mainEs from "../Translation/es/main.json";
import footerEs from "../Translation/es/footer.json";

const resources = {
  sv: {
    nav: navSv,
    main: mainSv,
    footer: footerSv,
  },
  en: {
    nav: navEn,
    main: mainEn,
    footer: footerEn,
  },
  es: {
    nav: navEs,
    main: mainEs,
    footer: footerEs,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "sv", // default language
  fallbackLng: "en", // fallback language
  ns: ["nav", "main", "footer"], // Define namespaces
  defaultNS: "main",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
