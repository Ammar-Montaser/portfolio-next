import { cn } from "@/lib/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "m-2 grid auto-rows-[17rem] max-sm:grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-4 max-w-8xl mx-auto   ",
        className
      )}
    >
      {children}
    </div>
  );
};
