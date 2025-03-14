"use client";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";
import { ThemeProvider } from "next-themes";
import useTheme from "@/lib/theme_setter";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>(undefined);
  // useEffect(() => {
  //   useTheme();
  // }, []);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return (
    // <ThemeProvider attribute="class" defaultTheme="dark">
    <Provider store={storeRef.current}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </Provider>
    // </ThemeProvider>
  );
}
