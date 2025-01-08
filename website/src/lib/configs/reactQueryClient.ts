import { DefaultOptions, QueryClient } from "@tanstack/react-query";

const defaultOptions: DefaultOptions = {
  queries: {
    retry: 1,
    staleTime: 1000 * 60 * 5,
    // cacheTime: 1000 * 60 * 10,
  },
};

const reactQueryClient = new QueryClient({ defaultOptions });

export default reactQueryClient;
