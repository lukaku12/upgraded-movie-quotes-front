import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import LanguageDetector from 'i18next-browser-languagedetector'
import { messagesEn } from "@/lang/en/ui";
import { messagesKa } from "@/lang/ka/ui";


i18next.use(LanguageDetector).init({
  lang: "ka",
  fallbackLng: "ka",
  resources: {
    en: {
      translation: {
        ...messagesEn,
      },
    },
    ka: {
      translation: {
        ...messagesKa,
      },
    },
  },
});

export default function (app) {
  app.use(I18NextVue, { i18next })
  return app
}