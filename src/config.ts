export const SITE = {
  website: "https://blog.rduffy.uk/",
  author: "Ryan Duffy",
  profile: "https://blog.rduffy.uk/",
  desc: "Technical deep-dives into AI infrastructure, local LLM performance tuning, and automation engineering",
  title: "Ryan Duffy - Building with AI",
  ogImage: "astropaper-og.jpg",
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
