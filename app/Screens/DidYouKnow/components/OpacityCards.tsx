import { motion } from "framer-motion";
import Image from "next/image";

function OpacityCards(props: {
  img: string;
  alt: string;
  header: string;
  description: string;
  ImgClassName: string;
}) {
  return (
    <div className="h-full">
      <motion.div className="group/product relative h-96 w-full flex-shrink-0 rounded-xl shadow-xl">
        <Image src={props.img} className={props.ImgClassName} alt={props.alt} />

        <div className="pointer-events-none absolute inset-0 mx-auto h-full w-full rounded-xl bg-black opacity-0 transition duration-500 group-hover/product:opacity-80"></div>
        <div className="absolute bottom-4 left-4 opacity-0 transition duration-500 group-hover/product:opacity-100">
          {" "}
          <h2 className="mb-5 text-xl font-extrabold text-white">
            {props.header}{" "}
          </h2>
          <p className="text-white">{props.description}</p>
        </div>
      </motion.div>{" "}
    </div>
  );
}

export default OpacityCards;
