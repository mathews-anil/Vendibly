"use client";

import { cn } from "@/lib/utils";
import React, { ButtonHTMLAttributes } from "react";

const Button = (
    props: {
        variant: "primary" | "secondary" | "text";
        icon?: React.ReactNode;
        iconSize?: number;
        moveUp?: boolean;
        text?: string;
    } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
    const {
        className,
        children,
        variant,
        text,
        icon,
        iconSize,
        moveUp,
        ...rest
    } = props;
    return (
        <button
            className={cn(
                variant === "primary" &&
                    "bg-app-green text-white hover:shadow-[0px_10px_20px_rgba(0,201,153,0.25)]",
                variant === "secondary" &&
                    "bg-app-orange text-white hover:shadow-[0px_10px_20px_rgba(255,106,61,0.25)]",
                "inline-flex gap-2 px-6 h-[52px] rounded-[14px] center  text-lg leading-5.5 text-nowrap font-semibold font-outfit cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out group/button",
                className
            )}
            {...rest}
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
                                ? "flex-col translate-y-0 translate-x-0 group-hover/button:-translate-y-1/2 group-hover/button:translate-x-full"
                                : "flex-row -translate-x-1/2 group-hover/button:translate-x-0"
                        )}
                        style={{
                            height: moveUp
                                ? iconSize && iconSize * 2
                                : iconSize,
                            width: moveUp ? iconSize : iconSize && iconSize * 2,
                        }}
                    >
                        {icon && (
                            <>
                                {icon}
                                <span
                                    className={
                                        moveUp ? "-translate-x-full" : ""
                                    }
                                >
                                    {icon}
                                </span>
                            </>
                        )}

                        {children && children}
                    </div>
                </div>
            )}
        </button>
    );
};

export default Button;
