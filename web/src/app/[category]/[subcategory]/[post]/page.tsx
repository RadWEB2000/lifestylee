import { generateUri } from "@/func/index";

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
  const { category, post, subcategory } = await props.params;
  const pathname = generateUri(category, subcategory, post);

  return (
    <div>
      <ul>Start ➡️ Kategoria ➡️ Podkategoria ➡️ Wpis blogowy</ul>
      <div>
        <h1>Wpis blogowy: {post}</h1>
        <h2>Pathname : {pathname}</h2>
      </div>
    </div>
  );
}
