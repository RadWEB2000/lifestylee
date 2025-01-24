export default function CategoryPage({
  subcategory,
}: {
  subcategory?: string;
}) {
  console.log("Podkategoria: ", subcategory);
  return (
    <div>
      <div>
        <h1>Podkategoria: {subcategory}</h1>
      </div>
    </div>
  );
}
