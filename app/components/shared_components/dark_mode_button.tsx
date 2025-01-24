"use client";

import { appSliceActions } from "@/lib/global_store";
import "./css/dark_mode_button.css";
import { useAppDispatch } from "@/lib/hooks";

function Toggle(props: { className?: string }) {
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "dark") {
      dispatch(appSliceActions.changeMode("light"));
      localStorage.setItem("theme", "light");
      document.documentElement.className = "light";
    } else if (localStorage.getItem("theme") === "light") {
      dispatch(appSliceActions.changeMode("dark"));
      localStorage.setItem("theme", "dark");
      document.documentElement.className = "dark";
    } else {
      dispatch(appSliceActions.changeMode("dark"));
      localStorage.setItem("theme", "dark");
      document.documentElement.className = "dark";
    }
  };

  return (
    <div className={props.className}>
      <div onClick={handleOnClick} className="orb"></div>

      <label htmlFor="toggle" className="toggle--label">
        <span className="toggle--label-background"></span>
      </label>
    </div>
  );
}
export default Toggle;
