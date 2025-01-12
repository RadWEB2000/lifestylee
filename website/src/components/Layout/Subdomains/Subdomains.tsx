import css from './Subdomains.module.css';
import Link from "next/link";
import { CSSProperties } from "react";

export type Subdomain = tLink & {
    color:string;
}

type Subdomains = {
    subdomains:Array<Subdomain>;
}

export default function Subdomains(props:Subdomains){
    return (
        <menu
            className={css.wrapper}
        >
            {
                props.subdomains.map((item) => {
                    return (
                        <Link
                        className={css.item}
                            href={item.url}
                            hrefLang='pl_PL'
                            key={item.title}
                            style={{
                                '--subdomainColor':item.color
                            } as CSSProperties}
                            {...item.props}
                        >
                            {item.title}
                        </Link>
                    )
                })
            }
        </menu>
    )
}