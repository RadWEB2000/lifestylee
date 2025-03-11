import Link from "next/link";
import {
  LuArrowUpRight as Arrow,
  LuCalendar as Calendar,
  LuClock as Clock
} from "react-icons/lu";

// This is a base component with shared functionality
// Not meant to be used directly, but extended by specific card variants
export default function BaseBlogCard({
  readingTime,
  release,
  slug,
  title
}: {
  readingTime: number;
  release: string;
  slug: string;
  title: string;
}) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:shadow-md">
      {/* Content will be provided by extending components */}
      <h2>{title}</h2>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center text-xs text-muted-foreground">
          <Calendar className="mr-1 h-3 w-3" />
          <span>{formatDate(release)}</span>
        </div>

        <div className="flex items-center text-xs text-muted-foreground">
          <Clock className="mr-1 h-3 w-3" />
          <span>{readingTime} min read</span>
        </div>
      </div>

      <Link
        href={`/blog/${slug}`}
        className="mt-4 inline-flex items-center text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        Read Article <Arrow className="ml-1 h-3 w-3" />
      </Link>
    </article>
  );
}
