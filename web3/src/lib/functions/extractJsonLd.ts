export default function extractJsonLd(rawData: string) {
  const jsonMatch = rawData.match(/<script[^>]*>([\s\S]*?)<\/script>/);
  if (jsonMatch && jsonMatch[1]) {
    try {
      return JSON.parse(jsonMatch[1]); // Dopiero teraz parsujemy JSON
    } catch (err) {
      console.error("Błąd parsowania JSON-LD:", err);
    }
  }
  return null;
}
