import {defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export const guideType = defineType({
  name: 'guide',
  title: 'Guide',
  type: 'document',
  icon: DocumentTextIcon,
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
      name: 'excerpt',
      title: 'Excerpt / Short Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean',
      description: 'Show this guide in the What We Are Offering section on homepage',
      initialValue: false,
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description (for homepage)',
      type: 'text',
      rows: 2,
      description: 'Brief description shown on homepage offerings section (if featured)',
    }),
    defineField({
      name: 'icon',
      title: 'Icon Path',
      type: 'string',
      description: 'Icon path for homepage display (e.g., /icons/email-sync.png)',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
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
      name: 'ctaButton',
      title: 'CTA Button',
      type: 'object',
      fields: [
        {name: 'text', type: 'string', title: 'Button Text'},
        {name: 'url', type: 'url', title: 'Button URL'},
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
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
    }),
  ],
})
