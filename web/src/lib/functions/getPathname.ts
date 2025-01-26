import { headers } from "next/headers";

export default async function getPathname(){
    const headersList = await headers();
    const referer = headersList.get('referer') || '';

    try {
        const url = referer.startsWith('http') ? new URL(referer) : new URL(referer,'http://localhost');
        console.log(`pathname url: ${url.pathname}`)
        return url.pathname
    }catch (error) {
        console.log(`Error get pathname : ${error}`)
        return ''
    }

}
