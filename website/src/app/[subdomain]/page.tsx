export default async function SubdomainPage({
  params,
}: {
  params: { subdomain: string };
}) {
  // console.log(`Subdomena:${params.subdomain}`);
  console.log(`Parans:`, params.subdomain);
  return (
    <div>
      <h1>Subdomena: {params?.subdomain.toUpperCase()}</h1>
    </div>
  );
}
