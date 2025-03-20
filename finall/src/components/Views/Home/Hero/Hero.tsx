"use client";
import css from "@/views/Home/Hero/Hero.module.scss";

import { FeaturedPostCard, NewsPostCard, SidePostCard } from "@/ui/Cards";
import { useState } from "react";

export default function Hero() {
  const [currentNews, updateCurrentNews] = useState<"recommended" | "newest">(
    "newest"
  );

  function switchCurrentNews(button: "recommended" | "newest") {
    if (button === "newest") {
      updateCurrentNews("newest");
    } else {
      updateCurrentNews("recommended");
    }
  }
  function getCurrentNews(button: "recommended" | "newest"): boolean {
    if (button === "newest") {
      if (currentNews) {
        return true;
      } else {
        return false;
      }
    } else {
      if (currentNews) {
        return true;
      } else {
        return false;
      }
    }
  }

  return (
    <header className={css.wrapper}>
      <div className={css.featured}>
        <FeaturedPostCard />
      </div>
      <ul className={css.side}>
        <SidePostCard />
        <SidePostCard />
        <SidePostCard />
        <SidePostCard />
      </ul>
      <div className={css.news}>
        <div className={css.news__buttons}>
          <button
            className={css.news__button}
            data-currentNews={getCurrentNews("newest")}
            onClick={() => switchCurrentNews("newest")}
          >
            Polecane
          </button>
          <button
            className={css.news__button}
            data-currentNews={getCurrentNews("newest")}
            onClick={() => switchCurrentNews("newest")}
          >
            Najnowsze
          </button>
        </div>
        <ul className={css.news__list}>
          <NewsPostCard />
          <NewsPostCard />
          <NewsPostCard />
          <NewsPostCard />
          <NewsPostCard />
          <NewsPostCard />
          <NewsPostCard />
          <NewsPostCard />
        </ul>
      </div>
    </header>
  );
}
