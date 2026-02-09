import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type Item = {
	id: number;
	img: string;
	alt: string;
	name: string;
  post:string;
	desc: string;
};

const items: Item[] = [
	{
		id: 1,
		img: "public/assets/svg/profile-round-1342-svgrepo-com (1).svg",
		alt: "profile",
		name: "محمد خواجه",
		post: "مدیرعامل",
		desc: "هدایت استراتژی برند، توسعه بازار و خلق تجربه‌ای متمایز در دنیای زیبایی",
	},
	{
		id: 2,
		img: "public/assets/svg/profile-round-1342-svgrepo-com (1).svg",
		alt: "profile",
		name: "عرفان سرلک",
		post: "مدیر ارشد فروش",
		desc: "توسعه فروش، ارتباط با مشتریان و رشد پایدار برندهای آرایشی",
	},
	{
		id: 3,
		img: "public/assets/svg/profile-round-1342-svgrepo-com (1).svg",
		alt: "profile",
		name: "ارشیا سپاهی",
		post: "مدیر بازاریابی",
		desc: "برندسازی، تبلیغات دیجیتال و طراحی کمپین‌های خلاقانه زیبایی",
	},
	{
		id: 4,
		img: "public/assets/svg/profile-round-1342-svgrepo-com (1).svg",
		alt: "profile",
		name: "الهام شاه رضایی",
		post: "مدیر تأمین و محصولات",
		desc: "انتخاب برندهای معتبر، کنترل کیفیت و تأمین محصولات اورجینال",
	},
	{
		id: 5,
		img: "public/assets/svg/profile-round-1342-svgrepo-com (1).svg",
		alt: "profile",
		name: "سارا کمیستانی",
		post: "مدیر پشتیبانی و تجربه مشتری",
		desc: "پشتیبانی تخصصی، افزایش رضایت مشتری و ایجاد اعتماد بلندمدت",
	},
];
export default function Colleagues() {
	return (
		<div className="flex flex-col justify-center items-center gap-10 pb-10">
			<div>
				<h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
					همکاران
				</h1>
			</div>
			<div className="w-full p-5">
				<Swiper
					modules={[Pagination, Navigation]}
					spaceBetween={16}
					breakpoints={{
						0: { slidesPerView: 1.15 },
						640: { slidesPerView: 2.2 },
						1024: { slidesPerView: 3.2 },
					}}
				>
					{items.map((item) => (
						<SwiperSlide key={item.id}>
							<div className="flex flex-col gap-3 h-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
								<div className="w-full flex justify-center bg-gray-100 p-8 rounded-md">
									<img src={item.img} alt={item.alt} />
								</div>
								<div className="flex flex-col gap-2">
									<p className="text-lg font-bold">{item.name}</p>
									<p className="text-sm text-gray-600">{item.post}</p>
									<p className="text-sm text-gray-600">{item.desc}</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}
