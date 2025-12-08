import {defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export const vendorProfileType = defineType({
  name: 'vendorProfile',
  title: 'Vendor Profile',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'vendorName',
      title: 'Vendor Name',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
    defineField({
      name: 'whatItIsFor',
      title: "What it's for",
      type: 'blockContent',
    }),
    defineField({
      name: 'billing',
      title: 'Billing',
      type: 'blockContent',
    }),
    defineField({
      name: 'invoices',
      title: 'Invoices',
      type: 'blockContent',
    }),
    defineField({
      name: 'howVendiblyHelps',
      title: 'How Vendibly Helps',
      type: 'blockContent',
    }),
    defineField({
      name: 'faqItems',
      title: 'FAQ Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'question', type: 'string', title: 'Question'},
            {name: 'answer', type: 'text', title: 'Answer'},
          ],
        },
      ],
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
    }),
  ],
})
