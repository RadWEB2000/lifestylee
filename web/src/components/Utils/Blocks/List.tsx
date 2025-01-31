import css from '@/blocks/Blocks.module.scss'

export type tList = {
    wrapper:T_CORE_LIST_BLOCK;
    items?:Array<T_CORE_LIST_ITEM_BLOCK>;
}

export default function List(props:tList) {
    if(props.wrapper.ordered){
        return (
            <ol className={css.list} id={props.wrapper.anchor} >
                {
                    props.items && props.items.map((item) => {
                        return (
                            <li
                                className={css.list__item}
                                key={item.order}
                                dangerouslySetInnerHTML={{__html:item.content}}
                                id={item.anchor}
                            />
                        )
                    })
                }
            </ol>
        )
    }else {
        return (
            <ul className={css.list}  id={props.wrapper.anchor} >
                {
                    props.items && props.items.map((item) => {
                        return (
                            <li
                                className={css.list__item}
                                key={item.order}
                                dangerouslySetInnerHTML={{__html:item.content}}
                                id={item.anchor}
                            />
                        )
                    })
                }
            </ul>
        )
    }
}