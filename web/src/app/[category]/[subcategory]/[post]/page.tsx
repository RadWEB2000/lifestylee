// import { generateUri } from "@/func/index";
import GET_POST from "@/queries/GET_POST";
import Image from "next/image";

type tPostPage = {
  params: Promise<{
    category: string;
    subcategory: string;
    post: string;
    url: {
      pathname: string;
      search: string;
    };
  }>;
};

export default async function PostPage(props: tPostPage) {
  const slug = (await (await props).params).post;
  const data = await GET_POST(slug);
  console.log(`slug: ${slug}`);

  return (
    <div>
      <ul>Start ➡️ Kategoria ➡️ Podkategoria ➡️ Wpis blogowy</ul>
      <h1>{data.excerpt}</h1>
      <figure>
        <Image
          alt={data.image.altText}
          height={850}
          loading="eager"
          priority
          src={data.image.sourceUrl}
          title={data.image.title}
          style={{
            objectFit: "cover",
          }}
          width={1550}
          quality={85}
        />
      </figure>
    </div>
  );
}
