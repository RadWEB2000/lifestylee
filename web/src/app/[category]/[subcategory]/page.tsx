import getPathname from "@/func/getPathname";

export default async function CategoryPage({
  subcategory,
}: {
  subcategory?: string;
}) {
  const pathname  = await getPathname();
  return (
    <div>
      <div>
        <h1>Podkategoria: {subcategory}</h1>
        <h2>Pathname : {pathname}</h2>
      </div>
    </div>
  );
}
