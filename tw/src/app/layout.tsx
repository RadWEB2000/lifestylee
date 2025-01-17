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
      <meta name="google-site-verification" content="1R0cNdnVvIwcVStMUJAi1N2vG73gP-13D0eY4ONp2bw" />
      </head>
      <body className={`${OpenSans.variable}`}>{children}</body>
    </html>
  );
}
