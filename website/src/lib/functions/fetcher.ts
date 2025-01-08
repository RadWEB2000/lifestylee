export default async function fetcher(query, vars = {}) {
  const res = await fetch(`${process.env.WP_API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, vars }),
  });

  const { data, errors } = await res.json();

  if (errors) {
    throw new Error(errors.map((err) => err.message).join(", "));
  }

  return data;
}
