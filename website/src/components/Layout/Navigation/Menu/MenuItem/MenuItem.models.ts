import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export type tMenuItem = { 
    isDropdown?:boolean;
    isSubmenu?:boolean;
    attributes?: {
        link?:AnchorHTMLAttributes<HTMLAnchorElement>;
        button?:ButtonHTMLAttributes<HTMLButtonElement>
    }
} & Omit<tLink,'props'>;