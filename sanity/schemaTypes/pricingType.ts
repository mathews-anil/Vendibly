import { defineArrayMember, defineField, defineType } from "sanity";

export const pricingType = defineType({
  name: "pricing",
  title: "Pricing",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
      description: "E.g. Pricing for Startups",
    }),
    defineField({
      name: "subtitle",
      title: "Section Subtitle",
      type: "string",
      description: "Short supporting copy shown above plans",
    }),
    defineField({
      name: "plans",
      title: "Plans",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", title: "Plan Name", type: "string" }),
            defineField({
              name: "price",
              title: "Price",
              type: "string",
              description: "E.g. 0, 9, 29",
            }),
            defineField({
              name: "cadence",
              title: "Cadence",
              type: "string",
              description: "E.g. /mo, /yr",
            }),
            defineField({
              name: "subtitle",
              title: "Plan Subtitle",
              type: "string",
            }),
            defineField({
              name: "badge",
              title: "Badge",
              type: "string",
              description: "Optional badge like Most Popular",
            }),
            defineField({
              name: "features",
              title: "Features",
              type: "array",
              of: [{ type: "string" }],
            }),
            defineField({
              name: "ctaText",
              title: "CTA Text",
              type: "string",
              description: "Button label",
            }),
            defineField({
              name: "ctaUrl",
              title: "CTA URL",
              type: "url",
              description: "Button link",
            }),
          ],
        }),
      ],
    }),
  ],
});
