import { getPostData } from "@/lib/functions/getData";

export default async function PostPage({
  params,
}: {
  params: { post: string };
}) {
  console.log(`Post slug: ${params.post}`);

  const { page } = await getPostData({
    slug: params.post
      ? params.post
      : "franczyza-vs-dzialalnosc-gospodarza-roznice",
  });

  return (
    <div>
      <h1>{page.title}</h1>
      {page.toc && <aside dangerouslySetInnerHTML={{ __html: page.toc }} />}
      <main dangerouslySetInnerHTML={{ __html: page.content }} />
    </div>
  );
}
