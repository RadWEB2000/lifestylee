import { generateUri } from "@/func/index";

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

export default async function SubcategoryPage(props: tSubcategoryPage) {
  const { category, subcategory } = await props.params;
  const pathname = generateUri(category, subcategory);
  return (
    <div>
      <div>
        <h1>Podkategoria: {subcategory}</h1>
        <h2>Pathname : {pathname}</h2>
      </div>
    </div>
  );
}
