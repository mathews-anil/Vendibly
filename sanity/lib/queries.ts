import { defineQuery } from "next-sanity";

export const guidesQuery = defineQuery(`*[_type == "guide"]{
  title,
  "slug": slug.current,
  excerpt,
  coverImage
}`);

export const guideBySlugQuery = defineQuery(`*[_type == "guide" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  excerpt,
  coverImage,
  body,
  faqs,
  ctaButton,
  seoTitle,
  seoDescription,
  ogImage,
  _createdAt,
  _updatedAt
}`);

export const vendorsQuery = defineQuery(`*[_type == "vendorProfile"]{
  title,
  "slug": slug.current,
  vendorName,
  category
}`);

export const vendorBySlugQuery = defineQuery(`*[_type == "vendorProfile" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  vendorName,
  category,
  whatItIsFor,
  billing,
  invoices,
  howVendiblyHelps,
  faqItems,
  seoTitle,
  seoDescription,
  _createdAt,
  _updatedAt
}`);

export const useCasesQuery = defineQuery(`*[_type == "useCase"]{
  title,
  "slug": slug.current,
  heroHeading,
  heroSubheading
}`);

export const useCaseBySlugQuery = defineQuery(`*[_type == "useCase" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  heroHeading,
  heroSubheading,
  bodySections,
  finalCTA,
  faqs,
  seoTitle,
  seoDescription,
  _createdAt,
  _updatedAt
}`);
