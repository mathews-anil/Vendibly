"use client";

import Layout from "@/components/layout";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

const Providers = ({ children }: { children: ReactNode }) => {
  return <Layout>{children}</Layout>;
};

export default Providers;
