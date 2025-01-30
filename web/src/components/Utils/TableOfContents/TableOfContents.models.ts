export type tTableOfContents = {
  attributesJSON: string;
  saveContent: string;
};

export type tTableOfContentsAttrs = {
  title: string;
  headings: Array<{
    content: string;
    level: number;
    link: string;
  }>;
};

export type tTableOfContentsElements = {
  title: string;
  elements: Array<{
    content: string;
    level: number;
    link: string;
  }>;
};
