import { InfiniteMovingPhones } from "./scrolling_phone";

function MovingIphones() {
  return (
    <div className="z-0 flex h-full flex-col items-center justify-center">
      <InfiniteMovingPhones className="" pauseOnHover={false} speed="fast" />
    </div>
  );
}

export default MovingIphones;
