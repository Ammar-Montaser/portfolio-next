"use client";
import { ReactNode } from "react";
import "../css/nav.css";
import "../../../globals.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Logo from "../logo";
import { ShimmerButton } from "../shimmer_button";
import SideMenu from "./SideMenu";
import { appSliceActions } from "@/lib/global_store";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import Navbar from "./navbar_items";
import { FaBars } from "react-icons/fa";
function Nav(props: { className?: string }): ReactNode {
  const open = useAppSelector((state) => state.appSlice.isMobileMenuOpen);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const toogleMenu = () => {
    window.document.body.classList.toggle("overflow-hidden");

    dispatch(appSliceActions.toogleMobileMenu());
  };

  return (
    <div>
      <motion.div
        id="header"
        className={
          props.className +
          " z-50 flex h-20 w-full flex-row items-center justify-around rounded-b-2xl shadow-lg backdrop-blur-sm duration-300"
        }
      >
        <Logo />
        {!open && <Navbar />}
        {!open && (
          <ShimmerButton
            content={t("downloadResume")}
            ClassName="rtl:font-cairo font-roboto dark:text-white text-black w-50 px-4 py-2 max-xl:hidden "
          />
        )}

        <button
          className={
            open
              ? "right-10 z-20 rounded-md shadow-lg duration-300"
              : "right-10 z-20 rounded-md shadow-lg duration-300 hover:shadow-BG lg:hidden"
          }
          onClick={toogleMenu}
        >
          <FaBars className="fa-solid fa-bars dark:text-primaryContentDark rounded-md bg-BG px-3 py-2 text-5xl text-primaryContent shadow-md" />
        </button>
      </motion.div>
      <SideMenu />
    </div>
  );
}

export default Nav;
