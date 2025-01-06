import css from '@/nav/Menu/MenuItem/MenuItem.module.css';
import {tMenuItem} from '@/nav/Menu/MenuItem/MenuItem.models';
import Link from 'next/link';
import { ArrowDownIcon } from '@/assets/icons';

export default function MenuItem(props:tMenuItem){
    if(props.isDropdown){
        <div
            className={css.wrapper}
            role='group'
        >
            <Link
                className={css.link}
                href={props.url}
                {...props.attributes?.link}
            >
                {props.title}
            </Link>
            <button
                className={css.button}
                {...props.attributes?.button}

            >
                <ArrowDownIcon
                    attributes={{
                        className:css.icon
                    }}
                />
            </button>
        </div>
    }else {
        return (
            <Link
                className={css.link}
                data-submenu={props.isSubmenu}
                href={props.url}
                {...props.attributes?.link}
            >
                {props.title}
            </Link>
        )
    }
}