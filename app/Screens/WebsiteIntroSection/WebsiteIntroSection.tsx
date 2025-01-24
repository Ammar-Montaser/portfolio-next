"use client";
import { motion } from "framer-motion";
import { CountUp } from "countup.js";
import { useEffect } from "react";
import { SparklesCore } from "./Components/Sparkles";
import { useAppSelector } from "@/lib/hooks";
import ColorPicker from "@/app/components/shared_components/color_picker";
import Toggle from "@/app/components/shared_components/dark_mode_button";

function WebsiteIntroSection() {
  const mode = useAppSelector((state) => state.appSlice.mode);

  let color;
  if (mode === "dark") {
    color = "#ffffff";
  } else {
    color = "#000000";
  }

  function initCountUp() {
    //function to create counter for possible color variations
    const countUp = new CountUp("16777216", 16777216, {
      enableScrollSpy: true,
      scrollSpyOnce: false,
      scrollSpyDelay: 100,
      suffix: " COLORS AVAILABLE IN BOTH LIGHT AND DARK MODE",
      duration: 3,
      useEasing: true,
    });
    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
  }
  useEffect(() => {
    initCountUp();
  }, [color]);
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-neutral-100 dark:bg-[#121212]">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={50}
        className="h-full w-full"
        particleColor={color}
      ></SparklesCore>{" "}
      {/* MAIN SECTION */}
      <motion.div
        className="absolute left-0 flex h-screen w-full flex-col justify-center overflow-hidden"
        initial={{ opacity: 0.3, y: -50 }}
        whileInView={{ opacity: 1, y: 130 }}
        transition={{
          delay: 0.3,
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <h1 className="bg-clip-text text-center text-6xl font-extrabold text-black/100 dark:text-white lg:text-6xl xl:text-7xl">
          FIRST THING
        </h1>
        <h1 className="font-regular my-5 bg-clip-text text-center text-3xl text-black/100 dark:text-white lg:text-3xl xl:text-5xl">
          CUSTOMIZE THE PORTFOLIO
        </h1>
        <h1 className="font-regular my-5 bg-clip-text text-center text-xl text-black/100 dark:text-white lg:text-2xl xl:text-3xl">
          Disclaimer: This website does not use a template, view source code on
          Github!
        </h1>

        <h1
          id="16777216"
          className="bg-clip-text py-4 text-center text-lg font-thin tracking-tight text-black/100 dark:text-white md:text-2xl"
        >
          0
        </h1>
        <div>
          <ColorPicker
            width="15rem"
            height="3rem"
            className="my-5 animate-bounce"
            default={true}
            hueClassName=""
          />
        </div>
        <Toggle className="mx-auto my-10 scale-150" />
      </motion.div>
      {/* WAVES */}
      <div className="absolute top-0 z-10 flex w-full justify-center">
        <svg
          id="svg"
          viewBox="0 0 1440 390"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full md:w-[90vw] lg:w-[80vw] xl:w-[60vw]"
        >
          <path
            d="M 0,400 L 0,400 C 171.86666666666667,276.93333333333334 343.73333333333335,153.86666666666667 503,87 C 662.2666666666667,20.133333333333333 808.9333333333334,9.466666666666669 963,71 C 1117.0666666666666,132.53333333333333 1278.5333333333333,266.26666666666665 1440,400 L 1440,400 L 0,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="var(--BG)"
            fillOpacity="0.265"
            className="path-0"
            transform="rotate(-180 720 200)"
          ></path>
          <path
            d="M 0,400 L 0,400 C 138.40000000000003,314.26666666666665 276.80000000000007,228.53333333333333 452,167 C 627.1999999999999,105.46666666666667 839.2,68.13333333333335 1010,111 C 1180.8,153.86666666666665 1310.4,276.93333333333334 1440,400 L 1440,400 L 0,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="var(--BG)"
            fillOpacity="0.4"
            className="path-1"
            transform="rotate(-180 720 200)"
          ></path>
          <path
            d="M 0,400 L 0,400 C 131.59999999999997,317.6 263.19999999999993,235.20000000000002 434,195 C 604.8000000000001,154.79999999999998 814.8,156.8 989,198 C 1163.2,239.2 1301.6,319.6 1440,400 L 1440,400 L 0,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="var(--BG)"
            fillOpacity="0.53"
            className="path-2"
            transform="rotate(-180 720 200)"
          ></path>
          <path
            d="M 0,400 L 0,400 C 123.86666666666667,374.1333333333333 247.73333333333335,348.2666666666667 396,327 C 544.2666666666667,305.7333333333333 716.9333333333334,289.06666666666666 895,302 C 1073.0666666666666,314.93333333333334 1256.5333333333333,357.4666666666667 1440,400 L 1440,400 L 0,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="var(--BG)"
            fillOpacity="1"
            className="path-3"
            transform="rotate(-180 720 200)"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default WebsiteIntroSection;
