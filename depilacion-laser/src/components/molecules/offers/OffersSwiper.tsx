'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'
import { BarlowText } from '@/components/atoms/BarlowText'
import { Pagination } from 'swiper/modules'
import 'swiper/css/bundle'
import Link from 'next/link'

export default function OffersSwiper() {
  const swipers = [
    {
      image: `${process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/prices_cards_section/depilation_example1.jpg'}`,
      alt: 'Depilation example',
      title: '¡Primera depilación al 50%!',
      description:
        'Aprovecha esta oferta exclusiva y disfruta de una piel suave y sin vello. ¡No te lo pierdas!',
    },
    {
      image: `${process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/prices_cards_section/depilation_example1.jpg'}`,
      alt: 'Depilation example',
      title: '¡Primera depilación al 50%!',
      description:
        'Aprovecha esta oferta exclusiva y disfruta de una piel suave y sin vello. ¡No te lo pierdas!',
    },
    {
      image: `${process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/prices_cards_section/depilation_example1.jpg'}`,
      alt: 'Depilation example',
      title: '¡Primera depilación al 50%!',
      description:
        'Aprovecha esta oferta exclusiva y disfruta de una piel suave y sin vello. ¡No te lo pierdas!',
    },
    {
      image: `${process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/prices_cards_section/depilation_example1.jpg'}`,
      alt: 'Depilation example',
      title: '¡Primera depilación al 50%!',
      description:
        'Aprovecha esta oferta exclusiva y disfruta de una piel suave y sin vello. ¡No te lo pierdas!',
    },
  ]
  return (
    <div className="mx-auto max-w-[1000px] px-4 pt-16">
      <Swiper
        spaceBetween={20}
        slidesPerView={'auto'}
        centeredSlides={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {swipers.map((item, index) => {
          return (
            <SwiperSlide>
              <div className="flex flex-col items-center gap-6 rounded-lg  p-6 shadow-lg transition-transform duration-500 hover:scale-105 md:flex-row md:gap-12 lg:gap-16">
                <div className="flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={300}
                    height={400}
                    unoptimized
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="flex flex-col items-center justify-center gap-1 text-gray-800 md:gap-8">
                  <BarlowText
                    text={''}
                    fontSize="40px"
                    className="mb-4 text-center"
                  />
                  <BarlowText
                    text={item.description}
                    fontSize="20px"
                    className="pb-1 text-center text-lg leading-relaxed"
                  />
                  <Link href="/contacto">
                    <button
                      type="submit"
                      className="inline-flex w-fit items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700  disabled:opacity-50"
                    >
                      ¡Reserva ya tu cita!
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className="mt-4 flex justify-center">
        <div className="swiper-pagination"></div>
      </div>
    </div>
  )
}
