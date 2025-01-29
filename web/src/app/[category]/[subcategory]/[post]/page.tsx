// import { generateUri } from "@/func/index";
import { Breadcrumbs } from "@/components/Utils";
import { Hero } from "@/v-article/index";
import GET_POST from "@/queries/GET_POST";

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
  const path = await (await props).params;
  const data = await GET_POST(path.post);
  console.log(`slug:`, await props);

  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          {
            name: "Start",
            uri: "/",
          },
          {
            ...data.category,
          },
          {
            ...data.subcategory,
          },
          {
            name: data.title,
            uri: data.uri,
          },
        ]}
      />
      <Hero
        excerpt={data.excerpt}
        image={data.image}
        title={data.title}
        publishedTime={{
          title: "Data publikacji",
          value: data.seo.openGraph.articleMeta.publishedTime,
        }}
        readingTime={{
          title: data.seo.openGraph.slackEnhancedData.label,
          value: data.seo.openGraph.slackEnhancedData.data,
        }}
      />
      <main>
        <p dangerouslySetInnerHTML={{ __html: data.content }} />
      </main>
    </>
  );
}
