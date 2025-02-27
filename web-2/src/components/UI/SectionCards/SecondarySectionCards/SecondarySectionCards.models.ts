export type tSecondarySectionCards = {
  title: string;
  content: string;
  button?: {
    label: string;
    uri: string;
  };
  cards?: Array<tCommonBlogCard>;
};
