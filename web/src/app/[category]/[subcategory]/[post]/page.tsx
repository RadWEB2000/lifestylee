import getPathname from "@/func/getPathname";


export default async function PostPage({ post }: { post?: string }) {
  console.log("wpis blogowy: ", post);
  const pathname  =await getPathname();

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
