export default function CategoryPage({ category }: { category?: string }) {
  console.log("Kategoria: ", category);
  return (
    <div>
      <div>
        <h1>Kategoria: {category}</h1>
      </div>
    </div>
  );
}
