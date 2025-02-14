import type { Metadata } from "next";
import { Alegreya, Open_Sans } from "next/font/google";
import "@/css/global.scss";
import { Navigation } from "@/layout/index";
import main from "@/static/main";
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
  const nav = await GET_NAVIGATION();
  console.log(nav.explorer);
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
          <Navigation {...main.nav} />
          {children}
        </MenuProvider>
      </body>
    </html>
  );
}
