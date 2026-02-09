type SocialMedia = {
	src:string;
	alt:string;
};

type TrustImg = {
	src: string;
	alt: string;
};
export function Footer() {
	const socialMedia: SocialMedia[] = [
		{ src: "./public/assets/svg/instagram-svgrepo-com (1).svg", alt: "ins" },
		{ src: "./public/assets/svg/linkedin-rounded-svgrepo-com.svg", alt: "ln"  },
		{ src: "./public/assets/svg/telegram-svgrepo-com.svg", alt: "Tel" },
	];

	const trustImg: TrustImg[] = [
		{
			src: "./public/assets/png/ChatGPT Image Feb 1, 2026, 05_54_05 3 PM.png",
			alt: "trust",
		},
		{
			src: "./public/assets/png/ChatGPT Image Feb 1, 2026, 05_54_05 PM 2.png",
			alt: "trust",
		},
		{
			src: "./public/assets/png/ChatGPT Image Feb 1, 2026, 05_54_05 PM.png",
			alt: "trust",
		},
	];
  return (
		<footer dir="rtl" className="bg-[#289eac] text-white">
			<div className="flex flex-col lg:flex-row justify-between p-6 sm:p-8 lg:p-10 gap-20">
				<div className="flex flex-col sm:flex-row justify-center gap-30 lg:gap-40 lg:mr-20">
					<div>
						<h3 className="mb-6 text-xl font-semibold">فروشگاه بیونیک</h3>
						<ul className="space-y-3 text-sm text-white/80">
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
						<h3 className="mb-6 text-xl font-semibold">خدمات مشتریان</h3>
						<ul className="space-y-3 text-sm text-white/80">
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

				<div className="text-center flex flex-col items-center lg:items-center lg:ml-20 lg:mt-15">
					<div className="mb-4 flex items-center gap-3 justify-center lg:justify-end">
						{socialMedia.map((item) => (
							<a
								key={item.alt}
								href="#"
								className="flex w-10 h-10 cursor-pointer items-center "
							>
								<img src={item.src} alt={item.alt} />
							</a>
						))}
					</div>
					<p className="mb-4 text-lg font-semibold">
						ما را در شبکه‌های اجتماعی دنبال کنید!
					</p>
					<p className="text-sm leading-6 text-white/80">
						هفت روز هفته، از ساعت ۸ الی ۲۴ پاسخگوی سوالات شما هستیم.
						<br />
						تلفن : ****939206 .****0917272
					</p>
				</div>
			</div>

			<div className="mt-10 flex flex-wrap items-center justify-center gap-4">
				{trustImg.map((item) => (
					<div
						key={item.alt}
						className="flex w-18 items-center bg-white p-1 rounded-xl"
					>
						<img src={item.src} alt={item.alt} />
					</div>
				))}
			</div>

			<div className="border-t border-white/10 mt-10">
				<div className="mx-auto max-w-6xl px-6 py-5">
					<p className="text-center text-sm text-white/70">
						کلیه حقوق این سایت متعلق به فروشگاه آنلاین بیونیک می‌باشد.
					</p>
				</div>
			</div>
		</footer>
	);
}