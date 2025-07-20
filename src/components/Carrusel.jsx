import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Carrusel() {
  const images = [
    "./1.home/2.png",
    "./1.home/3.png",
    "./1.home/4.png",
    "./1.home/5.png",
    "./1.home/7.png",
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {windowWidth >= 1024 && (
        <div className="mt-[100px]">
          <div className="w-full flex flex-wrap justify-center items-center gap-20">
            {images.map((img, index) => (
              <img
                key={`desktop-${index}`}
                src={img}
                alt={`Logo ${index}`}
                className="w-[100px] object-contain"
              />
            ))}
          </div>
        </div>
      )}

      {windowWidth >= 768 && windowWidth < 1024 && (
        <div className="w-full max-w-[90vw] mx-auto py-10">
          <Swiper
            key={`tablet-${windowWidth}`}
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={images.length > 3}
            spaceBetween={10}
            slidesPerView={3}
            className="h-[80px]"
            observer={true}
            updateOnWindowResize={true}
          >
            {images.map((img, index) => (
              <SwiperSlide
                key={`tablet-slide-${index}`}
                className="flex items-center justify-center"
              >
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  className="max-w-[150px] max-h-[60px] object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {windowWidth < 768 && (
        <div className="w-full max-w-[90vw] mx-auto py-5 px-4">
          <Swiper
            key={`mobile-${windowWidth}`}
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            direction="vertical"
            loop={images.length > 2}
            spaceBetween={20}
            slidesPerView={2}
            className="h-[200px] w-[155px] mx-auto"
            observer={true}
            updateOnWindowResize={true}
          >
            {images.map((img, index) => (
              <SwiperSlide
                key={`mobile-slide-${index}`}
                className="flex items-center justify-center"
              >
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  className="max-w-[120px] max-h-[80px] object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
