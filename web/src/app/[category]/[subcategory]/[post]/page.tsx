export default function PostPage({ post }: { post?: string }) {
  console.log("wpis blogowy: ", post);
  return (
    <div>
      <div>
        <h1>Wpis blogowy: {post}</h1>
      </div>
    </div>
  );
}
