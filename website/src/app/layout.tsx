import "@/css/global.css";
import "@/css/vars.css";
import { inter } from "@/fonts/fonts";
// import { main } from "@/data/main";
import { getPosts, getSubdomains } from "@/lib/functions/getData";
import Link from "next/link";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const subdomains = await getSubdomains();
  const posts = await getPosts();

  return (
    <html lang="pl_PL" dir="lrt">
      <body className={inter.variable}>
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(10,1fr)",
          }}
        >
          {subdomains.map((item) => {
            return (
              <Link
                style={{
                  border: `2px solid ${item.color}`,
                  color: item.color,
                  listStyle: "none",
                  width: "100%",
                }}
                href={`/${item.url}`}
                key={item.title}
              >
                {item.title}
              </Link>
            );
          })}
        </ul>
        <main>
          {posts.map((item) => {
            return (
              <>
                <Link href={item.url} key={item.title}>
                  {item.title}
                </Link>
                <br />
              </>
            );
          })}
        </main>
        {children}
      </body>
    </html>
  );
}
