import { NavBar } from "../../components/shared/navBar/navBar";
import { Banner } from "../../components/shared/slider/Banner";

export function Header() {
  return (
    <header className=" w-full">
      <NavBar />
      <Banner/>
    </header>
  );
}