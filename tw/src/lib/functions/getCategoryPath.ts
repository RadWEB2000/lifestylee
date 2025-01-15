export default function getCategoryPath(path: string): string {
  if (path.startsWith("/category/")) {
    return path.replace("/category", "");
  } else {
    return path;
  }
}
