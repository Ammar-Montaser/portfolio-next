import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        websiteName: "Ammar Montaser/",
        about: "ABOUT",
        experience: "EXPERIENCE",
        projects: "PROJECTS",
        contact: "CONTACT",
        startup: "STARTUP",

        downloadResume: "Download Resume",
        freePalestine: "Free Palestine 🇵🇸",
        palestineMessage:
          "Stand for humanity! Palestine has a right to defend itself. Together, we can put an end to this genocide. Click to donate an e-sim for our families in Palestine!",
      },
    },
    ar: {
      translation: {
        websiteName: "عمار منتصر/",
        about: "مين انا",
        experience: "خبرتي",
        startup: "شركتي",
        projects: "مشاريعي",
        contact: "تواصل معايا",
        downloadResume: "  نزل ال CV",
        freePalestine: "🇵🇸 فلسطين حرة",
        palestineMessage:
          "!خليك انسان! من حق كل فلسطيني الدفاع عن وطنه. ساعدنا نوقف الإبادة الجماعية. دوس علشان تتبرع بشريحة إلكترونية لأهلنا في فلسطين",
      },
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
