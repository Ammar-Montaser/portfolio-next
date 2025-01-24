// import OpacityCards from "../DidYouKnow/components/OpacityCards";
// import Certificate from "../../../assets/certificatePresentation.png";
// import YearBook from "../../../assets/Yearbook.png";
// import Metaverse from "../../../assets/metaverse.png";

import { CardStack } from "./components/CardStack";

// import Military from "../../../assets/Military.jpeg";
function DidYouKnow() {
  return (
    <div className=" h-[50vh] relative flex flex-col dark:bg-[#121212] bg-neutral-100 ">
      <CardStack items={CARDS} />
    </div>
  );
}

export default DidYouKnow;
const CARDS = [
  {
    id: 0,
    ImgClassName:
      " object-cover mx-auto  absolute h-full w-full inset-0 rounded-xl",
    img: "https://iili.io/JNn9kkN.webp",
    alt: "1st Place Software Engineering Certificate from University of Abu Dhabi",
    header: "I Won 1st Place Software Engineering - University Of Abu Dhabi",
    description:
      "My graduation project and upcoming startup (The Hub) secured the 1st place at the 9th Undergraduate Virtual Research Competition (URC) held on May 26, 2022 by Abu Dhabi University. I secured first place out of 320 accepted teams representing 55 major universities across the GCC and MENA region.",
  },
  {
    id: 1,
    ImgClassName:
      " object-cover mx-auto  absolute h-full w-full inset-0 rounded-xl",
    img: "https://iili.io/JNnf2i7.webp",
    alt: "A picture of me giving a lecture about Blockchain, crypto-currencies, and the Metaverse",
    header: "I Taught A Blockchain Lecture",
    description:
      "During my last year in university, I presented a lecture about Blockchain technology, Crypto-Currencies, and the Metaverse. The lecture was focused on explaining the technology, immutable ledger, attacks, use cases, and risks.",
  },
  {
    id: 2,
    ImgClassName:
      " object-cover mx-auto  absolute h-full w-full inset-0 rounded-xl",
    img: "https://iili.io/JNnKgHJ.webp",
    alt: "A picture from my yearbook when I predicted that I will intern at a tech giant",
    header: "I Once Predicted The Future!",
    description:
      "In my high school yearbook, I answered the question (Where do see yourself in five years?). Back then I wanted to intern at a tech giant company, fast forward five years later and I got accepted @ Amazon. ",
  },
];
