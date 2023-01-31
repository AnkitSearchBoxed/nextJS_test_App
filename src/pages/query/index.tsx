import { useQuery } from "@tanstack/react-query";

export default function FetchPostQueries() {
  const {
    data,
    error,
    isError,
    isFetched,
    isFetching,
    isPaused,
    isLoading,
    isPreviousData,
    isRefetchError,
    isRefetching,
    isStale,
    isSuccess,
    refetch,
    remove,
    status,
    fetchStatus,
  } = useQuery({
    queryKey: ["/posts", { result: 10 }],
  });

  // console.log("fetchStatus--", fetchStatus);

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <>
      <h1 className="text-center text-red-500">USE_QUERY PAGE</h1>
      {isFetching ? (
        <h1>Loading...</h1>
      ) : (
        <div className="border border-grey-800 p-5 m-5 m-auto mt-5 grid grid-cols-3 gap-1">
          {data?.map((item: any) => (
            <>
              <div
                className=" border border-grey-600 text-center cursor-pointer"
                key={item.id}
              >
                <p>
                  <span className="text-red-500">Title:</span> {item.title}
                </p>
                <br />
                <p>
                  <span className="text-red-500">Body:</span>{" "}
                  {item.body.slice(1, 70)}
                </p>
              </div>
            </>
          ))}
        </div>
      )}
    </>
  );
}
