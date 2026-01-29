import { Outlet } from "react-router-dom";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";

export function AppLayout() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="flex-1 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
