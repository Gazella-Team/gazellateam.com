import React, { useMemo, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
// hey

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useMediaQuery from "@/hooks/use-media-query";

const caseData = [
    "/",
    "/",
    "/",
    "/",
    "/",
    "/",
    "/",
    "/",
    "/",
]

export default function CaseSwiper() {
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);
  const swiperRef = useRef<SwiperRef>(null);
  const { isMobile, isTablet, isDesktop } = useMediaQuery();

  function onArrowClick(direction: "prev" | "next") {
    if (swiperRef.current) {
      if (direction == "prev") {
        if (swiperRef.current.swiper.isBeginning) {
          swiperRef.current.swiper.slideTo(
            swiperRef.current.swiper.slides.length - 1
          );
          return;
        }
        swiperRef.current.swiper.slidePrev();
      } else {
        if (swiperRef.current.swiper.isEnd) {
          swiperRef.current.swiper.slideTo(0);
          return;
        }
        swiperRef.current.swiper.slideNext();
      }
    }
  }

  return (
    <>
      <section>
        <div className="w-[90%] mx-auto max-w-8xl">
          <div className="flex items-center justify-end gap-2 mb-4">
            <div
              onClick={() => onArrowClick("prev")}
              className="p-4 bg-white border border-gray-300 rounded shadow cursor-pointer active:scale-95"
            >
              <ArrowLeft size={20} />
            </div>
            <div
              onClick={() => onArrowClick("next")}
              className="p-4 bg-white border border-gray-300 rounded shadow cursor-pointer active:scale-95"
            >
              <ArrowRight size={20} />
            </div>
          </div>
          <Swiper
              ref={swiperRef}
              slidesPerView={isDesktop ? 2 : 1}
              spaceBetween={30}
              className="mySwiper"
            >
              {caseData.map((v, index) => (
                <SwiperSlide key={index}>
                  <img className="rounded-3xl" src="/cases/toolbird.webp"></img>
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
      </section>
    </>
  );
}

