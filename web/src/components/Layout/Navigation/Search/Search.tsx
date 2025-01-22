import css from "@/nav/Search/Search.module.scss";
import { SearchIcon } from "@/ico/index";

export default function Search() {
  return (
    <form action="/search" className={css.wrapper}>
      <input
        className={css.field}
        type="search"
        name=""
        id=""
        placeholder="Czego szukasz?"
      />
      <button className={css.button} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}
