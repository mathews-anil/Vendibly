"use client";

import ElementSVG from "@/components/element-svg";
import IconMark from "@/components/icons/icon-mark";
import IconX from "@/components/icons/icon-x";
import SectionHeader from "@/components/section-header";
import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";
import Image from "next/image";
import { useRef } from "react";

const Before = [
    "Vendor chaos",
    "Missed subscription renewals",
    "Scattered contracts",
    "Manual tracking",
];

const After = [
    "All-in-one dashboard",
    "Smart renewal alerts",
    "Auto-organized vault",
    "AI-powered summaries",
];

const ProcessSection = () => {
    const leftElement = useRef(null);
    const rightElement = useRef(null);
    const header = useRef(null);
    const centerElement = useRef(null);

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: "#process",
                start: "top 80%",
            },
            defaults: { ease: Power4.easeInOut, duration: 1 },
        })
            .to(header.current, { autoAlpha: 1 })
            .to(centerElement.current, { autoAlpha: 1 }, "-=0.7")
            .to(
                [leftElement.current, rightElement.current],
                {
                    autoAlpha: 1,
                    x: 0,
                },
                "-=0.7"
            );
    }, {});

    return (
        <section className="pb-24 md:pb-32 pt-12 2xl:pb-[174px] relative">
            <ElementSVG className="w-16 sm:w-24 md:w-32 lg:w-40 2xl:w-fit absolute top-[-5%] sm:top-0 2xl:-top-0 left-[5%] 2xl:left-[200px]" />
            <div className="wrapper space-y-2.75">
                <SectionHeader
                    text="Process"
                    title="Before / After"
                    ref={header}
                    className="opacity-0"
                />
                <div className="md:hidden block w-[200px] mx-auto my-10">
                    <Image
                        src="/imgs/process-img.png"
                        alt="Comparison of vendor chaos before Vendibly and an organized subscription dashboard after Vendibly."
                        width={404}
                        height={415}
                        className="img"
                    />
                </div>
                {/* Content */}
                <div className="grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] md:gap-[70px] gap-10 items-center mt-[70px]">
                    <div
                        ref={leftElement}
                        className="w-full flex flex-col items-end text-right space-y-4 sm:space-y-8 lg:space-y-10 -translate-x-5 opacity-0"
                    >
                        <h2 className="text-nowrap text-xl/[22.4px] sm:text-2xl/[20.8px] lg:text-[28px]/[24.2px] font-outfit font-semibold text-app-orange">
                            Before Vendibly:
                        </h2>
                        <ul className="lg:space-y-5.5 space-y-4">
                            {Before.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex w-full justify-end items-center gap-2 lg:gap-4"
                                >
                                    <p className="text-sm/[18px] sm:text-base/[20.8px] lg:text-xl/[25px] font-inter font-medium">
                                        {item}
                                    </p>
                                    <div className="shrink-0 size-8 sm:size-10 lg:size-[60px] rounded-md sm:rounded-[10px] bg-app-orange center">
                                        <IconX className="w-3.5 sm:w-4 lg:w-5.5" />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div
                        className="md:block hidden w-[300px] lg:w-[404px] lg:h-[415px] opacity-0"
                        ref={centerElement}
                    >
                        <Image
                            src="/imgs/process-img.png"
                            alt="Comparison of vendor chaos before Vendibly and an organized subscription dashboard after Vendibly."
                            width={404}
                            height={415}
                            className="img"
                        />
                    </div>

                    <div
                        ref={rightElement}
                        className="w-full flex flex-col items-start text-left space-y-4 sm:space-y-8 lg:space-y-10 translate-x-5 opacity-0"
                    >
                        <h2 className="text-nowrap text-xl/[22.4px] sm:text-2xl/[20.8px] lg:text-[28px]/[24.2px] font-outfit font-semibold text-app-green">
                            After Vendibly:
                        </h2>
                        <ul className="lg:space-y-5.5 space-y-4">
                            {After.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex w-full justify-start items-center gap-2 lg:gap-4"
                                >
                                    <div className="shrink-0 size-8 sm:size-10 lg:size-[60px] rounded-md sm:rounded-[10px] bg-app-green center">
                                        <IconMark className="w-3.5 sm:w-4 lg:w-5.5" />
                                    </div>
                                    <p className="text-sm/[18px] sm:text-base/[20.8px] lg:text-xl/[25px] font-inter font-medium">
                                        {item}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
