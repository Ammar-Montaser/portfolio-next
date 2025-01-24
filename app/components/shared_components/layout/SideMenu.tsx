import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import SocialMediaIcons from "../social_media_icons";
import { useAppSelector } from "@/lib/hooks";
import HamburgerMenuItem from "../hamburger_menu_item";

function SideMenu() {
  const [hoverItem, sethoverItem] = useState("");
  const open = useAppSelector((state) => state.appSlice.isMobileMenuOpen);
  const { t } = useTranslation();

  function handleHover(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ): void {
    sethoverItem(event.currentTarget.innerText);
  }
  function handleHoverExit(): void {
    sethoverItem("");
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed top-0 z-[11] flex h-full w-full flex-col items-center justify-center bg-gray-200 dark:bg-[#121212]"
          initial={{ x: -100, opacity: 0, scale: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            ease: "linear",
            duration: 0.2,
          }}
        >
          <AnimatePresence>
            {hoverItem != "" ? (
              <div className="contents">
                <motion.h1
                  className="absolute z-20 m-auto rounded-lg bg-BG px-5 py-2 font-poppins text-4xl font-extrabold text-black opacity-20 shadow-lg shadow-BG md:text-7xl lg:text-7xl xl:text-8xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.6, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 70,
                  }}
                >
                  {t(hoverItem.toLowerCase())}
                </motion.h1>
              </div>
            ) : null}
          </AnimatePresence>
          <HamburgerMenuItem
            href="#about"
            text={t("about")}
            handleHover={handleHover}
            handleHoverExit={handleHoverExit}
          />
          <HamburgerMenuItem
            href="#experience"
            text={t("experience")}
            handleHover={handleHover}
            handleHoverExit={handleHoverExit}
          />
          <HamburgerMenuItem
            href="#projects"
            text={t("projects")}
            handleHover={handleHover}
            handleHoverExit={handleHoverExit}
          />
          <HamburgerMenuItem
            href="#contact"
            text={t("contact")}
            handleHover={handleHover}
            handleHoverExit={handleHoverExit}
          />

          <hr className="z-20 mt-5 w-3/6 border border-color text-color"></hr>
          <h1 className="mt-7 font-poppins text-xl font-bold text-black dark:text-white">
            GET IN TOUCH
          </h1>

          <SocialMediaIcons size="size-8" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SideMenu;
