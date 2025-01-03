import { SearchIcon } from "@/ico/index";
import { tSearch } from "@/nav/Search/Search.models";
import css from "@/nav/Search/Search.module.css";

export default function Search(props: tSearch) {
  return (
    <form className={css.wrapper} {...props.form?.attributes}>
      <input
        className={css.field}
        placeholder="Szukaj"
        type="search"
        {...props.field?.attributes}
      />

      <button
        className={css.button}
        {...props.button?.attributes}
        type="submit"
      >
        <SearchIcon
          attributes={{
            className: css.icon,
          }}
        />
      </button>
    </form>
  );
}
