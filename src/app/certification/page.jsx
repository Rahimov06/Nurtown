'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const page = () => {

  const images = [
    { src: "/photo_2019-05-23_19-46-11-800x1067.png", alt: "certificate 1" },
    { src: "/photo_2019-05-23_19-46-10-800x1067.png", alt: "certificate 2" },
    { src: "/photo_2019-05-23_19-46-09.png", alt: "certificate 3" },
    { src: "/photo_2019-05-23_19-46-11-800x1067.png", alt: "certificate 4" },
    { src: "/photo_2019-05-23_19-46-10-800x1067.png", alt: "certificate 5" },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 3 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev >= images.length - 3 ? 0 : prev + 1
    );
  };

  return (
    <>
      <h1 className='text-4xl md:text-7xl text-center md:text-start p-[100px_8%]'>
        <span className='text-gray-400'>СЕРТИФИКАТЫ</span><br />
        <strong>КОМПАНИИ</strong>
      </h1>

      {/* Slider */}
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * (100 / 3)}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="min-w-[33.333%] flex justify-center">
              <Image
                src={img.src}
                width={300}
                height={420}
                alt={img.alt}
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className='flex w-[85%] m-auto justify-center md:justify-end items-center gap-4 mt-6 mb-6'>
        <div className="text-2xl text-gray-500">
          {current + 1} / {images.length - 2}
        </div>

        <button
          onClick={prevSlide}
          className="p-[10px_15px] bg-gray-200 rounded-xl hover:bg-gray-300 transition"
        >
          <FaArrowLeft size={22} />
        </button>

        <button
          onClick={nextSlide}
          className="p-[10px_15px] bg-gray-200 rounded-xl hover:bg-gray-300 transition"
        >
          <FaArrowRight size={22} />
        </button>
      </div>
    </>
  );
}

export default page;