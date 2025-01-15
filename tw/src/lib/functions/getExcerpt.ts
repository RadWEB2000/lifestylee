export default function getExcerpt(excerpt: string, length: number): string {
  const stripedExcerpt =
    excerpt.length === length
      ? excerpt
      : `${excerpt.substring(0, length - 4)} [...]`;
  return stripedExcerpt;
}
