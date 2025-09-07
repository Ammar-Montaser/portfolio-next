"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import "./FirstFold.css";
const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });
import arrow from "../../assets/arrow.json";
import SocialMediaIcons from "@/app/components/shared_components/social_media_icons";
import dynamic from "next/dynamic";
import Nav from "@/app/components/shared_components/layout/Nav";
import { IconSparkles } from "@tabler/icons-react";
import Image from "next/image";
function FirstFold() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  return (
    <div className="">
      {" "}
      <Nav className="fixed" />
      <section className="left-side flex h-screen flex-col overflow-hidden bg-neutral-100 dark:bg-[#121212]">
        {" "}
        <div className="bg-black-400/65 absolute flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden">
          <motion.h1
            className="z-[3] text-nowrap text-center font-handjet text-7xl font-extrabold leading-normal tracking-widest text-black shadow-black drop-shadow-2xl dark:text-white max-sm:z-10 max-sm:mt-36 max-sm:text-white sm:text-[8rem] md:text-[10rem] lg:text-[8rem] xl:text-[13rem]"
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
            className="name z-20 animate-pulse text-center font-handjet text-[6rem] font-extrabold tracking-widest text-color shadow-black drop-shadow-2xl sm:mb-20 sm:text-[7rem] md:text-[9rem] lg:text-[8rem] xl:text-[11rem]"
            initial={{ translateX: 1500, opacity: 0, translateY: 100 }}
            animate={{ translateX: 0, opacity: 1, translateY: 100 }}
            transition={{ duration: 1 }}
          >
            &lt;AMMAR/&gt;
          </motion.h2>
          <div className="z-30 mt-20 rounded-md bg-BG px-3 py-2 text-center text-3xl sm:visible sm:text-2xl md:visible md:text-3xl lg:visible lg:text-4xl xl:hidden">
            {/* <h2 className="mx-auto font-bold text-white">
              {" "}
              FOUNDER OF{" "}
              <a
                href="https://www.hypeapp.me"
                className="animate-shimmer text-[#FFF700] transition-colors duration-300 hover:text-[#B000AD]"
              >
                HYPE APP
              </a>
            </h2> */}
            {/* <h2 className="mx-auto mt-2 font-bold text-white">
              FULL STACK SOFTWARE ENGINEER
            </h2> */}
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
          <div className="absolute -bottom-1 z-10 sm:-bottom-28">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/landingPage%2FCopy%20of%20DSC056s43.webp?alt=media&token=6a6f23a5-a947-4c55-aab6-b61a0c5a49de"
              width={650}
              height={100}
              className=""
              alt="photo of ammar montaser"
            ></Image>
          </div>
        </div>
        <div className="grain left_side absolute flex h-screen w-1/2 flex-col justify-center overflow-hidden rtl:left-0">
          {/* {" "}
          <h2 className="mx-auto mt-16 text-4xl font-medium text-black dark:text-white max-xl:hidden">
            FOUNDER OF{" "}
            <a
              href="https://www.hypeapp.me"
              className="z-[1000] animate-shimmer text-[#FFF700] transition-colors duration-300 hover:text-[#B000aD]"
            >
              HYPE
            </a>
          </h2> */}
        </div>
        <div className="right_side absolute right-0 z-50 flex h-screen w-1/2 flex-col justify-center">
          {/* <h2 className="absolute z-20 mx-auto mt-16 text-4xl font-medium text-black dark:text-white max-xl:hidden">
            FULL STACK SOFTWARE ENGINEER
          </h2> */}
        </div>{" "}
        <SocialMediaIcons
          className="absolute bottom-5 right-5 z-20 max-lg:hidden"
          size="size-8"
        />
        <div className="absolute bottom-5 left-5 z-20 flex">
          {" "}
          <a href="https://www.hypeapp.me">
            {" "}
            <h2 className="font-poppins text-xl font-medium text-[#fff] max-lg:hidden">
              Check Out Hype
            </h2>
          </a>
          <IconSparkles className="h-7 w-10 animate-pulse text-[#fff700]" />
        </div>
      </section>{" "}
    </div>
  );
}

export default FirstFold;
