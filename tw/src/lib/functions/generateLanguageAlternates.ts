export default function generateLanguageAlternates(
  alternateLocales: string | string[] | null,
  canonicalUrl: string
): Record<string, string> | undefined {
  if (!alternateLocales) {
    return undefined;
  }

  if (Array.isArray(alternateLocales)) {
    return alternateLocales.reduce((acc, locale) => {
      acc[locale] = `${canonicalUrl}?lang=${locale}`;
      return acc;
    }, {} as Record<string, string>);
  }

  return { [alternateLocales]: canonicalUrl };
}
