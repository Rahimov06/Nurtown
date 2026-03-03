"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "./locales/en/common.json";
import ruCommon from "./locales/ru/common.json";
import tjCommon from "./locales/tj/common.json";

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { common: enCommon },
        ru: { common: ruCommon },
        tj: { common: tjCommon },
      },
      supportedLngs: ["en", "ru", "tj"],
      fallbackLng: "en",
      defaultNS: "common",
      ns: ["common"],
      detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
      },
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });
}

export default i18n;
