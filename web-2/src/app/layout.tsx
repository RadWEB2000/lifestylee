// import type { Metadata } from "next";
import { Alfa_Slab_One, Roboto, Roboto_Slab } from "next/font/google";
import "@/css/global.scss";
import { Navigation } from "@/nav/index";
import GET_NAVIGATION from "@/data/graphql/GET_NAVIGATION";

const alfaSlab = Alfa_Slab_One({
  weight: ["400"],
  display: "swap",
  subsets: ["latin", "latin-ext"],
  preload: true,
  variable: "--font-alfa-slab",
});
const roboto = Roboto({
  weight: ["300", "500", "700"],
  display: "swap",
  preload: false,
  subsets: ["latin", "latin-ext"],
  variable: "--font-roboto",
});
const robotoSlab = Roboto_Slab({
  weight: ["300", "400", "500", "600", "700", "800"],
  preload: true,
  subsets: ["latin", "latin-ext"],
  variable: "--font-roboto-slab",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { main_categories: subdomains } = await GET_NAVIGATION();

  return (
    <html lang="pl_PL">
      <body
        className={`${alfaSlab.variable} ${roboto.variable} ${robotoSlab.variable}`}
      >
        <Navigation
          menu={{
            brand: {
              name: "LifeStylee",
              uri: "/",
            },
            menuButton: {
              label: "Menu",
            },
          }}
          subdomains={subdomains}
        />
        {children}
      </body>
    </html>
  );
}
