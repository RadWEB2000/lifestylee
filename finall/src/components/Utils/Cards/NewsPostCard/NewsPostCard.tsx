import css from "@/ui/Cards/NewsPostCard/NewsPostCard.module.scss";
import Link from "next/link";

export default function NewsPostCard() {
  return (
    <Link className={css.wrapper} href="#">
      <h4 className={css.title}>
        New Cybersecurity Bot Attack Defense Helps SaaS Apps Stay Secure
      </h4>
      <p className={css.release}>21 kwi 2025</p>
    </Link>
  );
}
