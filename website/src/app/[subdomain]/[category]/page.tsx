export default function PostPage({ params }: { params: { category: string } }) {
  return (
    <div>
      <h1>Kategoria: {params.category}</h1>
    </div>
  );
}
