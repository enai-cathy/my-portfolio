"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export default function PhotoCarousel() {
  const images = [1, 2, 3, 4, 5].map((n) => `/photos/photo${n}.jpg`);
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
      }}
    >
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <img
            src={src}
            className="rounded-xl w-full h-64 object-cover"
            alt={`Photo ${i + 1}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
