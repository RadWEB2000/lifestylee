import { tSubdomains } from "@/nav/Subdomains/Subdomains.models";
import { tBrand } from "@/nav/Brand/Brand.models";
import { tMenuButton } from "@/nav/Settings/MenuButton/MenuButton.models";
import { tExplorer } from "@/nav/Explorer/Explorer.models";

export type tNavigation = tSubdomains & {
  brand: tBrand;
  menuButton: tMenuButton;
  explorer: tExplorer;
};
