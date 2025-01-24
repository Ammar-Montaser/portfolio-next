/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

let interval: any;

type Card = {
  id: number;
  img: string;
  ImgClassName: string;
  alt: string;
  header: string;
  description: string;
};

export const CardStack = ({ items }: { items: Card[] }) => {
  const CARD_OFFSET = 10;
  const SCALE_FACTOR = 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute flex h-[50vh] w-11/12 flex-col justify-between rounded-3xl border border-neutral-200 bg-white/70 p-4 shadow-xl shadow-black/[0.1] dark:border-white/[0.1] dark:bg-black dark:shadow-white/[0.05] md:w-8/12 lg:w-6/12"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <motion.div className="group/product relative h-full w-full flex-shrink-0 rounded-xl shadow-xl">
              <Image
                src={card.img}
                className={card.ImgClassName}
                alt={card.alt}
                width={500}
                height={400}
              />

              <div className="pointer-events-none absolute inset-0 mx-auto h-full w-full rounded-xl bg-black opacity-0 transition duration-500 group-hover/product:opacity-80"></div>
              <div className="absolute bottom-4 left-4 opacity-0 transition duration-500 group-hover/product:opacity-100">
                {" "}
                <h2 className="mb-5 text-xl font-extrabold text-white">
                  {card.header}{" "}
                </h2>
                <p className="mr-5 text-white">{card.description}</p>
              </div>
            </motion.div>{" "}
          </motion.div>
        );
      })}
    </div>
  );
};
