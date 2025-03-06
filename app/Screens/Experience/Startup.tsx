"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useInView } from "framer-motion";
import hypeLogo from "../../assets/newHypeLogoUpdatedBorder.png";
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
    "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/HypeMaterial%2FmatchScreen.mp4?alt=media&token=a61ec455-9718-49f8-85eb-5c48777b46c6";
  const video2 =
    "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/HypeMaterial%2Fcreate%20circle.mp4?alt=media&token=ec66cdcb-aefc-4823-bcb8-5777c5812858";
  const video3 =
    "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/HypeMaterial%2Fplaces.mp4?alt=media&token=c5513d86-f2cf-4c79-8e06-9a322d5cff48";
  const video4 =
    "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/HypeMaterial%2FcirclesScreen.mp4?alt=media&token=2c4d1126-f1ce-4ac2-85c7-7fe078404cc5";
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
              <Image src={hypeLogo} alt="hype logo" width={500} height={500} />
              <h2 className="nunito text-center text-3xl font-light text-black dark:text-white max-sm:text-2xl">
                {" "}
                The Ultimate AI Powered Social Platform{" "}
              </h2>
              <h2 className="nunito text-center text-2xl font-medium text-black dark:text-white max-sm:text-xl">
                {" "}
                COMING SOON
              </h2>
              <a className="" href="https://www.hypeapp.me" target="_blank">
                <button className="mt-8 bg-[#fcff30] px-4 py-2 hover:bg-[#b000ad]">
                  <h2 className="nunito text-center text-2xl font-medium text-black hover:text-white dark:text-[#000000] max-sm:text-xl">
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
          <div className="relative flex h-screen w-screen flex-1 flex-col items-center justify-end bg-[#000000e0]">
            {" "}
            <div className="h-screen w-full overflow-x-clip max-xl:flex-col max-md:h-full">
              <div className="flex h-full w-full flex-row items-center justify-center max-sm:flex-col">
                <div className="flex h-5/6 w-3/12 flex-col gap-8 max-xl:w-11/12">
                  <div
                    className="hover:shadow-yellow/30 flex h-1/2 w-full flex-col items-center justify-center rounded-3xl border-4 border-black bg-black p-4 shadow-xl transition-all duration-500 hover:border-[#fff600] dark:border-[#b000ad] dark:hover:border-[#fff600]"
                    onMouseEnter={() => handleCardHover(1)}
                    onClick={() => handleCardHover(1)}
                    onMouseLeave={() => handleCardHover(0)}
                  >
                    <div className="flex items-center justify-between gap-1">
                      <h2 className="raleway mb-4 text-3xl font-bold text-[#fff600]">
                        New Friends
                      </h2>{" "}
                      <IoPersonAddSharp className="mb-2 size-16 text-[#b000ad]/80" />
                    </div>
                    <span className="text-text mb-2 text-center text-lg font-bold text-white">
                      {" "}
                      Down for extra adventure? Bored? Want to see new faces?
                    </span>{" "}
                    <p className="text-md roboto text-text text-center text-white/70">
                      Hype&apos;s AI connects you with new friends based on
                      interests, age, and location—making real-life hangouts
                      effortless.
                    </p>
                  </div>
                  <div
                    className="hover:shadow-yellow/30 flex h-1/2 w-full flex-col items-center justify-center rounded-3xl border-4 border-black bg-black p-4 shadow-xl transition-all duration-500 hover:border-[#fff600] dark:border-[#b000ad] dark:hover:border-[#fff600]"
                    onMouseEnter={() => handleCardHover(2)}
                    onClick={() => handleCardHover(2)}
                    onMouseLeave={() => handleCardHover(0)}
                  >
                    <div className="flex items-center justify-between gap-1">
                      <h2 className="raleway mb-2 text-3xl font-bold text-[#fff600]">
                        Existing Friends
                      </h2>{" "}
                      <IoPeople className="mb-2 size-16 text-[#b000ad]/80" />
                    </div>
                    <span className="text-text mb-2 text-center text-lg font-bold text-white">
                      {" "}
                      Want to stick to the regular?
                    </span>{" "}
                    <p className="text-md roboto text-text text-center text-white/70">
                      Hype allows you to add your existing friends, see their
                      locations on the map, and plan real life hangouts with
                      them.
                    </p>
                  </div>
                </div>
                <motion.div
                  className="flex h-screen w-4/12 items-center justify-center"
                  initial={{ y: 300 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 1 }}
                >
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
                        <Image
                          src="https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/HypeMaterial%2FWelcome%20Screen%20TinyPNG.png?alt=media&token=ed932f61-5ca2-44d3-8e34-5e6d7fa9ee11"
                          alt=""
                          width={900}
                          height={900}
                          className="z-10"
                        />
                      </div>
                    )}
                  </ThreeDCardDemo>
                </motion.div>
                <div className="flex h-5/6 w-3/12 flex-col gap-8 max-xl:w-10/12">
                  <div
                    className="hover:shadow-yellow/30 flex h-1/2 w-full flex-col items-center justify-center rounded-3xl border-4 border-black bg-black p-4 shadow-xl transition-all duration-500 hover:border-[#fff600] dark:border-[#b000ad] dark:hover:border-[#fff600]"
                    onMouseEnter={() => handleCardHover(3)}
                    onClick={() => handleCardHover(3)}
                    onMouseLeave={() => handleCardHover(0)}
                  >
                    <div className="flex items-center justify-between gap-1">
                      <h2 className="raleway mb-4 text-3xl font-bold text-[#fff600]">
                        Discover Places
                      </h2>{" "}
                      <MdPlace className="mb-2 size-16 text-[#b000ad]/80" />
                    </div>
                    <span className="text-text mb-2 text-center text-lg font-bold text-white">
                      {" "}
                      Looking for a change of scenery or your next favorite
                      spot?
                    </span>{" "}
                    <p className="text-md roboto text-text text-center text-white/70">
                      Hype helps you explore cafés, parks, and restaurants
                      effortlessly. Find the perfect spot or start a vote and
                      let your circle decide!
                    </p>
                  </div>
                  <div
                    className="hover:shadow-yellow/30 flex h-1/2 w-full flex-col items-center justify-center rounded-3xl border-4 border-black bg-black p-4 shadow-xl transition-all duration-500 hover:border-[#fff600] dark:border-[#b000ad] dark:hover:border-[#fff600]"
                    onMouseEnter={() => handleCardHover(4)}
                    onClick={() => handleCardHover(4)}
                    onMouseLeave={() => handleCardHover(0)}
                  >
                    <div className="flex items-center justify-between gap-1">
                      <h2 className="raleway mb-4 text-3xl font-bold text-[#fff600]">
                        Discover Activities
                      </h2>{" "}
                      <MdLocalActivity className="mb-2 size-16 text-[#b000ad]/80" />
                    </div>
                    <span className="text-text mb-2 text-center text-lg font-bold text-white">
                      {" "}
                      Ready to shake up your routine?
                    </span>{" "}
                    <p className="text- roboto text-center text-white/70">
                      From thrilling adventures to relaxing yoga or spontaneous
                      karaoke, Hype connects you with activities that match your
                      vibe.
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
              className="xl:text-[9 rem] z-10 text-[4rem] text-[#e8ff18] sm:text-[7rem] md:text-[7rem] lg:text-[8rem]"
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
    title: "Hype Rebranding",
    year: "2025",
    src: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/HypeMaterial%2FhypeLogoBlack.png?alt=media&token=74e39600-eebe-4f89-ae79-c4b421ca7e51",
  },
  {
    title: "Accelerated by AUC VLAB Cycle 24",
    year: "2025",
    src: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/landingPage%2FBumpXAUC.png?alt=media&token=80b87d3c-0828-478b-8859-e74e075b0d6f",
  },
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
    title: "Meet The Hub | Hype V1",
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
