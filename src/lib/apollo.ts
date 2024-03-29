import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: String(import.meta.env.VITE_API_URL),
  headers: {
    Authorization: `Bearer ${String(import.meta.env.VITE_API_TOKEN)}`,
  },
  cache: new InMemoryCache(),
});
