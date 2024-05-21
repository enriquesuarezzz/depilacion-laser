'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Image from 'next/image'
import { MulishText } from '@/components/atoms/MulishText'
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules'

export default function OffersSwiper() {
  return (
    <div className="mx-auto flex max-w-[1000px] content-center items-center justify-center pt-16  ">
      <Swiper
        spaceBetween={10}
        slidesPerView={'auto'}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex gap-3 md:gap-36 lg:content-center lg:justify-center ">
            <div className="w-fit">
              <Image
                src={
                  process.env.NEXT_PUBLIC_IMAGES_PATH +
                  '/images/prices_cards_section/depilation_example1.jpg'
                }
                alt=""
                width={300}
                height={400}
                unoptimized
                className=" "
              />
            </div>
            <div className="w-fit content-center justify-center">
              <MulishText
                text={'¡Primera depilación al 50%!'}
                style="w500"
                fontSize="40px"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/about_us.jpg'}
            alt="Robert image"
            width={200}
            height={200}
            unoptimized
            className=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/about_us.jpg'}
            alt="Robert image"
            width={200}
            height={200}
            className=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/about_us.jpg'}
            alt="Robert image"
            width={200}
            height={200}
            className=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
