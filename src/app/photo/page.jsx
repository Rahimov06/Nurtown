'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  const images = [
    "/image.png",
    "/Rectangle 23.png",
    "/Rectangle 24.png",
    "/Rectangle 25.png",
    "/Rectangle 26.png",
    "/Rectangle 27.png",
    "/Rectangle 28.png",
    "/image.png",
    "/Rectangle 29.png",
    "/Rectangle 30.png",
    "/Rectangle 30.png",
    "/Rectangle 24.png",
    "/Rectangle 31.png",
    "/Rectangle 25.png",
    "/Rectangle 23.png",
    "/Rectangle 26.png",
    "/Rectangle 28.png",
    "/Rectangle 27.png",
    "/Rectangle 29.png",
    "/Rectangle 31.png",
  ];

  const imagesPerPage = 10;
  const totalPages = Math.ceil(images.length / imagesPerPage);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const startIndex = current * imagesPerPage;
  const currentImages = images.slice(startIndex, startIndex + imagesPerPage);

  // Формат кардани рақамҳо барои намоиш (01, 02)
  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <>
      <h1 className='text-7xl max-md:text-4xl p-[80px_8%] md:text-start pb-[50px] text-center'>
        <span className='text-gray-400'>{t('galleryp.title')}</span> <br />
        <strong>{t('galleryp.subtitle')}</strong>
      </h1>

      <section className="w-full max-md:px-4">
        <div className="max-w-[85%] mx-auto p-4 hidden md:block overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => {
              const start = pageIndex * imagesPerPage;
              const pageImages = images.slice(start, start + imagesPerPage);

              return (
                <div
                  key={pageIndex}
                  className="min-w-full grid grid-cols-5 gap-4"
                >
                  {pageImages.map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      width={210}
                      height={260}
                      alt={`${t('galleryp.alt')}-${pageIndex * imagesPerPage + i + 1}`}
                      className="w-full h-[260px] object-cover rounded-lg"
                    />
                  ))}
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div className='flex items-center gap-4 mt-8'>
            <div className="text-3xl text-gray-500">
              {formatNumber(current + 1)} / {formatNumber(totalPages)}
            </div>

            <button
              onClick={prevSlide}
              className="p-3 bg-gray-200 rounded-xl hover:bg-gray-300 transition"
              aria-label={t('gallery.previous')}
            >
              <FaArrowLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              className="p-3 bg-gray-200 rounded-xl hover:bg-gray-300 transition"
              aria-label={t('gallery.next')}
            >
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden w-full overflow-hidden mt-10">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => {
              const start = pageIndex * imagesPerPage;
              const pageImages = images.slice(start, start + imagesPerPage);

              return (
                <div
                  key={pageIndex}
                  className="min-w-full flex flex-row items-center gap-6 overflow-x-auto px-4"
                >
                  {pageImages.slice(0, 5).map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      width={400}
                      height={250}
                      alt={`${t('gallery.alt')}-mobile-${pageIndex * imagesPerPage + i + 1}`}
                      className="min-w-[85%] h-[250px] object-cover rounded-lg"
                    />
                  ))}
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4 mt-6 justify-center">
            <div className="text-3xl text-gray-500">
              {formatNumber(current + 1)} / {formatNumber(totalPages)}
            </div>

            <button
              onClick={prevSlide}
              className="p-3 bg-gray-200 rounded-xl hover:bg-gray-300 transition"
              aria-label={t('gallery.previous')}
            >
              <FaArrowLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              className="p-3 bg-gray-200 rounded-xl hover:bg-gray-300 transition"
              aria-label={t('gallery.next')}
            >
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
