import css from '@/blocks/Blocks.module.scss'

import Image from "next/image";

export default function Picture(props:T_CORE_IMAGE_BLOCK){
    return (
        <figure
            className={css.picture}
            id={props.anchor}
        >
            <Image
                alt={props.alt}
                className={css.image}
                height={450}
                loading="lazy"
                src={props.url}
                quality={55}
                title={props.title}
                width={720}
            />
            {
                props.caption &&
                <figcaption
                className={css.caption}
                >
                    {props.caption}
                </figcaption>
            }
        </figure>
    )
}