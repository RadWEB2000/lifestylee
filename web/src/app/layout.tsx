import type { Metadata } from "next";
import { Alegreya, Open_Sans } from "next/font/google";
import "@/css/global.scss";
import { Navigation } from "@/layout/index";
import { MenuProvider } from "@/provider/index";
import { GoogleTagManager as GTM } from "@/seo/index";
import GET_NAVIGATION from "@/data/graphql/GET_NAVIGATION";

const alegreya = Alegreya({
  preload: true,
  variable: "--font-alegreya",
  subsets: ["latin", "latin-ext"],
});

const openSans = Open_Sans({
  variable: "--font-openSans",
  subsets: ["latin", "latin-ext"],
  preload: true,
  weight: ["300", "400", "700", "800"],
});

export const metadata: Metadata = {
  openGraph: {
    alternateLocale: "pl_PL",
    authors: "RadWEB - Radosław Adamczyk",
    countryName: "Poland",
    emails: "radoslaw.adamczyk2000@gmail.com",
    locale: "pl_PL",
    phoneNumbers: "+48 794-100-413",
  },
  robots: {
    index: true,
    follow: true,
  },
  publisher: "Radosław Adamczyk - RadWEB",
  referrer: "origin",
  generator: "Next.js",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {constants,explorer,main_categories} = await GET_NAVIGATION();
  return (
    <html lang="pl_PL">
      <head>
        <GTM />
      </head>
      <body className={` ${alegreya.variable} ${openSans.variable}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KT9PJR2P"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <MenuProvider>
          <Navigation 
            brand={{
              name:'LifeStylee',
              slug:'/',
              uri:'/'
            }}
            explorer={{
              button:constants.menu_button,
              title:'',
              menus:explorer.map((item) => {
                return {
                  title:item.label,
                  menu:item.items.map((item) => {
                    return {
                      name:item.label,
                      slug:item.uri,
                      uri:item.uri
                    }
                  })
                }
              })
            }}
            menuButton={{
              label:constants.menu_button
            }}
            subdomains={main_categories.map((item) => {
              return {
                name:item.label,
                slug:item.uri,
                uri:item.uri
              }
            })}
          />
          {children}
        </MenuProvider>
      </body>
    </html>
  );
}
