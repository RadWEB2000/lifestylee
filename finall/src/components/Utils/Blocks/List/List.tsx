import css from "@/ui/Blocks/List/List.module.scss";
type tList = {
  variant: "ordered" | "unordered";
};

export default function List(props: tList) {
  if (props.variant === "ordered") {
    return (
      <ol className={css.ordered}>
        <li>lorem1</li>
        <li>lorem2</li>
        <li>lorem3</li>
        <li>lorem4</li>
        <li>lorem5</li>
        <li>lorem6</li>
        <li>lorem7</li>
        <li>lorem8</li>
        <li>lorem9</li>
        <li>lorem10</li>
        <li>lorem11</li>
        <li>lorem12</li>
        <li>lorem13</li>
        <li>lorem14</li>
        <li>lorem15</li>
      </ol>
    );
  } else {
    return (
      <ul className={css.unordered}>
        <li>lorem1</li>
        <li>lorem2</li>
        <li>lorem3</li>
        <li>lorem4</li>
        <li>lorem5</li>
        <li>lorem6</li>
      </ul>
    );
  }
}
