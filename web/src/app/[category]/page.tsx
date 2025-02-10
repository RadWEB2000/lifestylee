import { generateUri } from "@/func/index";
import GET_CATEGORY from "@/queries/GET_CATEGORY";
import Link from "next/link";
import Image from "next/image";
import { RegularBlogCard } from "@/components/Utils/BlogCards";

type tCategoryPage = {
  params: Promise<{
    category: string;
    url: {
      pathname: string;
      search: string;
    };
  }>;
};

export default async function CategoryPage(props: tCategoryPage) {
  const { category } = await props.params;
  const pathname = generateUri(category);
  const { page } = await GET_CATEGORY(pathname);
  return (
    <div>
      <div>
        <h1>Podkategoria: {page.title}</h1>
        <h2>Pathname : {pathname}</h2>
        <p dangerouslySetInnerHTML={{ __html: page.content }} />
      </div>
     {
      page.subcategories &&
      <main>
        {
          page.subcategories.map((item) => {
            return (
              <section>
                <h2>{item.title}</h2>
                <p dangerouslySetInnerHTML={{__html:item.excerpt}} />
                {
                  item.posts &&
                  <ul>
                    {
                      item.posts.map((item) => {
                        return (
                          <RegularBlogCard
                            {...item}
                            key={item.title}
                          />
                        )
                      })
                    }
                  </ul>
                }
              </section>
            )
          })
        }
      </main>
     }
    </div>
  );
}
