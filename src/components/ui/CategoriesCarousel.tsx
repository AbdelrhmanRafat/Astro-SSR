import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Category {
  name: string;
  image: string;
}

interface CategoriesCarouselProps {
  categories: Category[];
}

const CategoriesCarousel: React.FC<CategoriesCarouselProps> = ({ categories }) => {
  return (
    <div className="w-full px-4 py-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="categories-swiper"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="group relative bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 group-hover:text-main transition-colors duration-300">
                  {category.name}
                </h2>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>
        {`
          .categories-swiper {
            padding: 20px 0;
          }
          
          .swiper-button-next,
          .swiper-button-prev {
            color: #4F46E5;
            background: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          }

          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 18px;
          }

          .swiper-pagination-bullet-active {
            background: #4F46E5;
          }

          .swiper-pagination-bullet {
            background: #E5E7EB;
          }
        `}
      </style>
    </div>
  );
};

export default CategoriesCarousel;
