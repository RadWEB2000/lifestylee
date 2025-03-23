import css from "@/views/Article/Hero/Hero.module.scss";
import { Breadcrumbs } from "@/ui/Breadcrumbs";
import Image from "next/image";
import { FaRegClock, FaRegCalendarAlt } from "react-icons/fa";
import { ShareSocials } from "@/ui/ShareSocials";

export default function Hero(){
    return (
        <header className={css.wrapper} >
            <div className={css.breadcrumbs} >
                <Breadcrumbs
                    items={[
                        {
                            label:'Start',
                            uri:'#'
                        },
                        {
                            label:'Rozwój osobisty',
                            uri:'#'
                        },
                        {
                            label:'Wiedza',
                            uri:'#'
                        },
                        {
                            label:'Odkryj najciekawsze blogi ogólnotematyczne – Gdzie znaleźć inspirujące treści?',
                            uri:'#'
                        },
                    ]}
                />
            </div>
            <section className={css.container} >
                <h1 className={css.title} >Odkryj najciekawsze blogi ogólnotematyczne – Gdzie znaleźć inspirujące treści?
                </h1>
                <p className={css.excerpt} >Blogi ogólnotematyczne cieszą się ogromną popularnością. To miejsca, gdzie można znaleźć praktyczne porady, inspiracje oraz fachowe artykuły na przeróżne tematy – od zdrowia i urody, po technologię i biznes. W tym artykule przedstawiamy trzy interesujące portale, które warto odwiedzić.</p>
                <div className={css.informations} >
                    <div  className={css.details} >
                        <p className={css.detail}>
                            <i className={css.detail__icon}>
                            <FaRegClock />
                            </i>
                            <span className={css.detail__label}>21min</span>
                        </p>
                        <p className={css.detail}>
                            <i className={css.detail__icon}>
                            <FaRegCalendarAlt />
                            </i>
                            <span className={css.detail__label}>21 kwi 2024</span>
                        </p>
                    </div>
                    <div className={css.share} >
                        <ShareSocials/>
                    </div>
                </div>
            </section>
            <figure className={css.media} >
                <Image
                    alt="Makaron jest the best"
                    className={css.image} 
                    fill
                    src="https://images.pexels.com/photos/2693212/pexels-photo-2693212.png?auto=compress&cs=tinysrgb&w=1200"
                    priority
                    loading="eager"
                    quality={40}
                    title="Kasza jest do dupy"
                />
            </figure>
        </header>
    )
}