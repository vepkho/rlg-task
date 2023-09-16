import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import tr from "./locales/tr.json";

export default createI18n({
  locale: localStorage.getItem("lang") || "en",
  messages: {
    en,
    tr,
  },
});
