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
    base: `duration-150 linear px-2 rounded-sm w-fit whitespace-nowrap focus:bg-[#FFC017] hover:bg-[#FFC017]`,
    primary: `font-semibold py-1 px-2 text-xl lg:text-lg`,
    secondary: `py-1 text-base`
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
