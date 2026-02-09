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
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200">
  <form
    onSubmit={handleSubmit((data) => console.log(data))}
    className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-6"
  >
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-800">ایجاد حساب کاربری</h2>
      <p className="text-sm text-gray-500 mt-1">
        چند ثانیه تا شروع همراهی با ما ✨
      </p>
    </div>
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-600">ایمیل</label>
      <input
        type="email"
        {...register("email", { required: true })}
        placeholder="example@gmail.com"
        className={`rounded-lg px-4 py-3 text-sm bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 transition
          ${
            errors.email
              ? "border border-red-500 focus:ring-red-400"
              : "border border-transparent focus:ring-gray-400"
          }`}
      />
      {errors.email && (
        <span className="text-xs text-red-500">
          وارد کردن ایمیل الزامی است
        </span>
      )}
    </div>
    <div className="flex flex-col gap-1 relative">
      <label className="text-sm text-gray-600">رمز عبور</label>
      <input
        type="password"
        {...register("password", {
          required: true,
          minLength: {
            value: 8,
            message: "رمز عبور باید حداقل ۸ کاراکتر باشد",
          },
        })}
        placeholder="••••••••"
        className={`rounded-lg px-4 py-3 text-sm bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 transition
          ${
            errors.password
              ? "border border-red-500 focus:ring-red-400"
              : "border border-transparent focus:ring-gray-400"
          }`}
      />
      {errors.password && (
        <span className="absolute -bottom-5 right-1 text-xs text-red-500">
          {errors.password.message}
        </span>
      )}
    </div>
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-600">تکرار رمز عبور</label>
      <input
        type="password"
        {...register("confirmPassword", {
          required: true,
          validate: (value) => value === password,
        })}
        placeholder="••••••••"
        className={`rounded-lg px-4 py-3 text-sm bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 transition
          ${
            errors.confirmPassword
              ? "border border-red-500 focus:ring-red-400"
              : "border border-transparent focus:ring-gray-400"
          }`}
      />
      {errors.confirmPassword && (
        <span className="text-xs text-red-500">
          رمز عبور با تکرار آن مطابقت ندارد
        </span>
      )}
    </div>
    <button
      type="submit"
      className="mt-2 bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition"
    >
      ثبت‌نام
    </button>
    <div className="flex items-center gap-3">
      <span className="flex-1 h-px bg-gray-200" />
      <span className="text-xs text-gray-400">یا</span>
      <span className="flex-1 h-px bg-gray-200" />
    </div>
    <button
      type="button"
      onClick={() => navigate(ROUTES.auth + "?status=login")}
      className="text-sm text-gray-700 hover:text-gray-900 transition"
    >
      قبلاً ثبت‌نام کرده‌اید؟{" "}
      <span className="font-semibold underline">وارد شوید</span>
    </button>
  </form>
</div>

  );
}
