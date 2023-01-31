import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import axios from "axios";

const defaultMutationFn = async (params: any) => {
  return axios.patch(
    `https://jsonplaceholder.typicode.com${params[0]}`,
    params[1]
  );
};

const defaultQueryFn = async ({ queryKey }: { queryKey: any }) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com${queryKey[0]}`,
    {
      params: queryKey[1],
    }
  );

  return data;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
    mutations: {
      mutationFn: defaultMutationFn,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}
