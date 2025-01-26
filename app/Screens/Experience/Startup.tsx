"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useInView } from "framer-motion";
import bumpLogo from "../../assets/Bump Logo.png";
import bumpLogoWhite from "../../assets/bumplogowhite.png";
import join from "../../assets/join.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoPersonAddSharp, IoPeople } from "react-icons/io5";
import { MdPlace, MdLocalActivity } from "react-icons/md";
import Image from "next/image";
import MovingIphones from "./components/iphone_screenshots";
import { useAppSelector } from "@/lib/hooks";
import ThreeDCardDemo from "@/app/components/3dCard/3dCardFirstFold";
import { Carousel } from "./components/journey_gallery";

function Startup() {
  const [activeCard, setActiveCard] = useState(0);
  const video1 =
    "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/landingPage%2FMatch.mp4?alt=media&token=1a2d5eb1-938a-49a3-b4a0-6cf99c8980df";
  const video2 =
    "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/landingPage%2FPrivatewebm.mp4?alt=media&token=22acbf37-be05-4ad8-b534-635dd15f6512";
  const video3 =
    "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/landingPage%2FPlaces.mp4?alt=media&token=0e0ab1dc-9533-428a-aef0-aeb97f9886f2";
  const video4 =
    "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/landingPage%2FSearchcirlce.mp4?alt=media&token=a9a16c71-6218-48c5-9e98-429b90bb0ae9";
  const handleCardHover = (index: number): void => {
    if (index === 0) {
      setActiveCard(0);
    }
    if (index === 1) {
      setActiveCard(1);
    } else if (index === 2) {
      setActiveCard(2);
    } else if (index === 3) {
      setActiveCard(3);
    } else if (index === 4) {
      setActiveCard(4);
    }
  };
  const mode = useAppSelector((state) => state.appSlice.mode);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollY, scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["-70%", "70%"]);

  return (
    <div
      id="startup"
      ref={targetRef}
      className="relative snap-x snap-mandatory sm:h-[500vh]"
    >
      <div className="sticky top-0 flex h-screen snap-x snap-mandatory items-start justify-center overflow-hidden bg-neutral-100 dark:bg-[#121212]">
        <div className="absolute z-10 flex h-full w-full items-center justify-evenly max-sm:flex-col">
          <div className="left-0 right-0 -z-50 flex flex-col items-center justify-between gap-4">
            <div className="flex w-[400px] flex-col items-center sm:ml-5">
              {" "}
              <h2 className="nunito text-center text-7xl font-medium text-black dark:text-white max-sm:text-4xl">
                {" "}
                Meet
              </h2>
              {mode == "light" ? (
                <Image
                  src={bumpLogo}
                  alt="bump logo"
                  width={500}
                  height={500}
                />
              ) : (
                <Image
                  src={bumpLogoWhite}
                  alt="bump logo"
                  width={500}
                  height={500}
                />
              )}
              <h2 className="nunito text-center text-3xl font-light text-black dark:text-white max-sm:text-2xl">
                {" "}
                The Ultimate AI Powered Social Platform{" "}
              </h2>
              <h2 className="nunito text-center text-2xl font-medium text-black dark:text-white max-sm:text-xl">
                {" "}
                COMING SOON
              </h2>
              <a className="" href="https://www.bumpsocial.me" target="_blank">
                <button className="mt-8 bg-[#fcff30] px-4 py-2">
                  <h2 className="nunito text-center text-2xl font-medium text-black dark:text-[#000000] max-sm:text-xl">
                    VISIT LANDING PAGE
                  </h2>
                </button>
              </a>
            </div>
          </div>
          <MovingIphones />
        </div>
        <motion.div
          className="z-20 flex snap-x snap-mandatory max-sm:hidden"
          style={{ x: x }}
        >
          {" "}
          <div className="relative flex h-screen w-screen flex-1 flex-col items-center justify-end">
            {" "}
            {/* Third Section */}{" "}
            <div className="h-screen w-full overflow-x-clip bg-[#000000bd] max-xl:flex-col max-md:h-full">
              <div className="mt-8 flex h-full w-full flex-row items-center justify-center max-sm:flex-col">
                <div className="flex h-5/6 w-3/12 flex-col gap-8 max-xl:w-10/12">
                  <div
                    className="border-text hover:shadow-text/30 flex h-1/2 w-full flex-col items-center justify-center rounded-3xl border-4 bg-black p-4 shadow-xl transition-all duration-500 hover:border-[#fdf91b]"
                    onMouseEnter={() => handleCardHover(1)}
                    onClick={() => handleCardHover(1)}
                    onMouseLeave={() => handleCardHover(0)}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h2 className="raleway mb-4 text-4xl font-bold text-[#fdf91b]">
                        New Friends
                      </h2>{" "}
                      <IoPersonAddSharp className="text-accent/20 mb-2 size-20 text-white" />
                    </div>
                    <span className="text-text mb-2 text-center text-xl font-bold text-white">
                      {" "}
                      Down for extra adventure? Bored? Want to see new faces?
                    </span>{" "}
                    <p className="roboto text-text text-center text-lg text-white">
                      Bump&apos;s artificial intelligence brain matches you with
                      new friends to meetup in the real life based on multiple
                      things including interests, age, and location.
                    </p>
                  </div>
                  <div
                    className="border-text hover:shadow-text/30 flex h-1/2 w-full flex-col items-center justify-center rounded-3xl border-4 bg-black p-4 shadow-xl transition-all duration-500 hover:border-[#fdf91b]"
                    onMouseEnter={() => handleCardHover(2)}
                    onClick={() => handleCardHover(2)}
                    onMouseLeave={() => handleCardHover(0)}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h2 className="raleway mb-2 text-4xl font-bold text-[#fdf91b]">
                        Existing Friends
                      </h2>{" "}
                      <IoPeople className="mb-2 size-20 text-white" />
                    </div>
                    <span className="text-text mb-2 text-center text-xl font-bold text-white">
                      {" "}
                      Want to stick to the regular?
                    </span>{" "}
                    <p className="roboto text-text text-center text-lg text-white">
                      Bump allows you to add your existing friends, see their
                      locations on the map, and plan real life hangouts with
                      them.
                    </p>
                  </div>
                </div>
                <div className="flex h-screen w-4/12 flex-col items-center justify-center text-white">
                  <ThreeDCardDemo className="z-30">
                    {activeCard != 0 && (
                      <video
                        muted
                        autoPlay
                        className=""
                        src={
                          activeCard === 1
                            ? video1
                            : activeCard === 2
                              ? video2
                              : activeCard === 3
                                ? video3
                                : activeCard === 4
                                  ? video4
                                  : "video1"
                        }
                      ></video>
                    )}
                    {activeCard == 0 && (
                      <div className="bg-background flex w-full items-center justify-center">
                        <Image src={join} alt="" className="z-10" />
                      </div>
                    )}
                  </ThreeDCardDemo>
                  <h2 className="">HOVER OVER ONE OF CARDS</h2>
                </div>
                <div className="flex h-5/6 w-3/12 flex-col gap-8 max-xl:w-10/12">
                  <div
                    className="border-text hover:shadow-text/30 flex h-1/2 w-full flex-col items-center justify-center rounded-3xl border-4 bg-black p-4 shadow-xl transition-all duration-500 hover:border-[#fdf91b]"
                    onMouseEnter={() => handleCardHover(3)}
                    onClick={() => handleCardHover(3)}
                    onMouseLeave={() => handleCardHover(0)}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h2 className="raleway mb-4 text-4xl font-bold text-[#fdf91b]">
                        Discover Places
                      </h2>{" "}
                      <MdPlace className="text-accent/20 mb-2 size-20 text-white" />
                    </div>
                    <span className="text-text mb-2 text-center text-xl font-bold text-white">
                      {" "}
                      Looking for a change of scenery or your next favorite
                      spot?
                    </span>{" "}
                    <p className="roboto text-text text-center text-lg text-white">
                      Bump makes it easy to explore new cafés, parks,
                      restaurants, and more. Whether you&apos;re searching for a
                      cozy corner to chill or a vibrant venue for fun, or just
                      start a vote and your circle can help you decide.
                    </p>
                  </div>
                  <div
                    className="border-text hover:shadow-text/30 flex h-1/2 w-full flex-col items-center justify-center rounded-3xl border-4 bg-black p-4 shadow-xl transition-all duration-500 hover:border-[#fdf91b]"
                    onMouseEnter={() => handleCardHover(4)}
                    onClick={() => handleCardHover(4)}
                    onMouseLeave={() => handleCardHover(0)}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h2 className="raleway mb-4 text-4xl font-bold text-[#fdf91b]">
                        Discover Activities
                      </h2>{" "}
                      <MdLocalActivity className="text-accent/20 mb-2 size-20 text-white" />
                    </div>
                    <span className="text-text mb-2 text-center text-xl font-bold text-white">
                      {" "}
                      Ready to shake up your routine?
                    </span>{" "}
                    <p className="roboto text-text text-center text-lg text-white">
                      Whether it’s a thrilling adventure, a relaxing yoga
                      session, or a spontaneous karaoke night, Bump helps you
                      uncover exciting activities tailored to your vibe. Join
                      in, try something new, and make every moment an experience
                      worth sharing! Let me know if you&apos;d like to tweak the
                      tone further!
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
          <div className="relative flex h-screen w-screen flex-1 flex-col items-center justify-end">
            {" "}
            <video
              loop
              autoPlay
              playsInline
              muted
              controls
              src="https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/landingPage%2FyearsIntheMakingOptimized.mp4?alt=media&token=d4e1f589-7071-4706-b486-b5574dcd40c4"
              width={100}
              height={100}
              className="left-0 top-0 h-screen w-screen object-cover"
            />
          </div>{" "}
          <div className="relative flex h-screen w-screen flex-1 flex-col items-center justify-center overflow-hidden bg-[#000000e0]">
            {" "}
            <motion.h2
              initial={{ y: -200 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1 }}
              className="xl:text-[9 rem] z-10 text-[4rem] text-black dark:text-[#e8ff18] sm:text-[7rem] md:text-[7rem] lg:text-[8rem]"
            >
              THE JOURNEY
            </motion.h2>
            <Carousel slides={slides} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const slides = [
  {
    title: "Bump Ecosystem | Bump Partners",
    year: "2025",
    src: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/landingPage%2FBUMPPARTNER.png?alt=media&token=7de3c736-bc95-4408-a3ac-13c95a3e0274",
  },
  {
    title: "Meet Bump | Rebuilt From Scratch",
    year: "2024",
    src: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/landingPage%2Fphone%20on%20paper.png?alt=media&token=5e6f1874-3203-4304-b405-f6e32e3a7f7b",
  },
  {
    title: "Launch Delayed | Military Service",
    year: "2023",
    src: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/landingPage%2FWhatsApp%20Image%202025-01-26%20at%201.27.14%20AM.png?alt=media&token=0d25a64a-6682-4fba-97a2-1f8f5e131d72",
  },
  {
    title: "First Place Winner | Software Engineering @ UAE",
    year: "2022",
    src: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/landingPage%2Fvlcsnap-2025-01-25-20h14m53s325.png?alt=media&token=92354d39-d68b-4247-b674-21ad52660c39",
  },
  {
    title: "Meet The Hub | Bump V1",
    year: "2022",

    src: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/landingPage%2Fvlcsnap-2025-01-25-22h01m39s847.png?alt=media&token=6bdd1a01-b02d-4f91-8cc2-e2a1efb4c7c2",
  },
  {
    title: "Academic Research Paper | Grade 98% ",
    year: "2021",

    src: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/landingPage%2FScreenshot%202024-12-18%20215440.png?alt=media&token=0b6b021f-b50c-44b9-8b9d-97a76391db5c",
  },
  {
    title: "Extensive Market Research | Focus Study Groups",
    year: "2021",

    src: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/landingPage%2Fmarketresearch.png?alt=media&token=a6b8fb88-5ee9-4c0e-ab56-04b144decb16",
  },
  {
    title: "Idea Born | My Notebook",
    year: "2020",

    src: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/landingPage%2Fhjhj.png?alt=media&token=3c50b494-04da-40cf-bc32-44523f4e9d64",
  },

  {
    title: "Passion | Pitching My First App in Grade 8",
    year: "2016",

    src: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/landingPage%2Fbabypitch.jpeg?alt=media&token=879f0edc-01ae-4306-81b0-a7c627953e3b",
  },
];
export default Startup;
