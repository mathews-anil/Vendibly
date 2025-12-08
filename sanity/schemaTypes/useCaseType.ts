import {defineField, defineType} from 'sanity'
import {BulbOutlineIcon} from '@sanity/icons'

export const useCaseType = defineType({
  name: 'useCase',
  title: 'Use Case',
  type: 'document',
  icon: BulbOutlineIcon,
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
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
    }),
    defineField({
      name: 'heroSubheading',
      title: 'Hero Subheading',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'bodySections',
      title: 'Body Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Section',
          fields: [
            {name: 'heading', type: 'string', title: 'Section Heading'},
            {name: 'content', type: 'blockContent', title: 'Content'},
            {name: 'image', type: 'image', title: 'Image'},
          ],
        },
      ],
    }),
    defineField({
      name: 'finalCTA',
      title: 'Final CTA',
      type: 'object',
      fields: [
        {name: 'heading', type: 'string', title: 'CTA Heading'},
        {name: 'subheading', type: 'string', title: 'CTA Subheading'},
        {name: 'buttonText', type: 'string', title: 'Button Text'},
        {name: 'buttonUrl', type: 'url', title: 'Button URL'},
      ],
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
