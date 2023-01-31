import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Posts() {
  const mutation = useMutation({});

  // const mutation = useMutation({
  //   mutationFn: (updatedTodo) => {
  //     return axios.patch(
  //       "https://jsonplaceholder.typicode.com/posts/1",
  //       updatedTodo
  //     );
  //   },
  // });

  const { status, data, error, isFetching } = useQuery({
    queryKey: ["/posts/", { page: 1 }],
  });

  console.log("data--", data);

  // @ts-ignore
  return (
    <>
      {mutation.isLoading ? (
        "Adding todo..."
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}

          {mutation.isSuccess ? <div>Todo added!</div> : null}

          <button
            onClick={() => {
              // @ts-ignore
              mutation.mutate(["/posts/1", { title: "new title" }]);
            }}
          >
            Create Todo
          </button>
        </>
      )}
    </>
  );

  // const {
  //   status: photoStatus,
  //   data: photoData,
  //   error: photoError,
  //   isFetching: photoIsFetching,
  // } = useQuery({
  //   queryKey: ["/photos/", { page: 2 }],
  // });
}
