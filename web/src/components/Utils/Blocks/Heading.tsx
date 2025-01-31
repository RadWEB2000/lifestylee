import css from '@/blocks/Blocks.module.scss';

export default function Heading(props:T_CORE_HEADING_BLOCK){
    switch(props.level) {
        case 1:
            return <h1 className={`${css.heading} ${css.h1}`} id={props.anchor} >{props.content}</h1>
        case 2: 
            return <h2 className={`${css.heading} ${css.h2}`}  id={props.anchor} >{props.content}</h2>
        case 3:
            return <h3 className={`${css.heading} ${css.h3}`}  id={props.anchor} >{props.content}</h3>
        case 4:
            return <h4 className={`${css.heading} ${css.h4}`}  id={props.anchor} >{props.content}</h4>
        case 5:
            return <h5 className={`${css.heading} ${css.h5}`}  id={props.anchor} >{props.content}</h5>
        case 6:
            return <h6 className={`${css.heading} ${css.h6}`}  id={props.anchor} >{props.content}</h6>
    }
}