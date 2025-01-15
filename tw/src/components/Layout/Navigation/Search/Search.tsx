import css from "@/nav/Search/Search.module.scss";
import { tSearch } from "@/nav/Search/Search.models";
import { SearchIcon } from "@/ico/index";

export default function Search(props: tSearch) {
  return (
    <form className={css.wrapper} id={props.id} {...props.form.attributes}>
      <input
        className={css.field}
        id={props.id}
        name={props.id}
        placeholder={props.field.placeholder}
        type="search"
        {...props.field.attributes}
      />
      <button
        aria-label={props.button.title}
        className={css.button}
        id={props.id}
        type="submit"
        {...props.button.attributes}
      >
        <SearchIcon />
      </button>
    </form>
  );
}
