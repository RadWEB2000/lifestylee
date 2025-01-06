export type tMenu = {
   menu ?: Array<{
        id:string;
        link:tLink;
        submenu?:Array<tLink> ;
   }>
        
}