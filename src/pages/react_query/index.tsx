import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import axios from "axios";
import React from "react";

const queryClient = new QueryClient();

console.log("queryClient:", queryClient);

const img_url = "https://image.tmdb.org/t/p/w500";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryCheck />
    </QueryClientProvider>
  );
}

function QueryCheck() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["movies"],
    queryFn: () =>
      axios
        .get(
          "https://api.themoviedb.org/3/trending/movie/day?&api_key=9e547eaa8b83cf89de24b0885f9b31f5"
        )
        .then((res) => res.data),
  });

  console.log("data", data);
  if (isLoading) return "Loading...";
  //
  if (error) {
    // @ts-ignore
    return "An error has occurred: " + error.message;
  }

  return (
    <>
      <h1 className="text-center">Movie Data</h1>
      {data.results.map((item: any) => {
        return (
          <>
            <div className=" border border-red-500 grid grid-cols-3 p-2">
              <div className="border border-gray-500 w-60">
                <img
                  src={img_url + item.poster_path}
                  alt={item.original_title}
                  className="w-40 p-2"
                />
                <p>Title: {item?.original_title}</p>
                <p>Popularity: {item?.popularity}</p>
                <p>Release date: {item?.release_date}</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
