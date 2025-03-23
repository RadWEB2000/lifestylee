import css from "@/views/Category/Posts/Posts.module.scss"
import { RegularPostCard } from "@/ui/Cards";

export default function Posts(){
    return (
        <div className={css.wrapper} >
            <ul className={css.cards}>
                <RegularPostCard/>
                <RegularPostCard/>
                <RegularPostCard/>
                <RegularPostCard/>
                <RegularPostCard/>
                <RegularPostCard/>
                <RegularPostCard/>
                <RegularPostCard/>
                <RegularPostCard/>
                <RegularPostCard/>
                <RegularPostCard/>
                <RegularPostCard/>
                <RegularPostCard/>
                <RegularPostCard/>
                <RegularPostCard/>
                <RegularPostCard/>
                <RegularPostCard/>
                <RegularPostCard/>
                <RegularPostCard/>
                <RegularPostCard/>
                <RegularPostCard/>
                <RegularPostCard/>
                <RegularPostCard/>
                <RegularPostCard/>
            </ul>
            <ul className={css.pagination} >
                    <li className={css.pagination__item} >1</li>
                    <li className={css.pagination__item} >2</li>
                    <li className={css.pagination__item} >3</li>
                    <li className={css.pagination__item} >4</li>
                    <li className={css.pagination__item} >5</li>
                    <li className={css.pagination__item} >6</li>
                    <li className={css.pagination__item} >7</li>
                    <li className={css.pagination__item} >8</li>
                    <li className={css.pagination__item} >9</li>
                    <li className={css.pagination__item} >10</li>
                    <li className={css.pagination__item} >11</li>
                    <li className={css.pagination__item} >12</li>
            </ul>
        </div>
    )
}