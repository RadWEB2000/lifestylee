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
      <body className={`${OpenSans.variable}`}>{children}</body>
    </html>
  );
}
