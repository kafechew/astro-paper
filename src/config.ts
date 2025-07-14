export const SITE = {
  website: "https://kheai.com/", 
  author: "Kai",
  profile: "https://www.linkedin.com/in/kheai",
  desc: "Minimal Path to Freedom. Timeless wisdom + modern tools (AI & Bitcoin) to reclaim health, clarity & autonomy.",
  title: "kheAI",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/kafechew/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Kuala_Lumpur", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
