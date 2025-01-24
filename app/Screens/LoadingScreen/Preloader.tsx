import Lottie from "lottie-react";

import "./Preloader.css";
import blackCat from "../../../assets/blackCat.json";
import ChatBubble from "./Components/ChatBubble";
import { useAppSelector } from "../../../Hooks/ReduxHooks";

function Preloader(props: { advice: string }) {
  const error = useAppSelector((state) => state.app.error);

  return (
    <div className="preloader h-50 flex flex-col items-center justify-center justify-items-center">
      <h1 className="hidden">Ammar Montaser's Portfolio</h1>
      <h2 className="dark:text-primaryContentDark rounded-lg py-2 text-2xl font-extrabold text-primaryContent sm:text-4xl md:text-4xl lg:text-6xl xl:text-7xl">
        LOADING MY PORTFOLIO
      </h2>
      {error.length ? (
        <ChatBubble msg={error} />
      ) : (
        <ChatBubble msg={props.advice} />
      )}

      <div className="absolute bottom-0 w-5/6 sm:w-4/6 md:w-3/6 lg:w-2/4 xl:w-2/6">
        <Lottie
          className=""
          loop={false}
          autoPlay={true}
          animationData={blackCat}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
          }}
        />
      </div>
    </div>
  );
}

export default Preloader;
