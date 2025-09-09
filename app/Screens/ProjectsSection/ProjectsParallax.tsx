"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export const ProjectsParallax = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0], [0, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-500, 0]),
    springConfig,
  );
  return (
    <div
      ref={ref}
      className="relative flex h-fit flex-col self-auto overflow-hidden bg-neutral-100 antialiased [perspective:1000px] [transform-style:preserve-3d] dark:bg-[#121212]"
    >
      <div className="flex gap-4 px-4 max-md:flex-col">
        {" "}
        <iframe
          src="https://www.youtube.com/embed/jZXYjEYBGGE?si=rgBbnifVd6XNucHk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="h-[500px] w-full rounded-2xl"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/Wl40vQngN5I?si=mWx9pmmFlLynGqN_"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="h-[500px] w-full rounded-2xl"
        ></iframe>
      </div>

      <Header />

      <motion.div className="visible mx-5 mb-20 grid grid-cols-1 grid-rows-4 gap-10 md:hidden md:grid-cols-2 xl:mx-10 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard product={product} key={product.title} />
        ))}
      </motion.div>

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="visible max-sm:hidden"
      >
        <motion.div className="mx-5 mb-20 grid grid-cols-1 grid-rows-4 gap-10 md:grid-cols-2 xl:mx-10 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard product={product} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="relative px-4 py-20 md:py-40">
      <h1 className="text-center text-xl font-bold dark:text-white md:text-6xl">
        The Ultimate Portfolio
      </h1>
      <p className="mx-auto mt-8 max-w-2xl text-center text-base dark:text-neutral-200 md:text-lg">
        Throughout the past years I've had the chance to work on various
        projects of different scales and industries. Unfortunately, due to
        Non-Disclosure Agreements some projects can't be added to the portfolio.
        However, here's a list of some of my cool projects.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
}) => {
  return (
    <motion.div
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product relative h-96 w-full flex-shrink-0 rounded-3xl shadow-xl"
    >
      <a
        href={product.link}
        target="_blank"
        className="block group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="absolute inset-0 h-full w-full rounded-3xl object-cover"
          alt={product.title}
        />
      </a>
      <div className="pointer-events-none absolute inset-0 h-full w-full rounded-3xl bg-gradient-to-t from-[#000000cb] to-transparent"></div>
      <h2 className="absolute bottom-4 left-4 text-white">{product.title}</h2>
    </motion.div>
  );
};

const products = [
  {
    title: "DAPE (Simple Crypto NFT Community Game)",
    link: "https://youtu.be/sINNpwfH4kc",
    thumbnail: "https://iili.io/JNjAJhG.webp",
  },
  {
    title: "Spiral (First 3D Game)",
    link: "https://youtu.be/vZRJ5T3iBMc",
    thumbnail: "https://iili.io/JNjuhmu.webp",
  },
  {
    title: "Arminda (First 2D Game)",
    link: "https://youtu.be/_riAfvaGZSY?t=99",
    thumbnail: "https://iili.io/JNj5Czu.webp",
  },
  {
    title:
      "Bloggy (Flutter Blog App) [Clean Architecture, Supabase, Get It, FP Dart, and Bloc]",
    link: "https://github.com/Ammar-Montaser/News-App-Flutter?tab=readme-ov-file",
    thumbnail:
      "https://i.postimg.cc/G3gbR4NS/Screenshot-2024-06-13-at-8-23-33-PM.webp",
  },
  {
    title: "Business Card Website [UI/UX + Tailwind]",
    link: "https://ammar-business-card.netlify.app/",
    thumbnail:
      "https://i.postimg.cc/1zrJNwrP/Screenshot-2024-06-13-at-7-56-39-PM.webp",
  },
  {
    title: "Project Vault (RFID Smart Locker Automation App)",
    link: "https://youtube.com/shorts/2If3yzoiN1Q",
    thumbnail: "https://iili.io/JNjRtRt.webp",
  },
  {
    title: "Kadane's Algorithm Visualizer",
    link: "https://ammar-montaser.github.io/Kadane-s-Algorithm-Visualizer/",
    thumbnail: "https://iili.io/JvMHQkl.png",
  },
  {
    title: "Project Vault (RFID Smart Locker Automation Circuit)",
    link: "https://youtube.com/shorts/TnONTCZWkec",
    thumbnail: "https://iili.io/JNjRSOF.webp",
  },

  {
    title: "The Hub Landing Page [My Startup] (Old Version)",
    link: "https://effortless-salmiakki-05ecac.netlify.app/",
    thumbnail: "https://iili.io/JNjRXob.webp",
  },
  {
    title: "The Hub Mobile App [My Startup] (Old Version)",
    link: "https://youtu.be/OXlKVFP5caI",
    thumbnail: "https://iili.io/JNjA1ja.webp",
  },

  {
    title: "Solider Shooting Range Management Application",
    link: "https://youtu.be/-UDzBKMahzM",
    thumbnail: "https://iili.io/JNjuQBR.webp",
  },

  {
    title: "Cinema App UI Design",
    link: "https://dribbble.com/shots/23933554-Cinema-Application-UI-Design?utm_source=Clipboard_Shot&utm_campaign=3am3amy&utm_content=Cinema%20Application%20UI%20Design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=3am3amy&utm_content=Cinema%20Application%20UI%20Design&utm_medium=Social_Share",
    thumbnail: "https://iili.io/JNjT8Rn.webp",
  },
];
