import { Hero, PostsList } from "@/views/Home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <main>
        <PostsList />
        <PostsList />
        <PostsList />
      </main>
    </>
  );
}
