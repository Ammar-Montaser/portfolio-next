import type { Metadata } from "next";
import { Roboto, Poppins, Handjet, Cairo } from "next/font/google";
import "./globals.css";
import Nav from "./components/shared_components/layout/Nav";
import StoreProvider from "./store_provider";
import Footer from "./components/shared_components/layout/footer";
import Head from "next/head";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const handjet = Handjet({
  variable: "--font-handjet",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ammar Montaser's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="language" content="en-us" />
        <meta name="author" content="Ammar Montaser" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Welcome to my personal website and developer portfolio, learn more about me, my projects, and work experience. Contact: me@ammarmontaser.com"
        />
        <meta
          name="keywords"
          content="Software Engineer, BUMP, AI Hangout Platform, Startup, Mobile App, Bump, Web Developer, Mobile Developer, Computer Science, Programmer, Amazon, Egypt, Gaming, React, Javascript, Programming, Cairo, New Cairo, British University, FAANG, Flutter, Ammar, portfolio, Montaser, Ammar Montaser"
        />
      </Head>
      <body
        className={`${roboto.variable} ${poppins.variable} ${cairo.variable} ${handjet.variable} antialiased`}
      >
        <div>
          <StoreProvider>{children}</StoreProvider>
        </div>
      </body>
    </html>
  );
}