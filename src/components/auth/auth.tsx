import { useForm } from "react-hook-form";
type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};
export function Auth() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue
  } = useForm<FormData>();

  // eslint-disable-next-line react-hooks/incompatible-library
  const password = watch("password");
  if(errors.confirmPassword)setValue("confirmPassword","")
  return (
    <div className="flex flex-col gap-5 items-center">
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="flex flex-col items-center gap-10 *:p-3 p-5 *:w-[70%] *:bg-gray-100 rounded-md bg-gray-300 w-[80%]"
      >
        <input
          type="email"
          placeholder={errors.email && "این فیلد اجباری است"}
          {...register("email", { required: true })}
          className={errors.email ? "border border-red-600 outline-red-600" : ""}
        />

        <input
          type="password"
          {...register("password", { required: true })}
          placeholder={errors.password && "این فیلد اجباری است"}
          className={errors.password ? "border border-red-600 outline-red-600" : ""}
        />
        <input
          type="password"
          {...register("confirmPassword", {
            required: true,
            validate: (value) => value === password ,
          })}
          className={errors.confirmPassword ? "border border-red-600 outline-red-600" : ""}
       
          placeholder={errors.confirmPassword && "رمز عبور مطابقت ندارد"}
        />

        <button type="submit">ثبت نام</button>
      </form>
    </div>
  );
}
