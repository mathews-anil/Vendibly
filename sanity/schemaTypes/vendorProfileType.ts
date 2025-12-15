import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

export const vendorProfileType = defineType({
  name: "vendorProfile",
  title: "Vendor Profile",
  type: "document",
  icon: UserIcon,
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
      name: "shortDescription",
      title: "Short Description (Hero)",
      type: "text",
      rows: 3,
      description: "Appears in the Hero section and on the card in the Hub.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: { type: "vendorCategory" },
      validation: (rule) => rule.required(),
    }),

    // Structured Features for "How it works", "Billing", "Invoices"
    defineField({
      name: "features",
      title: "Features (Cards)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Card Title",
              type: "string",
              initialValue: "How it works",
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              options: {
                list: [
                  { title: "Check / How it works", value: "check" },
                  { title: "Billing / Credit Card", value: "billing" },
                  { title: "Invoice / Document", value: "invoice" },
                ],
              },
              initialValue: "check",
            }),
            defineField({
              name: "items",
              title: "Bullet Points",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "icon",
            },
          },
        },
      ],
    }),

    defineField({
      name: "howVendiblyHelps",
      title: "How Vendibly Helps (Why it matters)",
      type: "blockContent",
    }),

    defineField({
      name: "faqItems",
      title: "FAQ Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", type: "string", title: "Question" },
            { name: "answer", type: "text", title: "Answer" },
          ],
        },
      ],
    }),
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
