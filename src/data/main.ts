import { subdomains, t_subdomain } from "@/data/subdomains";
type t_main = {
  subdomains: t_subdomain[];
  menu?: tLink[];
  nav?: {
    brand: {
      main: tLink;
      category?: tLink;
    };
    menu: Array<
      tLink & {
        submenu?: tLink[];
        size?: "small" | "regular" | "big";
      }
    >;
    settings: {
      search: {
        placeholder: "Szukaj";
      };
    };
  };
};

const main: t_main = {
  subdomains: subdomains,
};

export default main;
