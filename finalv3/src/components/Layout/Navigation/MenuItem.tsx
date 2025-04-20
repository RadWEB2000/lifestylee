import clsx from "clsx";
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

type menuItem = {
  attributes?: AnchorHTMLAttributes<HTMLAnchorElement>;
  label: string;
  uri: string;
  variant: "primary" | "secondary";
};

export default function MenuItem({
  label,
  uri,
  variant,
  attributes
}: menuItem) {
  const styles = {
    base: `duration-150 linear px-2 rounded-sm w-fit focus:bg-slate-200 hover:bg-slate-200`,
    primary: `font-semibold text-lg`,
    secondary: `py-1`
  };

  return (
    <Link
      className={clsx(
        styles.base,
        variant === "primary" && styles.primary,
        variant === "secondary" && styles.secondary
      )}
      href={uri}
      hrefLang="pl_PL"
      {...attributes}
    >
      {label}
    </Link>
  );
}
