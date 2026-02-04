
export function Banner() {
  return (
    <div className="w-full h-151 relative ">
      <div className="w-full h-full bg-[linear-gradient(252.43deg,rgba(164,243,252,0.5)_0%,rgba(191,131,252,0.5)_100%)] absolute"></div>
      <img
        src="/public/assets/home/60935532_podium_background_3 1.png"
        alt="header"
        className=""
      />
      <div>
        <img
          className="z-30 absolute w-90 h-auto top-1/2 left-[52%] -translate-1/2  "
          src="/public/assets/home/e3e1af08-34e6-4554-8cd2-79e62ef7699c.png"
          alt=""
        />

        <p className="absolute  text-white top-[45%] left-[70%] -translate-1/2 text-6xl font-semibold  text-shadow-pink-400 text-shadow-2xs ">
          به بیونیک شاپ
        </p>
        <p className="z-10 absolute  text-white top-[60%] left-[35%]  -translate-1/2 text-6xl font-semibold text-shadow-pink-400 text-shadow-2xs ">
          خوش آمدید
        </p>
        <p className="absolute top-[76%] left-[60%]  -translate-1/2 text-white text-3xl text-shadow-pink-800 text-shadow-2xs">
          بیونیک یک برند لوازم آرایشی هست{" "}
        </p>
      </div>
    </div>
  );
}