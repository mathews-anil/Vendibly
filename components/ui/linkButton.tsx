import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  text: string;
  icon?: React.ReactNode;
  className?: string;
  iconSize?: number;
  moveUp?: boolean;
  isDisabled?: boolean;
};

const LinkButton = ({
  href,
  text,
  icon,
  className,
  iconSize,
  moveUp,
  isDisabled,
}: Props) => {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex gap-2 px-6 h-[52px] rounded-[14px] center bg-app-green text-white text-lg leading-5.5 text-nowrap font-semibold font-outfit hover:scale-105 hover:shadow-[0px_10px_20px_rgba(0,201,153,0.25)] transition-all duration-300 ease-in-out group/link",
        className,
        isDisabled && "opacity-50 pointer-events-none",
      )}
    >
      {text}
      {icon && (
        <div
          className={cn("overflow-hidden")}
          style={{ height: iconSize, width: iconSize }}
        >
          <div
            className={cn(
              "flex duration-300 transition-transform",
              moveUp
                ? "flex-col translate-y-0 translate-x-0 group-hover/link:-translate-y-1/2 group-hover/link:translate-x-full"
                : "flex-row -translate-x-1/2 group-hover/link:translate-x-0",
            )}
            style={{
              height: moveUp ? iconSize && iconSize * 2 : iconSize,
              width: moveUp ? iconSize : iconSize && iconSize * 2,
            }}
          >
            {icon}
            <span className={moveUp ? "-translate-x-full" : ""}>{icon}</span>
          </div>
        </div>
      )}
    </Link>
  );
};

export default LinkButton;
