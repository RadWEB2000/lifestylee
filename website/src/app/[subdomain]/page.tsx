export default function SubdomainPage({
  params,
}: {
  params: { subdomain: string };
}) {
  return (
    <div>
      <h1>Subdomena: {params.subdomain.toUpperCase()}</h1>
    </div>
  );
}
