"use client";
import SocialMediaIcons from "@/app/components/shared_components/social_media_icons";
import { useAppSelector } from "@/lib/hooks";
import { Carousel } from "flowbite-react";
import { BentoGrid } from "./components/GridLayout";
import ToolStackIcons from "./components/ToolStackIcons";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function About() {
  const mode = useAppSelector((state) => state.appSlice.mode);

  return (
    <div className="bg-white/70/40 relative flex flex-col justify-center dark:bg-[#121212]">
      <BentoGrid className="max-w-8xl px-3 md:px-10 lg:px-10 xl:px-12">
        <div className="row-span-1 flex flex-col justify-between rounded-3xl border-2 border-BG bg-gray-200 p-4 transition duration-1000 hover:shadow-xl hover:drop-shadow-glow dark:bg-neutral-900 dark:shadow-none">
          <h2 className="text-2xl font-bold text-black dark:text-white">
            Summary
          </h2>
          <p className="text-md font-sans font-normal text-neutral-600 dark:text-neutral-300 md:text-xl">
            Innovative Software Engineer, focused on creating{" "}
            <span className="text-color">functional</span> and
            <span className="text-color"> user-centered</span> digital products
            that provide <span className="text-color">creative solutions</span>{" "}
            to real life problems.
          </p>

          <div className="flex flex-row justify-between">
            <a
              href="https://drive.google.com/uc?export=download&id=11FDWtO8qGjH4CN8dwPPd76XKpz_5Mn7p"
              className="roboto-bold w-50 rounded-2xl bg-BG px-4 py-2 text-black dark:bg-black dark:text-white"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="row-span-2 rounded-3xl border-2 border-BG bg-gray-200 p-4 transition duration-1000 hover:shadow-xl hover:drop-shadow-glow dark:bg-neutral-900 dark:shadow-none">
          <Carousel
            pauseOnHover
            leftControl={
              <FaChevronLeft className="fa-solid fa-chevron-left text-3xl text-color" />
            }
            rightControl={
              <FaChevronRight className="fa-solid fa-chevron-right text-3xl text-color" />
            }
          >
            <Image
              src="https://i.postimg.cc/NMJFZpmd/IMG-7448.webp"
              alt="A random pic of me"
              className="h-full w-full object-cover"
              width={500}
              height={500}
            />
            <Image
              src="https://i.postimg.cc/zvQLH0fy/277598-F4-0-EBA-4-A92-9941-2410-EDB81969.webp"
              alt="A picture of me in my favorite coffee shop"
              className="h-full w-full object-cover"
              width={500}
              height={500}
            />
            <Image
              src="https://i.postimg.cc/qRMgm9ht/IMG-3779.webp"
              alt="A picture of me attending Startups Without Borders Summit"
              className="h-full w-full object-cover"
              width={500}
              height={500}
            />
            <Image
              src="https://iili.io/JOgkVOQ.webp"
              alt="My Amazon Swag"
              className="h-full w-full object-cover"
              width={500}
              height={500}
            />
          </Carousel>
        </div>
        <div className="row-span-3 flex flex-col justify-around rounded-3xl border-2 border-BG bg-gray-200 p-4 transition duration-1000 hover:shadow-xl hover:drop-shadow-glow dark:bg-neutral-900 sm:row-span-3">
          {" "}
          <h2 className="text-2xl font-bold text-black dark:text-white">
            My Background
          </h2>{" "}
          <p className="text-neutral-600 dark:text-neutral-300 sm:text-lg md:text-lg lg:text-[1.3rem] xl:text-[1rem]">
            Growing up in the United States, Saudi Arabia, and Egypt exposed me
            to&nbsp;
            <span className="font-bold">
              diverse ways of thinking and flexibility
            </span>
            . In addition, my father's career as a University Professor and my
            mother's as a Chemist fostered{" "}
            <span className="font-bold">
              analytical and problem-solving skills&nbsp;
            </span>
            from a young age.
          </p>
          <p className="text-neutral-600 dark:text-neutral-300 sm:text-lg md:text-lg lg:text-[1.2rem] xl:text-[1rem]">
            My passion for technology began at the age of five, sparking a
            lifelong fascination. Therefore, I pursued a Bachelor's degree in
            Computer Science. My goal is to create innovative technological
            solutions that transform people's lives for the better. Pioneers
            like Elon Musk and Steve jobs{" "}
            <span className="font-bold">inspire me</span> with their
            world-changing innovations. I'm driven to develop products with a
            similar positive impact. Through{" "}
            <span className="font-bold">continuous learning</span>, I strengthen
            my diverse skillset which ranges from software development to
            product strategy.{" "}
          </p>
          <p className="text-neutral-600 dark:text-neutral-300 sm:text-lg md:text-lg lg:text-[1.2rem] xl:text-[1rem]">
            In addition to my technical skills, I have a{" "}
            <span className="font-bold">passion for entrepreneurship</span> and
            starting my own ventures. Through my startup endeavors, I am further
            developing my skills in areas like product development, business
            modeling, and team leadership. I enjoy the challenges of{" "}
            <span className="font-bold">bringing new ideas to life</span> and
            solving problems through an entrepreneurial lens. <br />
          </p>
          <div className="flex flex-row justify-end">
            {" "}
            {mode === "dark" ? (
              <Image
                className="w-7/12"
                src="https://iili.io/JNxN1ZF.webp"
                alt="..."
                width={300}
                height={300}
              />
            ) : (
              <Image
                className="w-7/12"
                src="https://iili.io/JNxwZrv.webp"
                alt="..."
                width={300}
                height={300}
              />
            )}
          </div>
        </div>
        <div className="row-span-2 flex flex-col rounded-3xl border-2 border-BG bg-gray-200 p-4 transition duration-1000 hover:shadow-xl hover:drop-shadow-glow dark:bg-neutral-900 dark:shadow-none">
          <h2 className="mb-2 text-2xl font-bold text-black dark:text-white">
            Main Tool Stack
          </h2>
          <div className="flex flex-grow flex-row flex-wrap items-center justify-center space-x-2">
            <ToolStackIcons className="icon-[devicon--flutter] text-3xl xl:xl:text-5xl" />
            <ToolStackIcons className="text-3xl5xl icon-[devicon--python] text-3xl xl:xl:text-5xl" />
            <ToolStackIcons className="icon-[devicon--nextjs] text-3xl xl:xl:text-5xl" />
            <ToolStackIcons className="icon-[devicon--javascript] text-3xl xl:xl:text-5xl" />
            <ToolStackIcons className="icon-[devicon--react] text-3xl xl:xl:text-5xl" />
            <ToolStackIcons className="icon-[devicon--tailwindcss] text-3xl xl:xl:text-5xl" />
            <ToolStackIcons className="icon-[devicon--nodejs] text-3xl xl:xl:text-5xl" />
            <ToolStackIcons className="icon-[devicon--mongodb] text-3xl xl:xl:text-5xl" />
            <ToolStackIcons className="icon-[devicon--figma] text-3xl xl:xl:text-5xl" />
            <ToolStackIcons className="icon-[devicon--amazonwebservices-wordmark] text-3xl xl:xl:text-5xl" />
            <ToolStackIcons className="icon-[devicon--firebase] text-3xl xl:xl:text-5xl" />
            <ToolStackIcons className="icon-[devicon--googlecloud] text-3xl xl:xl:text-5xl" />
            <ToolStackIcons className="icon-[devicon--heroku] text-3xl xl:xl:xl:text-5xl" />{" "}
            <ToolStackIcons className="icon-[devicon--flask] text-3xl xl:xl:text-5xl" />{" "}
            <ToolStackIcons className="icon-[devicon--sqlite] text-3xl xl:xl:text-5xl" />{" "}
            <ToolStackIcons className="icon-[devicon--redux] text-3xl xl:xl:text-5xl" />{" "}
            <ToolStackIcons className="icon-[devicon--dynamodb] text-3xl xl:xl:text-5xl" />{" "}
            <ToolStackIcons className="icon-[devicon--photoshop] text-3xl xl:xl:text-5xl" />
          </div>
        </div>{" "}
        <div className="flex min-h-full flex-col justify-around rounded-3xl border-2 border-BG bg-gray-200 p-4 transition duration-1000 hover:shadow-xl hover:drop-shadow-glow dark:bg-neutral-900 dark:shadow-none lg:col-span-1 xl:col-span-1 xl:row-span-1">
          <h2 className="text-2xl font-bold text-black dark:text-white">
            Education
          </h2>
          <div>
            <div className="flex flex-row justify-between">
              <h2 className="text-md font-bold text-black dark:text-white">
                Saudi Arabian American International School
              </h2>
              <h2 className="text-md font-bold text-black dark:text-white">
                2017-2018
              </h2>
            </div>

            <h3 className="text-sm font-bold dark:text-white">Taif, KSA</h3>
            <h3 className="text-sm dark:text-white/70">
              American High School Diploma
            </h3>
          </div>
          <div>
            <div className="flex flex-row justify-between">
              <h2 className="text-md font-bold text-black dark:text-white">
                The British University In Egypt
              </h2>
              <h2 className="text-md font-bold text-black dark:text-white">
                2018-2022
              </h2>
            </div>
            <h3 className="text-sm font-bold dark:text-white">Cairo, Egypt</h3>
            <h3 className="text-sm dark:text-white/70">
              Computer Science Bachelor's Degree
            </h3>{" "}
            <h3 className="text-sm font-bold dark:text-white/70">
              First Class Honors - 3.8 GPA
            </h3>
          </div>
        </div>
      </BentoGrid>
    </div>
  );
}

export default About;
