import Lottie from "lottie-react";
import error from "../../../assets/error.json";
import Footer from "../../Layout/Footer/Footer";
import Nav from "../../Layout/NavBar/Nav";
import { SparklesCore } from "../WebsiteIntroSection/Components/Sparkles";
import { useAppSelector } from "../../../Hooks/ReduxHooks";
import { useEffect } from "react";
function ErrorScreen() {
  const mode = useAppSelector((state) => state.app.mode);

  let color;
  if (mode === "dark") {
    color = "#ffffff";
  } else {
    color = "#000000";
  }
  useEffect(() => {}, [color]);

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      {" "}
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={50}
        className="h-screen w-screen"
        particleColor={color}
      ></SparklesCore>{" "}
      <Nav className="absolute left-0 top-0" />
      <div className="absolute bottom-40">
        {" "}
        <h1 className="dark:text-primaryContentDark rounded-lg py-2 text-center text-2xl font-extrabold text-primaryContent sm:text-4xl md:text-4xl lg:text-6xl xl:text-7xl">
          WHERE ARE WE?
        </h1>
        <h1 className="dark:text-primaryContentDark rounded-lg py-2 text-center text-xl font-extralight uppercase text-primaryContent sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl">
          Error 404 - I Think We Are Going To The Middle Of No Where.
        </h1>
      </div>
      <div className="absolute top-40 w-6/12 overflow-hidden sm:w-4/12 md:w-4/12 lg:w-4/12 xl:w-2/12">
        <Lottie
          className=""
          loop={true}
          autoPlay={true}
          animationData={error}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
          }}
        />
      </div>
      <Footer className="absolute bottom-0" />{" "}
    </div>
  );
}

export default ErrorScreen;
