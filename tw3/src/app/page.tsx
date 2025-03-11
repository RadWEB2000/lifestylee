import { BaseBlogCard } from "@/cards/index";

export default function Home() {
  return (
    <div>
      <div className="p-12">
        <BaseBlogCard
          readingTime={15}
          release="Tue May 28 2024 04:38:12 GMT+0200 (Central European Summer Time)"
          slug="hakuna-matata"
          title="Hakuna matata"
        />
      </div>
    </div>
  );
}
