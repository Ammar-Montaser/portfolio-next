"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import "./FirstFold.css";
const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });
import arrow from "../../assets/arrow.json";
import SocialMediaIcons from "@/app/components/shared_components/social_media_icons";
import dynamic from "next/dynamic";
import Nav from "@/app/components/shared_components/layout/Nav";
function FirstFold() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  return (
    <div className="">
      {" "}
      <Nav className="fixed" />
      <section className="left-side flex h-screen flex-col overflow-hidden bg-neutral-100 dark:bg-[#121212]">
        {/* parallax headers behind my photo */}
        <div className="bg-black-400/65 absolute flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden">
          <motion.h1
            className="z-[3] text-nowrap text-center font-handjet text-6xl font-extrabold leading-normal tracking-widest text-black shadow-black drop-shadow-2xl dark:text-white max-sm:z-10 max-sm:mt-36 max-sm:text-white sm:text-[6rem] md:text-[8rem] lg:text-[8rem] xl:text-[10rem]"
            initial={{ translateX: -1700 }}
            animate={{
              translateX: 0,
            }}
            transition={{ duration: 1 }}
            style={{ y }}
          >
            MY NAME IS
          </motion.h1>
          <motion.h2
            style={{ y }}
            className="name z-10 mb-20 animate-pulse text-center font-handjet text-[4rem] font-extrabold tracking-widest text-color shadow-black drop-shadow-2xl sm:text-[6rem] md:text-[8rem] lg:text-[8rem] xl:text-[10rem]"
            initial={{ translateX: 1500, opacity: 0, translateY: 100 }}
            animate={{ translateX: 0, opacity: 1, translateY: 100 }}
            transition={{ duration: 1 }}
          >
            &lt;AMMAR/&gt;
          </motion.h2>
          <div className="z-[10] mt-20 rounded-md bg-BG px-3 py-2 text-center text-xl sm:visible sm:text-xl md:visible md:text-2xl lg:visible lg:text-3xl xl:hidden">
            <h2 className="mx-auto font-bold text-white">
              FULL STACK SOFTWARE ENGINEER
            </h2>
            <h2 className="mx-auto mt-2 font-bold text-white">
              MOBILE & WEB DEVELOPER
            </h2>
          </div>
          <div className="absolute bottom-0 z-10 w-[12rem]">
            <DynamicLottie
              className=""
              loop={true}
              autoPlay={true}
              animationData={arrow}
              rendererSettings={{
                preserveAspectRatio: "xMidYMid slice",
              }}
            />
          </div>{" "}
          <div className="absolute bottom-0 mx-auto h-[50vw] w-full rounded-tl-full rounded-tr-full bg-BG md:h-[45vw] md:w-[90vw] lg:h-[40vw] lg:w-[80vw] xl:h-[30vw] xl:w-[60vw]"></div>{" "}
        </div>
        <div className="grain left_side absolute flex h-screen w-1/2 flex-col justify-center overflow-hidden rtl:left-0">
          {" "}
          <h2 className="mx-auto mt-16 text-3xl font-medium text-black dark:text-white max-xl:hidden">
            FULL STACK SOFTWARE ENGINEER
          </h2>
        </div>
        <div className="right_side z-5 absolute right-0 flex h-screen w-1/2 flex-col justify-center">
          <h2 className="mx-auto mt-16 text-3xl font-medium text-black dark:text-white max-xl:hidden">
            MOBILE & WEB DEVELOPER
          </h2>
        </div>{" "}
        <SocialMediaIcons
          className="absolute bottom-5 left-5 z-20 max-lg:hidden"
          size="size-8"
        />
      </section>
    </div>
  );
}

export default FirstFold;
