import css from '@/blocks/Blocks.module.scss';

export default function Paragraph(props:T_CORE_PARAGRAPH_BLOCK){
    return (
        <p
            className={css.paragraph}
            dangerouslySetInnerHTML={{__html:props.content}}
            id={props.anchor}
        />
    )
}