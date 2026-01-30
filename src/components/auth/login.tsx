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
    <div className="flex flex-col gap-5 items-center">
      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-col items-center gap-10 *:p-3 p-5 *:w-[70%] *:bg-gray-100 rounded-md bg-gray-300 w-[80%]"
      >
        <input
          type="email"
          placeholder={
            errors.email ? "این فیلد اجباری است" : "ایمیل خود را وارد کنید"
          }
          {...register("email", { required: true })}
          className={
            errors.email ? "border border-red-600 outline-red-600" : ""
          }
        />

        <input
          type="password"
          {...register("password", { required: true })}
          placeholder={
            errors.password ? "این فیلد اجباری است" : "پسورد خود را وارد کنید"
          }
          className={
            errors.password ? "border border-red-600 outline-red-600" : ""
          }
        />

        <button type="submit">ورود</button>
        <button onClick={() => navigate(ROUTES.auth + "?status=signup")}>
          در صورت نداشتن حساب کاربری ثبت نام کنید
        </button>
      </form>
    </div>
  );
}