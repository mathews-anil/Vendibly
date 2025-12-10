import { defineArrayMember, defineField, defineType } from "sanity";
import { BulbOutlineIcon } from "@sanity/icons";

export const useCaseType = defineType({
  name: "useCase",
  title: "Use Case",
  type: "document",
  icon: BulbOutlineIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Creators", value: "creators" },
          { title: "Freelancers", value: "freelancers" },
          { title: "Startups", value: "startups" },
          { title: "Agencies", value: "agencies" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "theme",
      title: "Theme (Design Style)",
      type: "string",
      options: {
        list: [
          { title: "Standard (Legacy)", value: "standard" },
          { title: "Startup (Green/Blue)", value: "startup" },
          { title: "Agency (Blue/Teal)", value: "agency" },
          { title: "Freelancer (Orange/Red)", value: "freelancer" },
        ],
      },
      initialValue: "startup",
    }),

    // --- Hero Section ---
    defineField({
      name: "heroBadge",
      title: "Hero Badge Text",
      type: "string",
      description: 'e.g. "Vendibly for Startups"',
    }),
    defineField({
      name: "heroHeading",
      title: "Hero Heading",
      type: "string",
      description:
        'Main heading text (e.g. "Track every SaaS subscription...")',
    }),
    defineField({
      name: "heroSubheading",
      title: "Hero Subheading",
      type: "text",
      rows: 3,
      description: "Subtitle text below the heading",
    }),
    defineField({
      name: "heroButtonText",
      title: "Hero Button Text",
      type: "string",
    }),
    defineField({
      name: "heroButtonUrl",
      title: "Hero Button URL",
      type: "url",
    }),
    defineField({
      name: "heroFooterText",
      title: "Hero Footer Text",
      type: "string",
      description:
        'Small text below button (e.g. "Connect Gmail or Outlook...")',
    }),

    // --- Problem Section ---
    defineField({
      name: "problemSection",
      title: "Problem Section",
      type: "object",
      fields: [
        defineField({ name: "badge", type: "string", title: "Badge Text" }),
        defineField({ name: "title", type: "string", title: "Section Title" }),
        defineField({
          name: "subtitle",
          type: "text",
          title: "Section Subtitle",
        }), // Added subtitle
        defineField({
          name: "sidebarQuote",
          type: "text",
          title: "Sticky Sidebar Quote",
          rows: 3,
        }),
        defineField({
          name: "points",
          title: "Problem Cards",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  type: "string",
                  title: "Point Title",
                }),
                defineField({
                  name: "description",
                  type: "text",
                  title: "Point Description",
                }),
                defineField({
                  name: "emoji",
                  type: "string",
                  title: "Emoji Icon",
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    // --- Stack Section ---
    defineField({
      name: "stackSection",
      title: "Stack Section",
      type: "object",
      fields: [
        defineField({ name: "badge", type: "string", title: "Badge Text" }), // Added badge
        defineField({ name: "title", type: "string", title: "Section Title" }),
        defineField({
          name: "subtitle",
          type: "text",
          title: "Section Subtitle",
        }), // Added subtitle
        defineField({
          name: "categories",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "categoryName",
                  type: "string",
                  title: "Category Name",
                }),
                defineField({
                  name: "color",
                  type: "string",
                  title: "Dot Color (Tailwind class, e.g. bg-pink-500)",
                }),
                defineField({
                  name: "tools",
                  type: "array",
                  of: [defineArrayMember({ type: "string" })],
                  title: "Tools List",
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    // --- Solution Section ---
    defineField({
      name: "solutionSection",
      title: "Solution Section",
      type: "object",
      fields: [
        defineField({ name: "badge", type: "string", title: "Badge Text" }), // Added badge
        defineField({ name: "title", type: "string", title: "Section Title" }),
        defineField({
          name: "subtitle",
          type: "text",
          title: "Section Subtitle",
        }), // Added subtitle
        defineField({
          name: "features",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  type: "string",
                  title: "Feature Title",
                }),
                defineField({
                  name: "description",
                  type: "text",
                  title: "Feature Description",
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    // --- Scenarios Section ---
    defineField({
      name: "scenariosSection",
      title: "Scenarios Section",
      type: "object",
      fields: [
        defineField({ name: "badge", type: "string", title: "Badge Text" }), // Added badge
        defineField({ name: "title", type: "string", title: "Section Title" }),
        defineField({
          name: "scenarios",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  type: "string",
                  title: "Scenario Title",
                }),
                defineField({
                  name: "description",
                  type: "text",
                  title: "Scenario Description",
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    // --- Pricing Section ---
    defineField({
      name: "pricingSection", // Changed from 'pricing' reference to explicit section object for badge/title control
      title: "Pricing Section UI",
      type: "object",
      fields: [
        defineField({ name: "badge", type: "string", title: "Badge Text" }),
        defineField({ name: "title", type: "string", title: "Section Title" }),
        defineField({
          name: "subtitle",
          type: "text",
          title: "Section Subtitle",
        }),
        // We still need the detailed reference for the actual plans
        defineField({
          name: "pricingRef",
          title: "Pricing Data Reference",
          type: "reference",
          to: [{ type: "pricing" }],
        }),
      ],
    }),

    // --- FAQ Section ---
    defineField({
      name: "faqSection", // Changed to object to include badge/title
      title: "FAQ Section",
      type: "object",
      fields: [
        defineField({ name: "badge", type: "string", title: "Badge Text" }),
        defineField({ name: "title", type: "string", title: "Section Title" }),
        defineField({
          name: "faqs",
          title: "Questions",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "question",
                  type: "string",
                  title: "Question",
                }),
                defineField({ name: "answer", type: "text", title: "Answer" }),
              ],
            }),
          ],
        }),
      ],
    }),

    // --- Final CTA ---
    defineField({
      name: "finalCTA",
      title: "Final CTA",
      type: "object",
      fields: [
        defineField({ name: "heading", type: "string", title: "CTA Heading" }),
        defineField({
          name: "subheading",
          type: "string",
          title: "CTA Subheading",
        }),
        defineField({
          name: "buttonText",
          type: "string",
          title: "Button Text",
        }),
        defineField({ name: "buttonUrl", type: "url", title: "Button URL" }),
        defineField({
          name: "footerText",
          type: "string",
          title: "Footer Text (e.g. No credit card...)",
        }),
      ],
    }),

    // --- SEO ---
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
    }),
  ],
});
