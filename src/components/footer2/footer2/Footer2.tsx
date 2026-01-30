export default function Footer2() {
  return (
  
      <footer dir="rtl" className=" bg-[#1f1f1f] text-white ">
        <div className="flex justify-between px-6 py-14">
          <div className="flex gap-50 ">
            <div>
              <h3 className="mb-6 text-3xl font-semibold">فروشگاه بیونیک</h3>
              <ul className="space-y-3 text-lg text-white/80">
                <li>
                  <a href="#" className="transition hover:text-white">
                    تماس با ما
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    درباره ما
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    فرصت‌های شغلی
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    حریم خصوصی
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    مجله بیونیک
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    کارت هدیه سازمانی
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    بیونیک بیزینس
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-3xl font-semibold">خدمات مشتریان</h3>
              <ul className="space-y-3 text-lg text-white/80">
                <li>
                  <a href="#" className="transition hover:text-white">
                    پرسش‌های متداول
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    راهنمای خرید و پرداخت
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    رویه‌های ارسال
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    شرایط مرجوعی
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    خرید کالای شانس
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    ارتباط با پشتیبانی
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center flex flex-col ">
            <div className="mb-4 flex items-center gap-3 justify-center">
              {["wat", "in", "tel"].map((t) => (
                <a
                  key={t}
                  href="#"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/90 transition hover:bg-white/10 hover:text-white"
                >
                  <span className="text-sm font-semibold">{t}</span>
                </a>
              ))}
            </div>
            <p className="mb-4 text-xl font-semibold">
              ما را در شبکه‌های اجتماعی دنبال کنید!
            </p>
            <p className="text-sm leading-6 text-white/70">
              هفت روز هفته، از ساعت ۸ الی ۲۴ پاسخگوی سوالات شما هستیم.
              <br />
              تلفن : ****939206 .****0917272
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex h-16 w-16 items-center justify-center rounded-xl bg-white p-2 shadow-sm"
            >
              <span className="h-full w-full rounded-lg bg-black/10"></span>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 mt-10">
          <div className="mx-auto max-w-6xl px-6 py-5">
            <p className="text-center text-sm text-white/60">
              کلیه حقوق این سایت متعلق به فروشگاه آنلاین بیونیک می‌باشد.
            </p>
          </div>
        </div>
      </footer>

  );
}
