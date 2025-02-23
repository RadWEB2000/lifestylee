import { tSubdomains } from "@/nav/Subdomains/Subdomains.models";
import { tMenu } from "@/nav/Menu/Menu.models";
import { tExplorer } from "@/nav/Explorer/Explorer.models";

export type tNavigation = tSubdomains & {
  menu: tMenu;
  explorer:tExplorer;
};
