import css from "@/ui/Search/Search.module.scss";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <form className={css.wrapper}>
      <input className={css.field} placeholder="Szukaj" type="search" name="" id="" />
      <button type="submit" className={css.button}>
        <FaSearch  />
      </button>
    </form>
  );
}
