import { GraphQLClient } from "graphql-request";
const endpoint: string = process.env.WP_API_KEY as string;

export const graphqlClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.GRAPHQL_API_TOKEN || ""}`,
  },
});
