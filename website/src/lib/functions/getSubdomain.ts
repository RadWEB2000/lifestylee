import { headers } from "next/headers";
import { subdomains } from "@/data/subdomains";
import { main } from "@/data/main";

export async function getSubdomain() {
  const headersList = await headers();
  const host = headersList.get("host") || "";
  const domains = host.split(".");
  const subdomain = domains[0];
  let validStatus: boolean = false;
  // const [subdomain] = host.split(".");

  function betterValidate() {
    if (host.includes("localhost") && domains.length == 1) {
      console.log("Strona główna");
      validStatus = true;
    } else if (subdomains.includes(subdomain) && domains.length >= 2) {
      console.log("Subdomena");
      validStatus = true;
    } else {
      console.log("Niepoprawna subdomena");
      validStatus = false;
    }
  }
  betterValidate();

  const currentSubdomain: (tLink & { color: string }) | false =
    domains.length >= 2 &&
    main.subdomains.filter((item) => item.url.includes(subdomain))[0];

  // console.log("hosts");
  // console.log(host.split(".").length);

  return {
    currentSubdomain,
    subdomain,
    validStatus,
  };
}
