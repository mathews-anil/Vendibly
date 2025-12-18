"use client";

import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { client } from "@/sanity/lib/client";
import { vendorCategoriesQuery } from "@/sanity/lib/queries";
import HubHero from "./components/hub/hub-hero";
import HubMobileNav from "./components/hub/hub-mobile-nav";
import HubSidebar from "./components/hub/hub-sidebar";
import HubGrid from "./components/hub/hub-grid";
import HubCTA from "./components/hub/hub-cta";

export interface Vendor {
  title: string;
  slug: string;
  shortDescription?: string;
}

export interface VendorCategory {
  title: string;
  id: string;
  color: "blue" | "green" | "orange";
  description?: string;
  vendors: Vendor[];
}

interface VendorHubViewProps {
  categories: VendorCategory[];
}

export default function VendorHubView({
  categories: initialCategories,
}: VendorHubViewProps) {
  const { data: categories } = useQuery({
    queryKey: ["vendor-categories"],
    queryFn: async () => {
      const fetchedCategories = await client.fetch(vendorCategoriesQuery);
      return (fetchedCategories || []) as VendorCategory[];
    },
    initialData: initialCategories,
  });

  const [activeCategory, setActiveCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = categories
    .map((cat: VendorCategory) => ({
      ...cat,
      vendors: cat.vendors.filter(
        (v) =>
          v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (v.shortDescription &&
            v.shortDescription
              .toLowerCase()
              .includes(searchQuery.toLowerCase()))
      ),
    }))
    .filter((cat) => cat.vendors.length > 0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentId = "";
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top < 150) currentId = section.id;
      });
      setActiveCategory(currentId);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <HubHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <HubMobileNav
        categories={categories}
        activeCategory={activeCategory}
        scrollToCategory={scrollToCategory}
        visible={!searchQuery}
      />

      <div className="wrapper px-4 md:px-6 py-12 md:py-16">
        <div className="lg:grid lg:grid-cols-12 gap-12 relative items-start">
          <HubSidebar
            categories={categories}
            activeCategory={activeCategory}
            scrollToCategory={scrollToCategory}
            visible={!searchQuery}
          />

          <HubGrid
            categories={filteredCategories}
            isSearching={!!searchQuery}
          />
        </div>
      </div>

      <HubCTA />
    </div>
  );
}
