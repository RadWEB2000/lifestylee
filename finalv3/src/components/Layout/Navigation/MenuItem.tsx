import clsx from "clsx";
import Link from "next/link";

type menuItem = {
  label: string;
  uri: string;
  variant: "primary" | "secondary";
};

export default function MenuItem(props: menuItem) {
  const styles = clsx(
    "text-xs md:text-sm lg:text-md uppercase focus:bg-slate-200 hover:bg-slate-200 duration-150 ease-linear ",
    props.variant === "primary" && "font-bold px-1 py-2 rounded-md ",
    props.variant === "secondary" &&
      "font-medium  text-center px-2 py-1 rounded-md"
  );

  return (
    <Link className={styles} href={props.uri} hrefLang="pl_PL">
      {props.label}
    </Link>
  );
}
