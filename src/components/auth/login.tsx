import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routers/routes";
type Login={
    email:string;
    password:string;
}
export function Login() {
      const {
        register,
        handleSubmit,
        formState: { errors },
       
        
      } = useForm<Login>();
      const navigate = useNavigate();
      const submit=(data:Login)=>{
        console.log(data);
        navigate("/")
      }
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200">
  <form
    onSubmit={handleSubmit(submit)}
    className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-6"
  >
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-800">ورود به حساب کاربری</h2>
      <p className="text-sm text-gray-500 mt-1">
        خوشحالیم دوباره می‌بینیمت 👋
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
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-600">رمز عبور</label>
      <input
        type="password"
        {...register("password", { required: true })}
        placeholder="••••••••"
        className={`rounded-lg px-4 py-3 text-sm bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 transition
          ${
            errors.password
              ? "border border-red-500 focus:ring-red-400"
              : "border border-transparent focus:ring-gray-400"
          }`}
      />
      {errors.password && (
        <span className="text-xs text-red-500">
          وارد کردن رمز عبور الزامی است
        </span>
      )}
    </div>
    <button
      type="submit"
      className="mt-2 bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition"
    >
      ورود
    </button>
    <div className="flex items-center gap-3">
      <span className="flex-1 h-px bg-gray-200" />
      <span className="text-xs text-gray-400">یا</span>
      <span className="flex-1 h-px bg-gray-200" />
    </div>
    <button
      type="button"
      onClick={() => navigate(ROUTES.auth + "?status=signup")}
      className="text-sm text-gray-700 hover:text-gray-900 transition"
    >
      حساب کاربری ندارید؟{" "}
      <span className="font-semibold underline">ثبت‌نام کنید</span>
    </button>
  </form>
</div>
  );
}