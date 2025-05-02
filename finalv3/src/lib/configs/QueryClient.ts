import { GraphQLClient } from "graphql-request";

const endpoint: string = process.env.WP_API_KEY as string;

if (!endpoint) {
  throw new Error(`⚠️ Błąd połączenia z bazą danych`);
}

const QueryClient = new GraphQLClient(endpoint);

export default QueryClient;
