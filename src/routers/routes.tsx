import type { JSX } from "react";
import { Home } from "../components/home/home";
import { AboutUs } from "../components/aboutUs/aboutUs";
import { Category } from "../components/category/category";
import { Product } from "../components/product/product";
import { Auth } from "../components/auth/auth";
export const ROUTES={home:"/",product:"/product",category:"/category",aboutUs:"/aboutUs",auth:"/auth"}
export const routesArray: { path: string; element: JSX.Element }[] = [
  { path: ROUTES.home, element: <Home /> },
  {path:ROUTES.aboutUs,element:<AboutUs/>},
  {path:ROUTES.category,element:<Category/>},
  {path:ROUTES.product,element:<Product/>},
  {path:ROUTES.auth,element:<Auth/>}

];