import Image from "next/image";
import Link from "next/link";
import { LuClock as Clock } from "react-icons/lu";

export default function CompactBlogCard({
  category,
  slug,
  title,
  release,
  readingTime
}: {
  category: { slug: string; name: string };
  slug: string;
  title: string;
  release: string;
  readingTime: number;
}) {
  return (
    <article className="group flex gap-3">
      <Link href={`/blog/${slug}`} className="shrink-0">
        <div className="relative h-16 w-16 overflow-hidden rounded-md">
          <Image
            src={
              "https://images.pexels.com/photos/30988651/pexels-photo-30988651/free-photo-of-malpy-sniezne-relaksujace-sie-w-goracych-zrodlach-w-japonii.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt={"asd"}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col">
        {true && (
          <Link
            href={`/category/${category.slug}`}
            className="mb-1 text-xs font-medium text-primary"
          >
            {category.name}
          </Link>
        )}
        <Link
          href={`/blog/${slug}`}
          className="line-clamp-2 text-sm font-medium leading-tight transition-colors group-hover:text-primary"
        >
          {title}
        </Link>
        <div className="mt-1 flex items-center text-xs text-muted-foreground">
          <time dateTime={release}>
            {new Date(release).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric"
            })}
          </time>
          {true && (
            <>
              <span className="mx-1">•</span>
              <Clock className="mr-1 h-3 w-3" />
              <span>{readingTime} min</span>
            </>
          )}
        </div>
      </div>
    </article>
  );
}
