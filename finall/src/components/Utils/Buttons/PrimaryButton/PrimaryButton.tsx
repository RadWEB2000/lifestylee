import { GoArrowRight as Arrow } from "react-icons/go";
import css from "@/ui/Buttons/PrimaryButton/PrimaryButton.module.scss";
import Link from "next/link";

export default function PrimaryButton() {
  return (
    <Link className={css.wrapper} href="#">
      <span className={css.label}>Czytaj więcej</span>
      <i className={css.icon}>
        <Arrow />
      </i>
    </Link>
  );
}
