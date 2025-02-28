import css from "@/ui/Buttons/PrimaryButton/PrimaryButton.module.scss";
import Link from "next/link";
import { FaArrowRightLong as Arrow } from "react-icons/fa6";
import { tPrimaryButton } from "@/ui/Buttons/PrimaryButton/PrimaryButton.models";
export default function PrimaryButton(props: tPrimaryButton) {
  return (
    <Link
      className={css.wrapper}
      href={props.uri}
      hrefLang="pl_PL"
      itemProp="url"
      rel="index follow"
    >
      <span className={css.label}>{props.label}</span>
      <i className={css.icon}>
        <Arrow />
      </i>
    </Link>
  );
}
