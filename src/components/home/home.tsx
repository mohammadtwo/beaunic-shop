import { BestSellingProducts } from "../product/bestSellingProducts";
import { LatestCosmeticsProducts } from "../product/latestCosmeticsProducts";
import { Slider } from "./slider";
import { Banner } from "./slider/Banner";


export function Home() {
  return (
    <div className=" w-full flex flex-col">
      <Banner />
      <Slider />
      <BestSellingProducts />
      <LatestCosmeticsProducts />
    </div>
  );
}