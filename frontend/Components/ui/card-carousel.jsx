"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Clock, BriefcaseMedical } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

import { Badge } from "@/components/ui/badge";

export const CardCarousel = ({
  images,
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
}) => {
  const css = `
    .swiper {
      width: 100%;
      padding-bottom: 50px;
    }
    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 300px;
    }
    .swiper-slide img {
      display: block;
      width: 100%;
    }
    .swiper-3d .swiper-slide-shadow-left,
    .swiper-3d .swiper-slide-shadow-right {
      background: none;
    }
  `;

  return (
    <section className="space-y-4 w-full">
      <style>{css}</style>

      <div className="mx-auto w-full max-w-4xl rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-t-[44px]">
        <div className="relative mx-auto flex w-full flex-col rounded-[24px] border border-black/5 bg-neutral-800/5 p-4 shadow-sm md:items-start md:gap-8 md:rounded-t-[40px]">
          <Badge
            variant="outline"
            className="absolute left-4 top-4 rounded-[14px] border border-black/10 text-base md:left-6"
          >
            <BriefcaseMedical className="fill-[#EEBDE0] stroke-1 text-neutral-800 mr-1" />
            LawConnect Welcomes You...
          </Badge>

          <div className="flex flex-col justify-center items-center text-center pt-16 pb-4 px-4">
            <h3 className="text-4xl font-bold text-center tracking-tight opacity-85">
              All Lawyers...
            </h3>
            <p className="text-sm text-center text-muted-foreground">
              Get in touch with the best Lawyers here...
            </p>
          </div>

          <div className="flex w-full items-center justify-center">
            <div className="w-full">
              <Swiper
                spaceBetween={50}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={showPagination}
                navigation={
                  showNavigation
                    ? {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }
                    : undefined
                }
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
              >
                {images.map((lawyer, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-blue-900 p-4 rounded-3xl text-white text-center cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg">
                      <img
                        src={`${lawyer.image}`}
                        width={300}
                        height={300}
                        alt={lawyer.name}
                        className="rounded-2xl object-cover w-full h-[300px]"
                        onContextMenu={(e) => e.preventDefault()}
                      />
                      <div className="mt-2">
                        <p className="bg-green-500 inline-flex items-center gap-1 px-2 py-1 rounded-md mb-1 text-sm font-medium">
                          <Clock size={16} /> Available
                        </p>
                        <h1 className="font-bold text-xl">{lawyer.name}</h1>
                        <p>{lawyer.experience}</p>
                        <p>{lawyer.speciality}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
