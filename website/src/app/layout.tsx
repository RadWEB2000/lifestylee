import "@/css/global.css";
import "@/css/vars.css";
import { getSubdomain } from "@/func/getSubdomain";
import { inter } from "@/fonts/fonts";
import { Navigation, Subdomains } from "@/layout/index";
import { main } from "@/data/main";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { currentSubdomain, subdomain, validStatus } = await getSubdomain();

  console.log(main.navigation.menus.filter((item) => item.subdomain === 'technologia')[0].menu);

  return (
    <html lang="pl_PL" dir="lrt">
      <body className={inter.variable}>
        <Subdomains subdomains={main.subdomains} />
        <Navigation
          brand={{
            main: main.navigation.brand.main,
            subdomain: currentSubdomain !== false ? currentSubdomain : false,
          }}
          menu={main.navigation.menus.filter((item) => item.subdomain === 'technologia')[0].menu}
          search={main.navigation.search}
        />
        {validStatus && <h1>{subdomain ?? ""}</h1>}
        {children}
      </body>
    </html>
  );
}
