import { tBrand } from "@/nav/Brand/Brand.models";
import { tSearch } from "@/nav/Search/Search.models";

export type tNavigation = tBrand & {
  search: tSearch;
};
