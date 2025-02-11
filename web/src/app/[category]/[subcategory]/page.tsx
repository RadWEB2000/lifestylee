import { RegularBlogCard } from "@/components/Utils/BlogCards";
import GET_SUBCATEGORY from "@/queries/GET_SUBCATEGORY";
import { Metadata } from "next";

type tSubcategoryPage = {
  params: Promise<{
    category: string;
    subcategory: string;
    url: {
      pathname: string;
      search: string;
    };
  }>;
};

export async function generateMetadata(
  props: tSubcategoryPage
): Promise<Metadata> {
  const { category, subcategory } = await props.params;
  const { seo } = await GET_SUBCATEGORY(`${category}/${subcategory}`);
  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      type: "website",
      title: seo.openGraph.title,
      description: seo.openGraph.description,
    },
  };
}

export default async function SubcategoryPage(props: tSubcategoryPage) {
  const { category, subcategory } = await props.params;

  const { page } = await GET_SUBCATEGORY(`${category}/${subcategory}`);

  return (
    <div>
      <h1>{page.title}</h1>
      <strong dangerouslySetInnerHTML={{ __html: page.entry }} />
      {page.posts ? (
        <ul>
          {" "}
          {page.posts.map((item) => {
            return (
              <RegularBlogCard
                category={item.category}
                excerpt={item.excerpt}
                image={item.image}
                release={item.release}
                subcategory={item.subcategory}
                title={item.title}
                uri={item.uri}
                key={item.title}
              />
            );
          })}
        </ul>
      ) : (
        <p>
          <br />
          <br />
          <br />
          <h2>Brak wpisów blogowych</h2>
          <br />
          <br />
          <br />
        </p>
      )}
      <p
        dangerouslySetInnerHTML={{
          __html: page.content ? page.content : "brak contentu",
        }}
      />
    </div>
  );
}
