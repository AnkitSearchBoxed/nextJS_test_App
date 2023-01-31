import React from "react";
import axios from "axios";
import {
  QueryClient,
  useMutation,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import * as url from "url";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CreateTodo />
    </QueryClientProvider>
  );
}

function CreateTodo() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["todo"],
    queryFn: () => axios.get("/todo").then((res: any) => res?.data),
  });

  const mutation = useMutation({
    mutationFn: (newTodo: string) => {
      return axios.post("/todo", newTodo);
    },
  });

  console.log("mutation:", mutation?.variables);

  return (
    <div>
      {mutation.isLoading ? (
        "Adding todo..."
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occurred: {mutation?.error?.message}</div>
          ) : null}

          {mutation.isSuccess ? (
            <div className=" border border-red-500 text-center m-auto">
              <p>{mutation?.variables?.id.toString()}</p>
              <p>{mutation?.variables?.title}</p>
            </div>
          ) : null}

          <button
            className="border border-grey-500"
            onClick={() => {
              mutation.mutate({ id: new Date(), title: "Do Laundry" });
            }}
          >
            Create Todo
          </button>
        </>
      )}
    </div>
  );
}
