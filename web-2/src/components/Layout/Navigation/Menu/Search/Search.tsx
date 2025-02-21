import css from "@/nav/Menu/Search/Search.module.scss";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <form
      action="/szukaj"
      autoComplete="false"
      aria-label="Wyszukiwarka wpisów blogowych"
      className={css.wrapper}
      id="query"
      itemScope
      itemType={`${process.env.SCHEMA_LINK}SearchAction`}
      method="GET"
      name="query"
      role="search"
    >
      <input
        autoFocus
        aria-autocomplete="inline"
        aria-label="Znajdź wpis blogowy"
        className={css.field}
        datatype="string"
        id="query"
        inputMode="search"
        type="search"
        lang="pl_PL"
        minLength={3}
        multiple={false}
        name="query"
      />
      <button
        aria-label="Przycisk do wyszukiwania wpisów blogowych"
        autoFocus
        className={css.button}
        enterKeyHint="search"
        id="query"
        formTarget="query"
        type="submit"
      >
        <FaSearch />
      </button>
    </form>
  );
}
