import css from "@/ui/Blocks/Heading/Heading.module.scss";

type tHeading = {
  level: 2 | 3 | 4;
};

export default function Heading(props: tHeading) {
  switch (props.level) {
    case 2:
      return (
        <h2 className={`${css.heading} ${css.h2}`}>
          Jak zadbać o⁣ zdrowe włosy w 2025?
        </h2>
      );
    case 3:
      return (
        <h3 className={`${css.heading} ${css.h3}`}>
          Jak zadbać o⁣ zdrowe włosy w 2025?
        </h3>
      );
    case 4:
      return (
        <h4 className={`${css.heading} ${css.h4}`}>
          Jak zadbać o⁣ zdrowe włosy w 2025?
        </h4>
      );
  }
}
