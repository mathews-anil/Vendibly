"use client";

import Layout from "@/components/layout";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ReactNode } from "react";
import QueryProvider from "./query-provider";

gsap.registerPlugin(ScrollTrigger);

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <QueryProvider>
      <Layout>{children}</Layout>
    </QueryProvider>
  );
};

export default Providers;
