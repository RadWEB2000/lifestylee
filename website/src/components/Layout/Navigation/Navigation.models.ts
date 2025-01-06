import { tBrand } from "@/nav/Brand/Brand.models";
import { tSearch } from "@/nav/Search/Search.models";
import { tMenu } from "./Menu/Menu.models";

export type tNavigation = tBrand & {
  search: tSearch;
  menu:Array<tMenu>
};
