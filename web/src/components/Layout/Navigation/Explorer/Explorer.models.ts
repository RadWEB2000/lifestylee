export type tExplorer = {
  button: string;
  menus: Array<{
    title: string;
    menu: Array<{
      name: string;
      slug: string;
      uri: string;
    }>;
  }>;
  title: string;
};
