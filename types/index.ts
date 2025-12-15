import { PortableTextBlock } from "sanity";

export interface GuideSection {
  title: string;
  content: PortableTextBlock[];
}

export interface Guide {
  title: string;
  slug: string;
  lead: string;
  coverImage?: any; // Sanity Image type
  settings?: {
    heroTag?: string;
    tocTitle?: string;
    sidebarCta?: {
      title?: string;
      text?: string;
      buttonText?: string;
      buttonUrl?: string;
    };
    bottomCta?: {
      title?: string;
      text?: string;
      buttonText?: string;
      buttonUrl?: string;
    };
  };
  sections: GuideSection[];
  seoTitle?: string;
  seoDescription?: string;
  _createdAt?: string;
  _updatedAt?: string;
}
