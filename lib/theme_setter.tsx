"use client";
function useTheme() {
  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.className = "dark";
    } else if (localStorage.getItem("theme") === "light") {
      localStorage.setItem("theme", "light");
      document.documentElement.className = "light";
    }
  } else {
    localStorage.setItem("theme", "dark");
    document.documentElement.className = "dark";
  }
}
export const themeSetter = useTheme;

export default useTheme;
