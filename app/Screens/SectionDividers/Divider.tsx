"use client";
import { motion } from "framer-motion";
import { ReactElement, ReactSVGElement } from "react";
function Divider(props: {
  id: string;
  text: string;
  number: number;
  className: string;
  item1: string;
  item2: string;
  item3: string;

  icon: ReactElement<ReactSVGElement>;
  icon2: ReactElement<ReactSVGElement>;
}) {
  return (
    <div className="relative flex flex-row items-center justify-center overflow-hidden bg-neutral-100 dark:bg-[#121212]">
      {props.icon}
      <div
        id={props.id}
        className="flex h-[60vh] w-full flex-col items-center justify-center overflow-hidden"
      >
        <motion.h2
          initial={{ y: -200 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className={props.className}
        >
          {props.text}
        </motion.h2>
        <div className="relative flex flex-col items-center py-5 md:flex-row">
          <span className="mx-4 flex-shrink text-lg text-black transition hover:scale-110 hover:animate-bounce hover:text-color dark:text-white dark:hover:text-color">
            {props.item1}
          </span>
          <span className="mx-4 flex-shrink text-lg text-black transition hover:scale-110 hover:animate-bounce hover:text-color dark:text-white dark:hover:text-color">
            {props.item2}
          </span>
          <span className="mx-4 flex-shrink text-lg text-black transition hover:scale-110 hover:animate-bounce hover:text-color dark:text-white dark:hover:text-color">
            {props.item3}
          </span>
        </div>{" "}
      </div>
      {props.icon2}
    </div>
  );
}

export default Divider;
