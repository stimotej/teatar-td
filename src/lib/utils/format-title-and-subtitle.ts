import clearHtmlFromString from "./clear-html-from-string";

export const formatTitleAndSubtitle = (fullTitle: string) => {
  const cleanedTitle = clearHtmlFromString(fullTitle)
    .replace(/&nbsp;|\u00A0/g, " ")
    .trim();

  const colonIndex = cleanedTitle.indexOf(":");

  if (colonIndex === -1) {
    return { title: cleanedTitle, subtitle: undefined };
  }

  const subtitle = cleanedTitle.substring(0, colonIndex + 1).trim();
  const title = cleanedTitle.substring(colonIndex + 1).trim();

  return { title, subtitle };
};
