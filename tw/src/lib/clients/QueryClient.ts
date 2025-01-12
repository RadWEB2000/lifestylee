import { GraphQLClient } from "graphql-request";

const endpoint: string = process.env.NEXT_PUBLIC_WP_API_KEY as string;

console.log("GraphQL Endpoint:", endpoint);

if (!endpoint) {
  throw new Error("Brak lub błędny endpoint");
}

export const QueryClient = new GraphQLClient(endpoint, {
  headers: {},
});
