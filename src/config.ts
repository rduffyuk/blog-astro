import type { GiscusProps } from "@giscus/react";

export const SITE = {
  website: "https://blog.rduffy.uk/",
  author: "Ryan Duffy",
  profile: "https://blog.rduffy.uk/",
  desc: "Building AI infrastructure. Documenting the journey from context window overflow to self-documenting systems.",
  title: "Ryan Duffy - Building with AI",
  ogImage: "og.png",
  lightAndDarkMode: true,
  postPerIndex: 8,
  postPerPage: 8,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/rduffyuk/blog-astro/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/London", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;

// Giscus comments configuration
// To activate: enable GitHub Discussions on rduffyuk/blog-astro,
// install the Giscus app (https://github.com/apps/giscus),
// then get your repoId and categoryId from https://giscus.app
export const GISCUS: GiscusProps = {
  repo: "rduffyuk/blog-astro",
  repoId: "", // Get from https://giscus.app after enabling Discussions
  category: "Announcements",
  categoryId: "", // Get from https://giscus.app after enabling Discussions
  mapping: "pathname",
  reactionsEnabled: "1",
  emitMetadata: "0",
  inputPosition: "bottom",
  lang: "en",
  loading: "lazy",
};
