// import OpacityCards from "../DidYouKnow/components/OpacityCards";
// import Certificate from "../../../assets/certificatePresentation.png";
// import YearBook from "../../../assets/Yearbook.png";
// import Metaverse from "../../../assets/metaverse.png";

import Script from "next/script";
import { AnimatedTestimonials } from "./components/CardStack";

// import Military from "../../../assets/Military.jpeg";
function DidYouKnow() {
  return (
    <div className="relative flex overflow-hidden bg-neutral-100 dark:bg-[#121212] max-lg:flex-col max-lg:px-4">
      <AnimatedTestimonials items={CARDS} />
      <div className="mx-auto w-full max-w-[540px]"></div>
    </div>
  );
}

export default DidYouKnow;
const CARDS = [
  {
    id: 0,
    ImgClassName:
      " object-cover mx-auto  absolute h-full w-full inset-0 rounded-xl",
    img: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/landingPage%2Fbabypitch.jpeg?alt=media&token=879f0edc-01ae-4306-81b0-a7c627953e3b",
    alt: "A picture of me in grade 8 pitching a mobile app I created for a school competition",
    header: "Not New to The Game, I Pitched My First App in Grade 8",
    description:
      "In grade 8, I pitched my very first mobile app 'SAMIS Social App' for a school competition. That same app became part of my student union campaign, blending creativity and leadership. This moment marked the start of an incredible journey, where creating apps became not just a skill but an addiction—something coded into my DNA. Building apps became my way of turning ideas into impactful solutions.",
  },
  {
    id: 1,
    ImgClassName:
      " object-cover mx-auto  absolute h-full w-full inset-0 rounded-xl",
    img: "https://iili.io/JNn9kkN.webp",
    alt: "1st Place Software Engineering Certificate from University of Abu Dhabi",
    header: "I Won 1st Place Software Engineering - University Of Abu Dhabi",
    description:
      "My graduation project and upcoming startup (The Hub) secured the 1st place at the 9th Undergraduate Virtual Research Competition (URC) held on May 26, 2022 by Abu Dhabi University. I secured first place out of 320 accepted teams representing 55 major universities across the GCC and MENA region.",
  },
  {
    id: 2,
    ImgClassName:
      " object-cover mx-auto  absolute h-full w-full inset-0 rounded-xl",
    img: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/landingPage%2Fsamisapp.webp?alt=media&token=cbf3dc6a-85d1-4000-b262-245f778d5689",
    alt: "My First App 'SAMIS Social App'",
    header: "My First App 'SAMIS Social App'",
    description:
      "In grade 8, I created 'Samis Social App,' my first app intended for students, parents, and teachers, fulfilling a childhood dream of building technology that connects people. This early step cemented my lifelong goal of turning ideas into impactful solutions.",
  },
  {
    id: 3,
    ImgClassName:
      " object-cover mx-auto  absolute h-full w-full inset-0 rounded-xl",
    img: "https://iili.io/JNnf2i7.webp",
    alt: "A picture of me giving a lecture about Blockchain, crypto-currencies, and the Metaverse",
    header: "I Taught A Blockchain Lecture",
    description:
      "During my last year in university, I presented a lecture about Blockchain technology, Crypto-Currencies, and the Metaverse. The lecture was focused on explaining the technology, immutable ledger, attacks, use cases, and risks.",
  },
  {
    id: 4,
    ImgClassName:
      " object-cover mx-auto  absolute h-full w-full inset-0 rounded-xl",
    img: "https://iili.io/JNnKgHJ.webp",
    alt: "A picture from my yearbook when I predicted that I will intern at a tech giant",
    header: "I Once Predicted The Future!",
    description:
      "In my high school yearbook, I answered the question (Where do see yourself in five years?). Back then I wanted to intern at a tech giant company, fast forward five years later and I got accepted @ Amazon. ",
  },
];
