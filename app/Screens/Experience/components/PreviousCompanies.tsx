import { InfiniteMovingCards } from "./ScrollingCards";

function PreviousCompanies() {
  return (
    <div className="z-0 flex h-[25vh] flex-col items-center justify-center">
      {" "}
      <h3 className="text-3xl text-[#FFF700]">
        {"  "}
        PREVIOUS COMPANIES INCLUDE
      </h3>
      <InfiniteMovingCards className="" pauseOnHover={false} speed="fast" />
    </div>
  );
}

export default PreviousCompanies;
