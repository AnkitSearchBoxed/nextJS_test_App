import { useForm } from "react-hook-form";

const FormCheck = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("=>"));

  return (
    <div className="border border-grey-800 p-5 m-5 m-auto  mt-5 text-center cursor-pointer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-red-400 text-center text-4xl mt-20px">My From</h1>
        <div className="mt-5">
          <div>
            <input
              placeholder="Enter your name"
              {...register("name", { required: true })}
            />
            {errors.name && <span>Name is required</span>}
          </div>
          <div>
            <input
              placeholder="Enter your age"
              {...register("age", { required: true })}
            />

            {errors.age && <span>Age is required</span>}
          </div>
        </div>
        <input className="border-black-800 mt-4" type="submit" />
      </form>
    </div>
  );
};

export default FormCheck;
