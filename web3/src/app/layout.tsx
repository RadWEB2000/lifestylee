import { inter, lora } from "@/assets/fonts/Fonts";
import type { Metadata } from "next";
import "@/css/global.scss";
import { Navigation } from "@/components/Layout";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl_PL">
      <body className={`${inter.variable} ${lora.variable}`}>
        <Navigation />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
