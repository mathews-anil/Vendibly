import { cn } from "@/lib/utils";
import { forwardRef } from "react"; // 1. Import forwardRef

interface Props {
  text: string;
  title: string;
  className?: string;
}

// 2. Wrap the component in forwardRef and add the 'ref' parameter
const SectionHeader = forwardRef<HTMLDivElement, Props>(
  ({ text, title, className }, ref) => {
    return (
      // 3. Attach the ref to the desired DOM element
      <div
        ref={ref}
        className={cn("text-center space-y-3 lg:space-y-7", className)}
      >
        <div className="h-8 lg:h-10.5 inline-flex items-center gap-3 px-4 py-2 rounded-[20px] border border-[#052B31]/20">
          <div className="size-2 lg:size-2.25 rounded-full bg-app-orange"></div>
          <p className="text-sm lg:text-base leading-[26px] font-bold font-inter text-[#606075] uppercase">
            {text}
          </p>
        </div>
        <h1 className="title">{title}</h1>
      </div>
    );
  },
);

export default SectionHeader;
SectionHeader.displayName = "SectionHeader";
