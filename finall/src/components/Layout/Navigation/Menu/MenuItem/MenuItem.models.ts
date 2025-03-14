import { AnchorHTMLAttributes } from "react";

export type tMenuItem = {
  variant: "regular" | "dropdown";
  label: string;
  uri: string;
  props?: AnchorHTMLAttributes<HTMLAnchorElement>;
};
