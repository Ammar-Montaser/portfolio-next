import { cn } from "@/lib/cn";
import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  // direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const logos = [
    {
      id: 2,
      lightUrl: "https://www.cdnlogo.com/logos/v/98/vodafone-2017.svg",
      darkUrl: "https://www.cdnlogo.com/logos/v/98/vodafone-2017.svg",
    },
    {
      id: 4,
      lightUrl: "https://www.cdnlogo.com/logos/s/72/souq-primary-en.svg",
      darkUrl: "https://www.cdnlogo.com/logos/s/72/souq-primary-en.svg",
    },

    {
      id: 1,
      lightUrl: "https://www.cdnlogo.com/logos/a/33/amazon-com.svg",
      darkUrl: "https://www.cdnlogo.com/logos/a/83/amazon-com.svg",
    },
  ];
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const mode = useAppSelector((state) => state.appSlice.mode);

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
        "scroller relative z-20 mx-auto max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      {" "}
      <ul
        ref={scrollerRef}
        className={cn(
          "flex h-full w-max min-w-full shrink-0 flex-nowrap gap-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {logos.map((item) => (
          <li
            className="relative flex h-full w-[350px] max-w-full flex-shrink-0 flex-col items-center justify-center rounded-2xl px-8 py-6 md:w-[450px]"
            key={item.id}
          >
            <Image
              className="object-fill"
              src={mode == "light" ? item.lightUrl : item.darkUrl}
              alt=""
              width={350}
              height={350}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
