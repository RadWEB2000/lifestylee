import { tSubdomains } from "@/nav/Subdomains/Subdomains.models";
import { tMenu } from "@/nav/Menu/Menu.models";

export type tNavigation = tSubdomains & {
  menu: tMenu;
};
