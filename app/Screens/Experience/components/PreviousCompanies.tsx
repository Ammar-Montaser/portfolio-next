import { InfiniteMovingCards } from "./ScrollingCards";

function PreviousCompanies() {
  return (
    <div className="h-[25vh] z-0 flex flex-col justify-center items-center ">
      <InfiniteMovingCards className="" pauseOnHover={false} speed="fast" />
    </div>
  );
}

export default PreviousCompanies;
