import { defineQuery } from "next-sanity";

export const guidesQuery = defineQuery(`*[_type == "guide"]{
  title,
  "slug": slug.current,
  excerpt,
  coverImage {
    asset->{
      url
    },
    alt
  }
}`);

export const guideBySlugQuery =
  defineQuery(`*[_type == "guide" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  lead,
  coverImage,
  settings,
  sections[]{
    title,
    content
  },
  seoTitle,
  seoDescription,
  _createdAt,
  _updatedAt
}`);

// Fetch Categories with their vendors
export const vendorCategoriesQuery =
  defineQuery(`*[_type == "vendorCategory"] | order(title asc) {
    title,
    "id": slug.current,
    "color": colorTheme,
    description,
    "vendors": *[_type == "vendorProfile" && references(^._id)] | order(title asc) {
      title,
      "slug": slug.current,
      shortDescription
    }
}`);

// Fetch Single Vendor by Slug
export const vendorBySlugQuery =
  defineQuery(`*[_type == "vendorProfile" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  shortDescription,
  "category": category->title,
  "categoryId": category->slug.current,
  features,
  howVendiblyHelps,
  faqItems,
  seoTitle,
  seoDescription,
  _createdAt,
  _updatedAt
}`);

export const useCasesQuery =
  defineQuery(`*[_type == "useCase" && defined(category)] | order(category asc) {
  title,
  "slug": slug.current,
  category,
  shortDescription,
  cardIcon {
    asset->{
      url
    },
    alt
  }
}`);

export const useCaseBySlugQuery =
  defineQuery(`*[_type == "useCase" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  theme,
  
  // Hero
  heroBadge,
  heroHeading,
  heroSubheading,
  heroButtonText,
  heroButtonUrl,
  heroFooterText,

  // Sections
  problemSection,
  stackSection,
  solutionSection,
  scenariosSection,

  // Pricing
  pricingSection{
    badge,
    title,
    subtitle,
    pricingRef->{
      title,
      subtitle,
      plans[]{
        name,
        price,
        cadence,
        subtitle,
        badge,
        features,
        ctaText,
        ctaUrl
      }
    }
  },

  // FAQs
  faqSection,

  // CTA
  finalCTA,

  seoTitle,
  seoDescription,
  _createdAt,
  _updatedAt
}`);
