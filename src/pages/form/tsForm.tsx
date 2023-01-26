import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { date } from "yup";
interface IFormInputs {
  name: string;
  age: number;
  url: string;
}

const schema = yup
  .object({
    name: yup.string().required(),
    age: yup.number().positive().integer().required(),
    url: yup.string().url().nullable(),
    createdOn: date().default(() => new Date()),
  })
  .required();

export default function TsForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <>
      <div className="m-auto mt-20 border  text-center ">
        <form onSubmit={handleSubmit(onSubmit)} className=" mt-5">
          <div className="flex justify-center">
            <label>Name: </label>
            <input
              className="ml-5 border border-black rounded mb-2 placeholder-black placeholder-opacity-60 text-center"
              {...register("name")}
              placeholder="enter name..."
            />
            <p>{errors.name?.message}</p>
          </div>
          <br />
          <div className="flex justify-center">
            <label>Age: </label>
            <input
              className="ml-5 border border-black rounded mb-2 placeholder-black placeholder-opacity-60 text-center"
              {...register("age")}
              placeholder="enter age..."
            />
            <p>{errors.age?.message}</p>
          </div>
          <br />
          <div className="flex justify-center">
            <label>Url: </label>
            <input
              className="ml-5 border border-black rounded mb-2 placeholder-black placeholder-opacity-60 text-center"
              {...register("url")}
              placeholder="enter url..."
            />
            <p>{errors.url?.message}</p>
          </div>
          <br />

          <input
            className="border border-black rounded p-1 m-1 bg-blue-400 mb-2 cursor-pointer "
            type="submit"
          />
        </form>
      </div>
    </>
  );
}
