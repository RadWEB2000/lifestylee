import Link from "next/link";
import {tRegularBlogCard} from "@/utils/BlogCards/RegularBlogCard/RegularBlogCard.models";
import Image from "next/image";
import { getReleaseDate } from "@/lib/functions";
import css from '@/utils/BlogCards/RegularBlogCard/RegularBlogCard.module.scss';
import { FaCalendarAlt as Calendar} from "react-icons/fa";


export default function RegularBlogCard(props:tRegularBlogCard){
    console.log(props.release)
    return (
        <Link
            className={css.wrapper}
            href={props.uri}
            hrefLang="pl_PL"
            prefetch
            title={props.title}
        >
            <picture
                className={css.media}
            >
                <Image
                    alt={props.image.altText ? props.image.altText : ''}
                    className={css.image}
                    fill
                    loading="lazy"
                    src={props.image.sourceUrl}
                    title={props.title}
                    quality={30}
                />
            </picture>
            <section
                className={css.container}
            >
                <h3 className={css.title} >{props.title}</h3>
                <p className={css.excerpt} dangerouslySetInnerHTML={{__html:props.excerpt.substring(0,92) + '...'}} />
                <p className={css.release} ><i className={css.release__icon} ><Calendar/></i><span className={css.release__text}>{props.release}</span></p>
                <ul
                    className={css.taxonomy}
                >
                    <Link
                        className={css.category}
                        href={props.category.uri}
                        hrefLang="pl_PL"
                        prefetch
                    >
                        {props.category.name}
                    </Link>
                    <Link
                        className={css.subcategory}
                        href={props.subcategory.uri}
                        hrefLang="pl_PL"
                        prefetch
                    >
                        {props.subcategory.name}
                    </Link>
                </ul>
            </section>
        </Link>

    )
}