import Image from 'next/image';
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const page = () => {
  const images = [
    "/image.png",
    "/Rectangle 23.png",
    "/Rectangle 24.png",
    "/Rectangle 25.png",
    "/Rectangle 26.png",
    "/Rectangle 27.png",
    "/Rectangle 28.png",
    "/Rectangle 29.png",
    "/Rectangle 30.png",
    "/Rectangle 31.png",

  ];
  return (
    <>

      <h1 className='text-7xl max-md:text-4xl p-[80px_8%] md:text-start pb-[50px] text-center'>
        <span className='text-gray-400'>ГАЛЕРЕЯ</span> <br />
        <strong>ФОТОГРАФИЙ</strong>
      </h1>

      <section className="w-full max-md:px-4">

        <div className="max-w-[85%] mx-auto p-4 hidden md:block">
          <div className="grid grid-cols-5 gap-4">
            {images.map((src, i) => (
              <Image
                key={i}
                src={src}
                width={210}
                height={260}
                alt={`img-${i}`}
                className="w-full h-[260px] object-cover rounded-lg"
              />
            ))}
          </div>
          <div className='flex items-center gap-4 p-[30px_0px] mt-4'>
            <p className='text-4xl max-md:text-3xl'>
              <strong>01</strong> <span className='text-gray-400'>/ 05</span>
            </p>
            <button className="cursor-pointer p-[10px_15px] bg-gray-200 rounded-xl">
              <FaArrowLeft size={24} color="#333" />
            </button>
            <button className="cursor-pointer p-[10px_15px] bg-gray-200 rounded-xl">
              <FaArrowRight size={24} color="#333" />
            </button>
          </div>

        </div>

        <div className='flex md:hidden pb-[50px] flex-col max-md:items-center w-full gap-6 mt-10'>
          {images.map((src, i) => (
            <Image
              key={i}
              src={src}
              width={400}
              height={250}
              alt={`img-mobile-${i}`}
              className="w-full max-w-[85%] h-[250px] object-cover rounded-lg"
            />
          ))}

          <div className='flex items-center gap-4 mt-4'>
            <p className='text-4xl max-md:text-3xl'>
              <strong>01</strong> <span className='text-gray-400'>/ 05</span>
            </p>
            <button className="cursor-pointer p-[10px_15px] bg-gray-200 rounded-xl">
              <FaArrowLeft size={24} color="#333" />
            </button>
            <button className="cursor-pointer p-[10px_15px] bg-gray-200 rounded-xl">
              <FaArrowRight size={24} color="#333" />
            </button>
          </div>
        </div>

      </section>

    </>
  );
}

export default page;
