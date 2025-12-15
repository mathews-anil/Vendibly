import { createClient } from "next-sanity";
import { loadEnvConfig } from "@next/env";
import fs from "fs";
import path from "path";

// Load environment variables from .env.local using Next.js helper
loadEnvConfig(process.cwd());

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !dataset || !token) {
  console.error("Missing required environment variables:");
  if (!projectId) console.error("- NEXT_PUBLIC_SANITY_PROJECT_ID");
  if (!dataset) console.error("- NEXT_PUBLIC_SANITY_DATASET");
  if (!token) console.error("- SANITY_API_TOKEN");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  useCdn: false, // We need fresh data and we are writing
  apiVersion: "2024-01-01", // Or your preferred version
});

const DATA_FILE = path.join(process.cwd(), "sanity/data/guides_import.json");

async function importGuides() {
  try {
    const rawData = fs.readFileSync(DATA_FILE, "utf-8");
    const guides = JSON.parse(rawData);

    console.log(`Found ${guides.length} guides to export.`);

    for (const guide of guides) {
      console.log(`Creating guide: ${guide.title}`);

      // Ensure we have a valid slug string for the ID
      const slugCurrent = guide.slug?.current || guide.slug;

      if (!slugCurrent || typeof slugCurrent !== "string") {
        console.warn(`Skipping guide "${guide.title}": Invalid slug`);
        continue;
      }

      await client.createOrReplace({
        _id: `guide-${slugCurrent}`,
        _type: "guide",
        ...guide,
        // Ensure slug is correctly formatted as an object if it isn't already (though JSON has it)
        slug: {
          _type: "slug",
          current: slugCurrent,
        },
        settings: {
          heroTag: "Vendibly Guides",
          tocTitle: "Table of Contents",
          sidebarCta: {
            title: "Get organized today",
            text: "Stop tracking subscriptions manually.",
            buttonText: "Start Free",
            buttonUrl: "https://app.vendibly.ai/signup",
          },
          bottomCta: {
            title: "Start tracking your subscriptions automatically",
            text: "Join thousands of founders, freelancers, and agencies who trust Vendibly to manage their software spend.",
            buttonText: "Get Started for Free",
            buttonUrl: "https://app.vendibly.ai/signup",
          },
        },
      });
      console.log(`  -> Saved: guide-${slugCurrent}`);
    }

    console.log("Import completed successfully.");
  } catch (error) {
    console.error("Error importing guides:", error);
    process.exit(1);
  }
}

importGuides();
