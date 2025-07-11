"use client";

import LinkButton from "@/components/ui/linkButton";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";
import { ArrowUpRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const routes = [
  {
    name: "Why Vendibly",
    href: "/#process",
  },
  {
    name: "How It Works",
    href: "/#how-it-works",
  },
  {
    name: "What You Get",
    href: "/#what-we-are-offering",
  },
  {
    name: "Pricing",
    href: "/#pricing",
  },
  {
    name: "FAQ",
    href: "/#faq",
  },
  {
    name: "Sign In",
    href: "/contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  useGSAP(() => {
    gsap.to(headerRef.current, {
      autoAlpha: 1,
      y: 0,
      ease: Power4.easeInOut,
      duration: 1,
    });
  }, {});
  return (
    <header
      ref={headerRef}
      className="fixed top-4 sm:top-8.5 left-0 w-full h-auto z-50 px-4 opacity-0 -translate-y-5"
    >
      {/* <div className="wrapper h-[78px] py-[13px] px-[15px] bg-white rounded-[23px] shadow-[0px_20px_42.8px_rgba(16,16,16,0.05)] flex items-center justify-between"> */}
      <div className="max-w-[1180px] w-full mx-auto h-14 sm:h-16 lg:h-[78px] lg:py-[13px] px-[15px] bg-white rounded-2xl lg:rounded-[23px] shadow-[0px_20px_42.8px_rgba(16,16,16,0.05)] flex items-center justify-between">
        <Link href={"/"} aria-label={"vendibly-logo"} className="">
          <div className="w-20 sm:w-[120px] lg:w-[164px] h-8">
            <Image
              src={"/imgs/logo.png"}
              alt={"vendibly-logo"}
              width={164}
              height={100}
              className={"w-full h-full object-contain"}
            />
          </div>
        </Link>
        <div className="max-lg:hidden">
          <ul className="flex gap-[17px] items-center">
            {routes.map((route, index) => (
              <li key={index} data-tooltip={route.name}>
                <Link
                  href={route.href}
                  className="font-inter text-base font-medium leading-[25.6.px] hover:text-app-green transition-colors duration-300 ease-in-out"
                  aria-label={route.name}
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-lg:hidden">
          <LinkButton href={"/"} text={"Signup"} className="rounded-[14px]" />
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden block">
          <Sheet>
            <SheetTrigger>
              <Menu color="#242e49" />
            </SheetTrigger>
            <SheetContent side={"right"} className="bg-white border-none px-0">
              {" "}
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>{" "}
              </SheetHeader>
              <div className="flex flex-col justify-between size-full px-3">
                <div>
                  <nav className="mt-10 flex flex-col">
                    {routes?.map((r) => (
                      <Link
                        key={r.name}
                        href={r.href}
                        className="p-3 text-lg font-semibold font-inter"
                      >
                        <SheetClose className="text-start w-full flex justify-between">
                          <span>{r.name}</span>
                          <ArrowUpRight color="#FF6A3D" />
                        </SheetClose>
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className="flex flex-col center gap-y-3 mt-10">
                  <LinkButton
                    href={"/"}
                    text={"Start Free"}
                    className="rounded-[14px] w-full"
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
