import { Open_Sans } from "next/font/google";
import "@/css/global.scss";

const OpenSans = Open_Sans({
  variable: "--font-regular",
  subsets: ["latin", "latin-ext"],
  preload: true,
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="1R0cNdnVvIwcVStMUJAi1N2vG73gP-13D0eY4ONp2bw"
        />
        <meta name="google-adsense-account" content="ca-pub-2145985197806639" />
      </head>
      <body className={`${OpenSans.variable}`}>{children}</body>
    </html>
  );
}
