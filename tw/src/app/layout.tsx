import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@/css/global.scss";
import { GET_POST } from "@/queries/index";

const OpenSans = Open_Sans({
  variable: "--font-regular",
  subsets: ["latin", "latin-ext"],
  preload: true,
});
export async function generateMetadata(): Promise<Metadata> {
  const seo = (await GET_POST("kiedy-wybory-prezydenckie-2025-w-polsce")).seo;

  return {
    ...seo,
    other: {
      jsonLd: "TEST",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const post = (await GET_POST("kiedy-wybory-prezydenckie-2025-w-polsce")).page;

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: post.structuredData }}
        />
      </head>
      <body className={`${OpenSans.variable}`}>
        {/* <Subdomains subdomains={subdomains} />
        <Navigation {...main.navigation} />
         */}
        <p dangerouslySetInnerHTML={{ __html: post.content }} />
        {/* <p dangerouslySetInnerHTML={{ __html: post.structuredData }}></p> */}
        {children}
      </body>
    </html>
  );
}
