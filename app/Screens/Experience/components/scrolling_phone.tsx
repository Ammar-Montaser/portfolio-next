import { cn } from "@/lib/cn";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingPhones = ({
  // direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const images = [
    {
      id: 1,
      url: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/HypeMaterial%2FclientAppScreenshots%2Fphone_r1-min.png?alt=media&token=7624410e-5406-4139-8902-65f8fa61cf4c",
    },

    {
      id: 2,
      url: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/HypeMaterial%2FclientAppScreenshots%2Fphone_r2-min.png?alt=media&token=e98d3b26-26bb-45a3-8af5-ce38b6be8557",
    },

    {
      id: 3,
      url: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/HypeMaterial%2FclientAppScreenshots%2Fphone_r3-min.png?alt=media&token=09bacfc7-c48c-4368-916d-231c24935fda",
    },

    {
      id: 4,
      url: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/HypeMaterial%2FclientAppScreenshots%2Fphone_r4-min.png?alt=media&token=1caa9a18-be9a-4639-a7c4-5097d63b157d",
    },

    {
      id: 5,
      url: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/HypeMaterial%2FclientAppScreenshots%2Fphone_r5-min.png?alt=media&token=2e93483f-8ced-41b5-bbe2-83532fe76c77",
    },
    {
      id: 6,
      url: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/HypeMaterial%2FclientAppScreenshots%2Fphone_r6-min.png?alt=media&token=51062a8b-46b0-4f16-aa1d-0046bda830cf",
    },
  ];
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      // getDirection();
      getSpeed();
      containerRef.current.style.setProperty(
        "--animation-iteration-count",
        "infinite",
      );
      containerRef.current.addEventListener("animationiteration", () => {
        toggleDirection();
      });
      const toggleDirection = () => {
        if (containerRef.current) {
          const currentDirection = containerRef.current.style.getPropertyValue(
            "--animation-direction",
          );
          containerRef.current.style.setProperty(
            "--animation-direction",
            currentDirection === "forwards" ? "reverse" : "forwards",
          );
        }
      };
      setStart(true);
    }
  }

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 mx-auto mt-4 w-[150%] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {images.map((item) => (
          <li
            className="relative flex w-[350px] max-w-full flex-shrink-0 flex-col items-center justify-center rounded-2xl px-8 md:w-[500px]"
            key={item.id}
          >
            <Image src={item.url} alt="" width={500} height={300} />
          </li>
        ))}
      </ul>
    </div>
  );
};
