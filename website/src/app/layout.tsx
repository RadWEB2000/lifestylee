import "@/css/global.css";
import "@/css/vars.css";
import { getSubdomain } from "@/func/getSubdomain";
import { inter } from "@/fonts/fonts";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { subdomain, validate } = await getSubdomain();

  // console.log(`subdomain:${subdomain} --- isValid: ${validate}`);

  return (
    <html lang="pl_PL" dir="lrt">
      <body className={inter.variable}>
        {validate && <h1>{subdomain ?? ""}</h1>}
        {children}
      </body>
    </html>
  );
}
