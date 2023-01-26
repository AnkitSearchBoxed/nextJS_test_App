import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
interface IFormInputs {
  firstName: string;
  age: number;
}

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
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
          <label>Name: </label>
          <input
            className="border border-black rounded mb-2 placeholder-black placeholder-opacity-60"
            {...register("firstName")}
            placeholder="enter your name"
          />
          <p>{errors.firstName?.message}</p>
          <br />
          <label>Age: </label>
          <input
            className="border border-black rounded mb-2 placeholder-black placeholder-opacity-60"
            {...register("age")}
            placeholder="enter your age"
          />
          <p>{errors.age?.message}</p>
          <input
            className="border border-black rounded p-1 m-1 bg-blue-400 mb-2 cursor-pointer"
            type="submit"
          />
        </form>
      </div>
    </>
  );
}
