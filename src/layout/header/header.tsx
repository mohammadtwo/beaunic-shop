import { NavBar } from "../../components/shared/navBar/navBar";
import { Slider } from "../../components/shared/slider/slider";

export function Header() {
  return (
    <header className=" w-full">
      <NavBar />
      <Slider/>
    </header>
  );
}