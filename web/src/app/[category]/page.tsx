import { generateUri } from "@/func/index";
import GET_CATEGORY from "@/queries/GET_CATEGORY";
import Link from "next/link";
import Image from "next/image";

type tCategoryPage = {
  params: Promise<{
    category: string;
    url: {
      pathname: string;
      search: string;
    };
  }>;
};

export default async function CategoryPage(props: tCategoryPage) {
  const { category } = await props.params;
  const pathname = generateUri(category);
  const { content, posts, title } = await GET_CATEGORY(pathname);
  return (
    <div>
      <div>
        <h1>Podkategoria: {title}</h1>
        <h2>Pathname : {pathname}</h2>
        <p dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <ul>
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
                <p dangerouslySetInnerHTML={{ __html: item.excerpt }} />
              </Link>
            );
          })}
      </ul>
    </div>
  );
}
