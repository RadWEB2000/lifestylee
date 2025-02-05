import GET_POSTS from "@/queries/GET_POSTS";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  const posts = await GET_POSTS();
  return (
    <div>
      <div>
        {posts &&
          posts.map((item) => {
            return (
              <Link href={item.uri} key={item.title} title={item.title}>
                <Image
                  alt={item.image.altText}
                  height={531.25}
                  src={item.image.sourceUrl}
                  width={850}
                  style={{
                    objectFit: "cover",
                  }}
                  title={item.image.title}
                  quality={55}
                />
                <h3>{item.title}</h3>
                <strong>{item.release}</strong>
                <p dangerouslySetInnerHTML={{ __html: item.excerpt }} />
              </Link>
            );
          })}
      </div>
    </div>
  );
}
