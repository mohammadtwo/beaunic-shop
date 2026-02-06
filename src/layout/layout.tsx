import { Outlet } from "react-router-dom";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { BestSellingProducts } from "../components/product/bestSellingProducts";
import { LatestCosmeticsProducts } from "../components/product/latestCosmeticsProducts";

export function AppLayout() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="flex-1 ">
        <Outlet />
      </div>
      <BestSellingProducts />
      <LatestCosmeticsProducts/>

      <Footer />
    </div>
  );
}
