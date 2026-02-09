import { BestSellingProducts } from "../product/bestSellingProducts";
import { LatestCosmeticsProducts } from "../product/latestCosmeticsProducts";
import Colleagues from "./Colleagues/Colleagues";

import { Slider } from "./slider";


export function Home() {
  return (
    <div className=" w-full flex flex-col">
      <Slider/>
            <BestSellingProducts />
            <LatestCosmeticsProducts/>
            <Colleagues/>
    </div>
  );
}