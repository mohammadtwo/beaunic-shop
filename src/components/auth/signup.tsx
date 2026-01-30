import { useForm } from "react-hook-form";
import { useNavigate} from "react-router-dom";
import { ROUTES } from "../../routers/routes";

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};
export function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormData>();
  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/incompatible-library
  const password = watch("password");
  if (errors.confirmPassword) setValue("confirmPassword", "");
  return (
    <div className="flex flex-col gap-5 items-center">
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="flex flex-col items-center gap-10  p-5 *:w-[70%] *:bg-gray-100 rounded-md bg-gray-300 w-[80%]"
      >
        <input
          type="email"
          placeholder={
            errors.email ? "این فیلد اجباری است" : "ایمیل خود را وارد کنید"
          }
          {...register("email", { required: true })}
          className={
            errors.email ? "border border-red-600 outline-red-600 p-3" : "p-3"
          }
        />

        <div className="relative">
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: {
                value: 8,
                message: "پسورد باید حداقل هشت کاراکتر باشد",
              },
            })}
            placeholder={
              errors.password ? "این فیلد اجباری است" : "پسورد خود را وارد کنید"
            }
            className={
              errors.password
                ? "border border-red-600 outline-red-600 w-full h-full p-3"
                : " w-full h-full p-3"
            }
          />
          {errors.password && (
            <span className="text-xs bg-gray-300! text-red-600 absolute right-5 -bottom-6">
              {errors.password.message}
            </span>
          )}
        </div>
        <input
          type="password"
          {...register("confirmPassword", {
            required: true,
            validate: (value) => value === password,
          })}
          className={
            errors.confirmPassword
              ? "border border-red-600 outline-red-600 p-3"
              : " p-3"
          }
          placeholder={
            errors.confirmPassword ? "رمز عبور مطابقت ندارد" : "تکرار رمز عبور"
          }
        />

        <button className="p-3" type="submit">
          ثبت نام
        </button>
        <button
          className="p-3"
          onClick={() => navigate(ROUTES.auth + "?status=login")}
        >
          در صورت داشتن حساب کاربری وارد شوید{" "}
        </button>
      </form>
    </div>
  );
}
