import { useTranslation } from "react-i18next";

function Logo() {
  const { t } = useTranslation();

  return (
    <div className="dark:text-primaryContentDark z-50 font-poppins font-[800] text-black duration-300 dark:text-white rtl:font-cairo">
      <p className="m-auto w-max text-2xl lg:text-2xl xl:text-2xl">
        <span className="text-2xl text-color lg:text-2xl xl:text-2xl">
          &lt;
        </span>
        {t("websiteName")}
        <span className="text-2xl text-color lg:text-2xl xl:text-2xl">
          &gt;
        </span>
      </p>
    </div>
  );
}

export default Logo;
