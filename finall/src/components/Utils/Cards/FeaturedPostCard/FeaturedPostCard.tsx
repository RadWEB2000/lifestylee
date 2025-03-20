import Image from "next/image";
import Link from "next/link";
import { FaRegClock, FaRegCalendarAlt } from "react-icons/fa";
import css from "@/ui/Cards/FeaturedPostCard/FeaturedPostCard.module.scss"

export default function FeaturedPostCard(){
    return (
        <Link className={css.wrapper} href="#">
            <figure className={css.media}>
                <Image
                    alt=""
                    className={css.image}
                    fill
                    loading="lazy"
                    src="https://images.pexels.com/photos/31197867/pexels-photo-31197867/free-photo-of-polina.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    title=""
                    quality={50}
                />
            </figure>
            <section className={css.container} >
                <header className={css.head} >
                    <ul className={css.taxonomy} >
                        <Link className={css.category} href="#">Programowanie</Link>
                        <Link className={css.subcategory} href="#">Kodowanie</Link>
                    </ul>
                    <h3 className={css.title}>Google’s Mueller Predicts Uptick Of Hallucinated Links: Redirect Or Not?</h3>
                </header>
                <p className={css.excerpt} >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque deserunt doloribus dignissimos laudantium qua...
                </p>
                <footer className={css.details} >
                    <p className={css.detail}><i className={css.detail__icon}><FaRegClock/></i><span className={css.detail__label}>21min</span></p>
                    <p className={css.detail}><i className={css.detail__icon}><FaRegCalendarAlt/></i><span className={css.detail__label}>21 kwi 2024</span></p>
                </footer>
            </section>
        </Link>
    )
}