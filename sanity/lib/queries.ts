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

export const vendorBySlugQuery =
  defineQuery(`*[_type == "vendorProfile" && slug.current == $slug][0]{
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
