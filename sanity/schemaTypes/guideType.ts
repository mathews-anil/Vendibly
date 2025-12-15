import { defineField, defineType, defineArrayMember } from "sanity";
import { BookIcon } from "@sanity/icons";

export const guideType = defineType({
  name: "guide",
  title: "Guide",
  type: "document",
  icon: BookIcon,
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
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description: "Title used for search engines and browser tabs",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
      description: "Description used for search engines",
    }),
    defineField({
      name: "lead",
      title: "Lead / Introduction",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
      description:
        'If true, this guide will appear in the "Who it\'s for" section on the homepage.',
    }),
    defineField({
      name: "icon",
      title: "Icon (URL)",
      type: "string",
      description:
        "Path to static icon (e.g. /icons/email-sync.png) for homepage display.",
    }),
    defineField({
      name: "sections",
      title: "Content Sections",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "section",
          title: "Section",
          fields: [
            defineField({
              name: "title",
              title: "Section Title",
              type: "string",
            }),
            defineField({
              name: "content",
              title: "Section Content",
              type: "array",
              of: [
                defineArrayMember({
                  type: "block",
                  styles: [
                    { title: "Normal", value: "normal" },
                    { title: "H3", value: "h3" },
                    { title: "H4", value: "h4" },
                    { title: "Quote", value: "blockquote" },
                  ],
                  lists: [
                    { title: "Bullet", value: "bullet" },
                    { title: "Numbered", value: "number" },
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "settings",
      title: "Layout Settings",
      type: "object",
      fields: [
        defineField({
          name: "heroTag",
          title: "Hero Tag",
          type: "string",
          initialValue: "Vendibly Guides",
        }),
        defineField({
          name: "tocTitle",
          title: "Table of Contents Title",
          type: "string",
          initialValue: "Table of Contents",
        }),
        defineField({
          name: "sidebarCta",
          title: "Sidebar CTA",
          type: "object",
          fields: [
            defineField({ name: "title", type: "string", title: "Title" }),
            defineField({ name: "text", type: "text", rows: 2, title: "Text" }),
            defineField({
              name: "buttonText",
              type: "string",
              title: "Button Text",
            }),
            defineField({
              name: "buttonUrl",
              type: "url",
              title: "Button URL",
            }),
          ],
        }),
        defineField({
          name: "bottomCta",
          title: "Bottom CTA",
          type: "object",
          fields: [
            defineField({ name: "title", type: "string", title: "Title" }),
            defineField({ name: "text", type: "text", rows: 3, title: "Text" }),
            defineField({
              name: "buttonText",
              type: "string",
              title: "Button Text",
            }),
            defineField({
              name: "buttonUrl",
              type: "url",
              title: "Button URL",
            }),
          ],
        }),
      ],
    }),
  ],
});
