export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: {
    alt: string;
    src: string;
    title: string;
  };
  release: string;
  readingTime: number;
  category: {
    label: string;
    uri: string;
  };
  subcategory: {
    label: string;
    uri: string;
  };
  tags?: string[];
  //   featured?: boolean;
}
