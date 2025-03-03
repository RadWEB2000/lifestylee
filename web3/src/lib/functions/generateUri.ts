export default function generateUri(...parts: (string | undefined)[]): string {
  const segments = parts.filter((part) => part);
  return `/${segments.join("/")}`;
}
