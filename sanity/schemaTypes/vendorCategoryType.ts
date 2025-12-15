import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";

export const vendorCategoryType = defineType({
  name: "vendorCategory",
  title: "Vendor Category",
  type: "document",
  icon: TagIcon,
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
      name: "colorTheme",
      title: "Color Theme",
      type: "string",
      options: {
        list: [
          { title: "Blue (App Blue)", value: "blue" },
          { title: "Green (App Green)", value: "green" },
          { title: "Orange (App Orange)", value: "orange" },
        ],
      },
      initialValue: "blue",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
  ],
});
