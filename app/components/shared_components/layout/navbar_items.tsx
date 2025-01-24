import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="max-lg:hidden">
      <ul className="rtl:cairoArabic roboto-bold dark:text-primaryContentDark flex flex-row justify-center space-x-5 rounded-2xl text-primaryContent md:space-x-8 md:text-sm lg:space-x-8 xl:space-x-5 xl:text-lg">
        <a
          href="#about"
          className="hover:bg-white/70/80 rounded-md bg-BG px-4 py-2 hover:rounded-lg hover:text-primaryContentHover hover:shadow-lg hover:drop-shadow-lg dark:hover:bg-gray-600/70 dark:hover:text-white rtl:ml-5"
        >
          {t("about")}
        </a>
        <a
          href="#experience"
          className="hover:bg-white/70/80 rounded-md bg-BG px-4 py-2 hover:rounded-lg hover:text-primaryContentHover hover:shadow-lg hover:drop-shadow-lg dark:hover:bg-gray-600/70 dark:hover:text-white"
        >
          {t("experience")}
        </a>
        <a
          href="#projects"
          className="hover:bg-white/70/80 rounded-md bg-BG px-4 py-2 hover:rounded-lg hover:text-primaryContentHover hover:shadow-lg hover:drop-shadow-lg dark:hover:bg-gray-600/70 dark:hover:text-white"
        >
          {t("projects")}
        </a>
        <a
          href="#contact"
          className="hover:bg-white/70/80 rounded-md bg-BG px-4 py-2 hover:rounded-lg hover:text-primaryContentHover hover:shadow-lg hover:drop-shadow-lg dark:hover:bg-gray-600/70 dark:hover:text-white"
        >
          {t("contact")}
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
