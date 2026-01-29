import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../routers/routes";

export function NavBar() {
  return (
    <nav className="fixed top-2 left-[5%]  w-[90%] backdrop-blur-md bg-white/3 border-b border-white/20 z-50 shadow-md rounded-2xl p-1 ">
      <div className="max-w-7xl mx-auto flex flex-row-reverse items-center justify-between p-4">
        <div className="text-xl font-bold text-white drop-shadow">
          <div className="flex-1 ">
            <div className=" flex items-center gap-2">
              <div className="mr-auto text-2xl text-white">بیونیک</div>
              <div className="w-8 h-8">
                <img
                  src="/src/assets/c8e4e56d-9bf9-4915-b2dd-2700233fd5e2-removebg-preview.png"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
        <ul className="flex space-x-6 text-white">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " text-xl m-1 text-white border-gray-400/20  border  rounded-md bg-white/1 drop-shadow-md text-shadow-2xs shadow-md backdrop-blur-md p-3"
                  : " text-xl m-1 text-white p-3 "
              }
              to={ROUTES.home}
            >
              خانه
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " text-xl m-1 text-white   rounded-md bg-white/1 drop-shadow-2xl text-shadow-2xs shadow-md backdrop-blur-md p-3"
                  : " text-xl m-1 text-white p-3 "
              }
              to={ROUTES.product}
            >
              محصولات
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " text-xl m-1 text-white  rounded-md bg-white/1 drop-shadow-2xl text-shadow-2xs shadow-md backdrop-blur-md p-3"
                  : " text-xl m-1 text-white p-3 "
              }
              to={ROUTES.category}
            >
              دسته بندی
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " text-xl m-1 text-white  rounded-md bg-white/1 drop-shadow-2xl text-shadow-2xs shadow-md backdrop-blur-md p-3"
                  : " text-xl m-1 text-white p-3"
              }
              to={ROUTES.aboutUs}
            >
              درباره ما
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " text-xl m-1 text-white  rounded-md bg-white/1 drop-shadow-2xl text-shadow-2xs shadow-md backdrop-blur-md p-3"
                  : " text-xl m-1 text-white p-3"
              }
              to={ROUTES.auth}
            >
              ثبت نام
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
