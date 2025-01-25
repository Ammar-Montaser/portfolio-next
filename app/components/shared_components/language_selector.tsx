"use client";

import { useAppDispatch } from "@/lib/hooks";
import { appSliceActions } from "@/lib/global_store";
import i18n from "@/lib/i18n";
import { useEffect } from "react";

function LanguageSelector() {
  interface Lngs {
    en: En;
    ar: En;
  }
  interface En {
    nativeName: string;
  }
  const lngs: Lngs = {
    en: { nativeName: "EN" },
    ar: { nativeName: "AR" },
  };
  let language: string | null;
  useEffect(() => {
    language = localStorage.getItem("language");
  }, []);

  const dispatch = useAppDispatch();

  return (
    <div className="dark:text-primaryContentDark ml-5 text-primaryContent rtl:mr-5">
      <select
        defaultValue={language!}
        className="rounded-md bg-BG px-2 py-1"
        onChange={(e) => {
          i18n.changeLanguage(e.currentTarget.value);
          localStorage.setItem("language", i18n.language);
          document.body.dir = i18n.dir();

          dispatch(appSliceActions.changeLanguage(i18n.dir()));
        }}
      >
        {Object.keys(lngs).map((lng) => (
          <option className=" " key={lng} value={lng}>
            {lngs[lng as keyof Lngs].nativeName}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;
