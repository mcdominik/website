import siteConfig from "@config/site";
import {
  DEFAULT_LOCALE,
  LOCALE_LABELS,
  SUPPORTED_LOCALES,
  type LocaleCode,
} from "@config/locales";

type UiDictionary = Record<string, string>;

const fallbackTexts: UiDictionary = {
  "ui.categories": "Categories",
  "ui.profile": "Profile",
  "ui.projects": "Projects",
  "ui.projects_title": "Projects",
  "ui.projects_description": "Featured projects and experiments",
  "ui.contacts": "Contact",
  "ui.about": "About",
  "ui.technology": "Technology",
  "ui.technology_posts": "Technology Posts",
  "ui.technology_description":
    "Latest posts about technology, programming, and development",
  "ui.blog": "Blog",
  "ui.blog_posts": "Blog Posts",
  "ui.blog_description": "Personal thoughts, experiences, and insights",
  "ui.not_found": "Post not found",
  "ui.no_posts": "No posts yet",
  "ui.search": "Search",
  "ui.search_placeholder": "Search...",
  "ui.prev": "Prev",
  "ui.next": "Next",
  "ui.back": "Back",
  "ui.top": "Top",
  "ui.search_results_heading": "Search results",
  "ui.search_no_results": "No results found",
  "ui.page_not_found": "Page not found",
  "ui.404_message": "The page you are looking for does not exist.",
  "ui.ai_warning":
    "The content of this material is written or translated using AI",
  "ui.contents": "Contents",
  "ui.all_posts": "Mixed Matrix Arts Tutorials",
};

const getLocalizedValue = <T>(
  record: Record<LocaleCode, T>,
  code: LocaleCode
): T => {
  return record[code] ?? record[DEFAULT_LOCALE];
};

const getCategoryLabel = (
  categoryId: string,
  code: LocaleCode,
  fallback: string
): string => {
  const category = siteConfig.categories[categoryId];
  if (!category) {
    return fallback;
  }

  return category.label?.[code] ?? category.label?.[DEFAULT_LOCALE] ?? fallback;
};

const getCategoryDescription = (
  categoryId: string,
  code: LocaleCode,
  fallback: string
): string => {
  const category = siteConfig.categories[categoryId];
  if (!category) {
    return fallback;
  }

  return (
    category.description?.[code] ??
    category.description?.[DEFAULT_LOCALE] ??
    fallback
  );
};

const localeOverrides: Partial<Record<LocaleCode, Partial<UiDictionary>>> = {
  pl: {
    "ui.categories": "Kategorie",
    "ui.profile": "Profil",
    "ui.contacts": "Kontakt",
    "ui.about": "O mnie",
    "ui.not_found": "Post nie znaleziony",
    "ui.no_posts": "Brak postów",
    "ui.search": "Szukaj",
    "ui.search_placeholder": "Szukaj...",
    "ui.prev": "Poprzedni",
    "ui.next": "Następny",
    "ui.back": "Wróć",
    "ui.top": "Do góry",
    "ui.page_not_found": "Strona nie znaleziona",
    "ui.search_results_heading": "Wyniki wyszukiwania",
    "ui.search_no_results": "Brak wyników",
    "ui.404_message": "Strona, której szukasz, nie istnieje.",
    "ui.ai_warning":
      "Treść tego materiału została napisana lub przetłumaczona przy użyciu AI",
    "ui.contents": "Spis treści",
    "ui.all_posts": "Tutoriale Mixed Matrix Arts",
    "ui.blog_posts": "Blog",
    "ui.technology_posts": "Posty o technologii",
    "ui.projects_title": "Projekty",
    "ui.blog_description":
      "Osobiste przemyślenia, doświadczenia i spostrzeżenia",
    "ui.technology_description":
      "Najnowsze posty o technologii, programowaniu i rozwoju",
    "ui.projects_description": "Wybrane projekty i eksperymenty",
  },
};

const buildDictionary = (code: LocaleCode): UiDictionary => {
  const base: UiDictionary = { ...fallbackTexts };

  base.name = getLocalizedValue(siteConfig.author.name, code);
  base["ui.description"] = getLocalizedValue(siteConfig.description, code);

  base["ui.projects"] = getCategoryLabel("projects", code, base["ui.projects"]);
  base["ui.projects_title"] = getCategoryLabel(
    "projects",
    code,
    base["ui.projects_title"]
  );
  base["ui.projects_description"] = getCategoryDescription(
    "projects",
    code,
    base["ui.projects_description"]
  );

  base["ui.technology"] = getCategoryLabel(
    "technology",
    code,
    base["ui.technology"]
  );
  base["ui.technology_description"] = getCategoryDescription(
    "technology",
    code,
    base["ui.technology_description"]
  );

  base["ui.blog"] = getCategoryLabel("blog", code, base["ui.blog"]);
  base["ui.blog_description"] = getCategoryDescription(
    "blog",
    code,
    base["ui.blog_description"]
  );

  const overrides = localeOverrides[code] ?? {};
  return {
    ...base,
    ...(overrides as UiDictionary),
  };
};

export const languages: Record<LocaleCode, string> = { ...LOCALE_LABELS };

export const defaultLang = siteConfig.defaultLanguage ?? DEFAULT_LOCALE;

export const ui = SUPPORTED_LOCALES.reduce<Record<LocaleCode, UiDictionary>>(
  (acc, code) => {
    acc[code] = buildDictionary(code);
    return acc;
  },
  {} as Record<LocaleCode, UiDictionary>
);

export const showDefaultLang = false;
