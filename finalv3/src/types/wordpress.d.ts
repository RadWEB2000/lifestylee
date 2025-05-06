export { }

declare global {

    type WP_REST_API_POSTS = {
        date: string;
        link: string;
    }

    type WP_REST_API_CATEGORIES = {
        link: string;
    }
}