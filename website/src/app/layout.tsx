import Subdomains from "@/components/Layout/Subdomains/Subdomains";
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
console.log(subdomains)
  return (
    <html lang="pl_PL" dir="lrt">
      <body className={inter.variable}>
        <Subdomains
          subdomains={subdomains}
        />
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
