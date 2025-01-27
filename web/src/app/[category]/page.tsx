import { generateUri } from "@/func/index";

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
  return (
    <div>
      <div>
        <h1>Kategoria: {pathname}</h1>
      </div>
    </div>
  );
}
