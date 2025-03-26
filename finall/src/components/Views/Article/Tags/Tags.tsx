import css from "@/views/Article/Tags/Tags.module.scss";
import Link from "next/link";

const tags = ["ewa wrzosek", "jacek ozdoba", "prokutatura", "prokuratorzy"];

export default function Tags() {
  return (
    <ul className={css.wrapper}>
      {tags.map((item, index) => {
        return (
          <Link className={css.tag} href="" key={`${index}-${item}`}>
            {`#${item}`}
          </Link>
        );
      })}
    </ul>
  );
}
