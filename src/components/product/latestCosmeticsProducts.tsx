import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routers/routes';
import { mockProducts } from '../../data/mockProducts';

export function LatestCosmeticsProducts() {
  const navigate = useNavigate();

  const handleProductClick = (productId: string) => {
    navigate(`${ROUTES.product}?id=${productId}`);
  };

  const handleMoreClick = () => {
    navigate(`${ROUTES.product}?latest=true`);
  };

  const displayedProducts = mockProducts.slice(0, 15);

  return (
    <div className="flex flex-col gap-6 py-8 px-26">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
        جدیدترین های ارایشی
      </h2>
      
      <div className="px-4 relative">
        <style>{`
          .swiper-button-next,
          .swiper-button-prev {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 40px;
            height: 40px;
            margin-top: 0;
            z-index: 10;
          }
          .swiper-button-next {
            right: -50px;
          }
          .swiper-button-prev {
            left: -50px;
          }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 20px;
            font-weight: bold;
          }
        `}</style>
        <div className="px-8">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={21}
            slidesPerView={6}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 19,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 21,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 21,
              },
            }}
            className="w-full"
          >
          {displayedProducts.map((product) => (
            <SwiperSlide key={product.id} style={{ height: 'auto' }}>
              <div
                onClick={() => handleProductClick(product.id)}
                className="bg-[#b87df4] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer flex flex-col pb-3"
                style={{ width: '75%', margin: '0 auto', minHeight: '200px', height: '200px' }}
              >
                <div className="w-full flex justify-center items-center pt-[8%] px-[8%] pb-[8%] flex-shrink-0">
                  <div className="w-full aspect-square overflow-hidden bg-gray-100 rounded-xl">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="px-1 pb-[8%] pt-0 flex items-center justify-center flex-shrink-0" style={{ minHeight: '60px', height: '60px' }}>
                  <h3 className="text-xs md:text-sm font-medium text-white text-center line-clamp-2">
                    {product.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
          </Swiper>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={handleMoreClick}
          className="px-6 py-2 bg-transparent text-[#b87df4] hover:opacity-80 transition-opacity font-medium"
        >
          بیشتر
        </button>
      </div>
    </div>
  );
}
