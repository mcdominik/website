import type { SiteConfig } from "./types";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "./locales";

const siteConfig: SiteConfig = {
  // Basic site information
  siteUrl: "https://mixedmatrixarts.com",
  title: {
    en: "Software & Electronics Tutorials",
    pl: "Tutoriale Programowania i Elektroniki",
  },
  description: {
    en: "Step-by-step tutorials and guides for software engineering, Arduino, Raspberry Pi, and electronics projects. Learn programming, embedded systems, and hardware development through hands-on projects.",
    pl: "Tutoriale krok po kroku i przewodniki dla programowania, Arduino, Raspberry Pi i projektów elektronicznych. Naucz się programowania, systemów wbudowanych i rozwoju sprzętu poprzez praktyczne projekty.",
  },

  // Author information
  author: {
    name: {
      en: "Mixed Matrix Arts",
      pl: "Mixed Matrix Arts",
    },
    email: "mojspecjalnyadres@gmail.com",
    avatar: "/img/avatar.webp",
    bio: {
      en: "Creator of software engineering and electronics tutorials. Teaching Arduino, Raspberry Pi, embedded systems, and programming through YouTube videos and detailed guides.",
      pl: "Twórca tutoriali z programowania i elektroniki. Nauczanie Arduino, Raspberry Pi, systemów wbudowanych i programowania poprzez filmy YouTube i szczegółowe przewodniki.",
    },
  },

  // Blog settings
  postsPerPage: 10,
  featuredImageFallback: "/img/posts/placeholder.svg",

  // Contact & social links
  contactLinks: [
    {
      id: "youtube",
      label: {
        en: "YouTube",
        pl: "YouTube",
      },
      url: {
        en: "https://www.youtube.com/@mixed-matrix-arts",
        pl: "https://www.youtube.com/@mixed-matrix-arts",
      },
      icon: "▶️",
    },
    {
      id: "github",
      label: {
        en: "GitHub",
        pl: "GitHub",
      },
      url: {
        en: "https://github.com/mcdominik",
        pl: "https://github.com/mcdominik",
      },
      iconSvg: `<svg
  stroke="currentColor"
  fill="currentColor"
  stroke-width="0"
  viewBox="0 0 1024 1024"
  class="icon"
  height="1em"
  width="1em"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
</svg>`,
    },
    {
      id: "linkedin",
      label: {
        en: "LinkedIn",
        pl: "LinkedIn",
      },
      url: {
        en: "https://linkedin.com/in/dom-mac",
        pl: "https://linkedin.com/in/dom-mac",
      },
      icon: "💼",
    },
    {
      id: "instagram",
      label: {
        en: "Instagram",
        pl: "Instagram",
      },
      url: {
        en: "https://www.instagram.com/mixedmatrixarts/",
        pl: "https://www.instagram.com/mixedmatrixarts/",
      },
      icon: "📸",
    },
  ],

  projects: [
    {
      id: "prism-qr",
      url: "https://github.com/prism-qr/prism-qr",
      label: {
        en: "Prism QR",
        pl: "Prism QR",
      },
      iconSvg: `<svg
  stroke="currentColor"
  fill="currentColor"
  stroke-width="0"
  viewBox="0 0 1024 1024"
  class="icon"
  height="1em"
  width="1em"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
</svg>`,
    },
  ],

  categories: {
    projects: {
      enabled: true,
      path: "/projects",
      icon: "🛠️",
      label: {
        en: "Projects",
        pl: "Projekty",
      },
      description: {
        en: "Showcase of my work and open-source contributions",
        pl: "Wystawa moich projektów i wkładu w otwarty kod źródłowy",
      },
    },
    tutorial: {
      enabled: true,
      path: "/tutorial",
      icon: "📚",
      label: {
        en: "Tutorials",
        pl: "Tutoriale",
      },
      description: {
        en: "Step-by-step tutorials and guides",
        pl: "Tutoriale krok po kroku i przewodniki",
      },
    },
    guides: {
      enabled: true,
      path: "/guides",
      icon: "🎓",
      label: {
        en: "Guides",
        pl: "Przewodniki",
      },
      description: {
        en: "Quick guides and explanations",
        pl: "Szybkie przewodniki i wyjaśnienia",
      },
    },
  },

  navigation: [
    {
      id: "about",
      labelKey: "ui.about",
      translationKey: "about",
    },
  ],

  // Feature toggles
  features: {
    darkMode: true,
    search: true,
    rss: true,
    sitemap: true,
    imageLightbox: true,
    postNavigation: true,
    readingTime: true,
    viewCounter: false,
  },

  // SEO & Meta tags
  seo: {
    defaultImage: "/img/avatar.webp",
    twitterHandle: "mixedmatrixarts",
    googleAnalytics: "",
  },

  // Language settings
  defaultLanguage: DEFAULT_LOCALE,
  languages: [...SUPPORTED_LOCALES],

  // Date format settings
  dateFormats: {
    en: {
      locale: "en-US",
      options: {
        year: "numeric",
        month: "long",
        day: "numeric",
      },
      compactOptions: {
        year: "2-digit",
        month: "short",
        day: "numeric",
      },
    },
    pl: {
      locale: "pl-PL",
      options: {
        year: "numeric",
        month: "long",
        day: "numeric",
      },
      compactOptions: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
    },
  },
};

export default siteConfig;
export type { SiteConfig } from "./types";
export {
  SUPPORTED_LOCALES,
  SUPPORTED_LOCALES as SUPPORTED_LANGUAGES,
} from "./locales";
