import Link from "next/link";
import css from '@/ui/Cards/BlogCard/BlogCard.module.scss'
import {tBlogCard} from '@/components/UI/Cards/BlogCard/BlogCard.models'
import Image from "next/image";
export default function BlogCard(props:tBlogCard){
    function wrapperClassName (value:"big"|"recommended"|"regular" | "side"|string|null) {
        switch(value){
            case "big":
                return css.wrapper__big;
            case "recommended":
                return css.wrapper__recommended;
            case "regular":
                return css.wrapper__regular;
            case "side":
                return css.wrapper_side
            default:
                return css.wrapper__regular;
        }
    }
    return (
        <Link
            className={`${css.wrapper} ${props.variant && wrapperClassName(props.variant)}`}
            href={props.uri}
            itemScope
            itemType={`https://schema.org/BlogPosting`}
            title={`📖 Przeczytaj wpis pt. "${props.title}"`}
            itemProp="url"
        >
            <picture
                className={css.media}
            >
                <Image
                    alt={props.image.altText}
                    className={css.image}
                    fill
                    itemProp="image"
                    loading="lazy"
                    src={props.image.sourceUrl}
                    sizes={props.image.srcSet}
                    title={`📖 Przeczytaj wpis pt. "${props.title}"`}
                    quality={70}
                />
            </picture>
            <h3 className={css.title} dangerouslySetInnerHTML={{__html:props.title}} itemProp="headline" />
            <p
                className={css.excerpt}
                dangerouslySetInnerHTML={{__html:props.excerpt.substring(0,115) }}
                itemProp="description"
            />
            <footer
                className={css.details}
            >

                <time className={css.release} dateTime={`${new Date().getUTCDate()}`} itemProp="datePublished" >{props.release}</time>
                <ul
                    className={css.taxonomy}
                >
                    <Link
                        className={css.category}
                        href={props.category.uri}
                        hrefLang="pl_PL"
                        itemProp="articleSection"
                    >
                        {props.category.name}
                    </Link>
                    <Link
                        className={css.subcategory}
                        href={props.subcategory.uri}
                        hrefLang="pl_PL"
                        itemProp="articleSection"
                    >
                        {props.subcategory.name}
                    </Link>
                </ul>
            </footer>
        </Link>
    )
}