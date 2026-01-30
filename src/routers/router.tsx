import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "../layout/layout";
import { routesArray } from "./routes";

export function RouterPages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
         {routesArray.map(page=><Route key={page.path} path={page.path} element={page.element} />)}
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    
    </BrowserRouter>
  );
}
