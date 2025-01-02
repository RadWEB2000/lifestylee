import { headers } from "next/headers";
import { subdomains } from "../../data/subdomains";

export async function getSubdomain() {
  const headersList = await headers();
  const host = headersList.get("host") || ""; // Pobierz host z nagłówka
  const [subdomain] = host.split(".");

  console.log(
    `headersList:${headersList} | host:${host} | subdomain:${subdomain}`
  );

  const validate = subdomains.includes(subdomain);
  return {
    subdomain,
    validate,
  };
}
