import { NavLink } from "react-router-dom";
import { ROUTES } from "../../routers/routes";
import Colleagues from "./colleagues/Colleagues";

export function Home() {
  return (
    <div className=" w-full flex flex-col">
      <div>
        <div className="flex w-full h-screen bg-linear-to-bl from-cyan-100 to-violet-200">
          <div>
            <h1>به فروشگاه بیونیک خوش آمدید</h1>
            <NavLink
              to={ROUTES.category}
              className="px-1.5 py-1 bg-cyan-300 hover:bg-cyan-500 "
            >
              بیشتر بدانید
            </NavLink>
          </div>
          <div>
            <img src="assets/picture-1.jpg" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col ">
          <h1>درباره ی ما</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            beatae odit nobis alias, architecto perspiciatis numquam quisquam
            consequatur delectus iste, vero debitis voluptatum animi recusandae
            corrupti accusantium incidunt esse? Voluptatum, tenetur adipisci
            quod rerum odit eos harum esse vitae distinctio cum! Asperiores
            adipisci quaerat quasi harum dolores ducimus ex nostrum dolor
            inventore enim distinctio corporis atque pariatur, quod fugiat. Sit,
            libero commodi enim pariatur est velit odit ullam optio unde nostrum
            repellendus obcaecati. Autem libero molestiae debitis in sapiente!
            Nulla natus quo dolorem impedit, culpa et nemo sunt at velit
            excepturi dolor quas quisquam quidem vero molestiae nihil amet
            asperiores eaque quam beatae recusandae perferendis dignissimos?
            Placeat omnis repudiandae cum ipsa vitae harum, ex enim. Temporibus,
            blanditiis? Magnam consequuntur sint quae vel asperiores, blanditiis
            rerum quo deleniti autem eligendi quos fuga voluptatum amet expedita
            magni suscipit illum? Quaerat non ab autem? At, consequatur in
            voluptatum, molestiae quas distinctio nostrum harum quo aliquam quos
            obcaecati beatae quod amet, impedit maiores saepe repudiandae animi
            cum laboriosam assumenda earum corrupti? Voluptas doloremque facere
            neque, saepe cupiditate quibusdam aliquid animi, repellendus
            voluptatem itaque officia quas illum inventore possimus magnam vel
            qui quam perspiciatis dolorum doloribus. Eum, eligendi totam sunt
            explicabo vel expedita a quos?
          </p>
        </div>
        <div>
          <img src="assets/picture-2.jpg" alt="hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" />
        </div>
      </div>
      <div>product section</div>
      <Colleagues/>
    </div>
  );
}