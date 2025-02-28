import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import uzLang from "./locales/uz.json";
import ruLang from "./locales/ru.json";

const resources = {
  uz: {
    translation: uzLang,
  },
  ru: {
    translation: ruLang,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uz",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
