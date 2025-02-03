import css from "@/blocks/Blocks.module.scss";
import Image from "next/image";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
export default function MediaWithText(props: T_CORE_MEDIA_WITH_TEXT_BLOCK) {
  return (
    <article className={css.mediaWithText}>
      <figure>
        <Image
          alt={props.image.alt}
          height={540}
          loading="lazy"
          src={props.image.url}
          title={props.image.alt}
          style={{
            objectFit: "cover",
          }}
          width={380}
        />
      </figure>
      <section>
        {props.content.map((item) => {
          if (item.name === "core/heading") {
            return <Heading key={item.content} {...item} />;
          } else {
            return <Paragraph key={item.content} {...item} />;
          }
        })}
      </section>
    </article>
  );
}
