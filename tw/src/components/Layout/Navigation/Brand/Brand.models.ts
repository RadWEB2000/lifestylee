import { AnchorHTMLAttributes } from "react";

export type tBrand = {
  brand: {
    title: string;
    url: string;
    attributes?: AnchorHTMLAttributes<HTMLAnchorElement>;
  };
  subbrand?: {
    title: string;
    url: string;
    color: string;
    attributes?: AnchorHTMLAttributes<HTMLAnchorElement>;
  };
};
