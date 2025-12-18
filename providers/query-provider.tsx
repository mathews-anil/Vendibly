"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/query-client";
import { ReactNode } from "react";

export default function QueryProvider({ children }: { children: ReactNode }) {
  // NOTE: Avoid OOP components and use functions for data fetching
  // if you want to use the same query client on the server and client.
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
