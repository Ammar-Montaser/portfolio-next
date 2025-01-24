"use client";

import { appSliceActions } from "@/lib/global_store";
import { useAppDispatch } from "@/lib/hooks";

function HamburgerMenuItem(props: {
  text: string;
  handleHover: React.MouseEventHandler<HTMLAnchorElement>;
  handleHoverExit: React.MouseEventHandler<HTMLAnchorElement>;
  href: string;
}) {
  const dispatch = useAppDispatch();

  const toogleMenu = () => {
    window.document.body.classList.toggle("overflow-hidden");

    dispatch(appSliceActions.toogleMobileMenu());
  };
  return (
    <a
      className="z-50 p-4 font-poppins text-2xl text-black duration-700 hover:underline hover:decoration-white hover:underline-offset-8 dark:text-white"
      href={props.href}
      onClick={toogleMenu}
      onMouseOver={props.handleHover}
      onMouseLeave={props.handleHoverExit}
    >
      {props.text}
    </a>
  );
}

export default HamburgerMenuItem;
