export { };

declare global {
    type t_changeFrequency = "yearly" | "always" | "hourly" | "daily" | "weekly" | "monthly" | "never" | undefined;

    type t_sitemapElement = {
        url: string;
        lastModified: string;
        priority: number;
        changeFrequency: t_changeFrequency;
    }
}