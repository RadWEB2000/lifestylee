import clsx from "clsx";
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

type menuItem = {
  attributes?: AnchorHTMLAttributes<HTMLAnchorElement>;
  label: string;
  uri: string;
  variant: "primary" | "secondary";
};

export default function MenuItem(props: menuItem) {
  return (
    <Link className="" href={props.uri} hrefLang="pl_PL" {...props.attributes}>
      {props.label}
    </Link>
  );
}
