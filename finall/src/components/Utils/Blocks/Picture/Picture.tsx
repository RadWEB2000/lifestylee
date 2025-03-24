import css from "@/ui/Blocks/Picture/Picture.module.scss";
import Image from "next/image";

export default function Picture() {
  return (
    <figure className={css.wrapper}>
      <Image
        alt=""
        className={css.image}
        loading="lazy"
        src="https://images.pexels.com/photos/19343014/pexels-photo-19343014/free-photo-of-mezczyzna-piasek-kurz-pyl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title=""
        height={500}
        width={700}
      />
      <figcaption className={css.caption}>
        kolei cera sucha wymaga serum
      </figcaption>
    </figure>
  );
}
