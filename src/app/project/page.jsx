/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const page = () => {
  const { t } = useTranslation('common');
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      image: "/image 30.png",
      title: t('projectspg.items.0.title'),
      description: t('projectspg.items.0.description'),
      alt: t('projectspg.items.0.alt')
    },
    {
      image: "/image 32.png",
      title: t('projectspg.items.1.title'),
      description: t('projectspg.items.1.description'),
      alt: t('projectspg.items.1.alt')
    },
    {
      image: "/image 33.png",
      title: t('projectspg.items.2.title'),
      description: t('projectspg.items.2.description'),
      alt: t('projectspg.items.2.alt')
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <>
      <h1 className='text-4xl md:text-7xl p-[50px_4%] pt-20 text-center md:text-start md:p-[100px_8%]'>
        <span className='text-gray-400'>{t('projectspg.page.title')}</span> <br />
        <strong>{t('projectspg.page.subtitle')}</strong>
      </h1>

      <section className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-md">
            <Image
              src={projects[currentIndex].image}
              alt={projects[currentIndex].alt}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="text-center lg:text-left space-y-6">

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 leading-snug">
              {projects[currentIndex].title}
            </h2>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              {projects[currentIndex].description}
            </p>

            <button className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-700 transition-all duration-300">
              {t('projectspg.page.view')} <FaArrowRight size={18} />
            </button>

          </div>

        </div>
      </section>

      <div className='flex w-[85%] m-auto justify-start items-center'>
        <p className='md:text-5xl text-3xl p-[100px_8%]'>
          <strong>0{currentIndex + 1}</strong>
          <span className='text-gray-400'> / 0{projects.length}</span>
        </p>

        <button onClick={prevSlide} className="cursor-pointer p-[5px_10px] md:p-[15px_20px] bg-gray-200 rounded-xl">
          <FaArrowLeft size={28} color="#333" />
        </button>

        <button onClick={nextSlide} className="cursor-pointer p-[5px_10px] md:p-[15px_20px] ml-5 bg-gray-200 rounded-xl">
          <FaArrowRight size={28} color="#333" />
        </button>
      </div>
    </>
  );
}

export default page;
