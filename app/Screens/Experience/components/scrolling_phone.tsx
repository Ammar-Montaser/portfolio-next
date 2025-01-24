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
      id: 3,
      url: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/landingPage%2Fthird.png?alt=media&token=73432de9-39bd-4493-9d92-cb5f490c48dc",
    },
    {
      id: 4,
      url: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/landingPage%2Ffourth.png?alt=media&token=e8abc8a0-65b3-47b9-bec8-3d944c09ff55",
    },
    {
      id: 2,
      url: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/landingPage%2Fsecond.png?alt=media&token=b9b0ca37-30ef-4d37-8604-2abcb832ddd2",
    },
    {
      id: 5,
      url: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/landingPage%2Ffifth.png?alt=media&token=ada3abe1-3060-449a-b15a-7aa1244b8aff",
    },
    {
      id: 10,
      url: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/landingPage%2Ftenth.png?alt=media&token=7cb2ad2b-1fa8-4272-9250-e2df5901b9f6",
    },
    {
      id: 1,
      url: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/landingPage%2Ffirst.png?alt=media&token=4c17c5e1-6394-4b18-a94f-66b26dd733f5",
    },
    {
      id: 6,
      url: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/landingPage%2Fsixth.png?alt=media&token=a51c9934-489a-465d-bda4-4a2760acbc73",
    },
    {
      id: 7,
      url: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/landingPage%2Fseventh.png?alt=media&token=0721dc70-d967-4ce1-8403-7e8198a7b78a",
    },
    // {
    //   id: 8,
    //   url: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/landingPage%2Feighth.png?alt=media&token=072f6c37-5e91-4aed-a1bd-128b5b7e390a",
    // },
    {
      id: 9,
      url: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/landingPage%2Fninth.png?alt=media&token=02d5e00a-8807-4d9c-a0b8-3beb5475d2fe",
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
        "scroller relative z-20 mx-auto mt-20 w-[150%] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex h-full w-max min-w-full shrink-0 flex-nowrap gap-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {images.map((item) => (
          <li
            className="relative flex h-full w-[350px] max-w-full flex-shrink-0 flex-col items-center justify-center rounded-2xl px-8 py-6 md:w-[500px]"
            key={item.id}
          >
            <Image
              className="object-fill"
              src={item.url}
              alt=""
              width={500}
              height={300}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
