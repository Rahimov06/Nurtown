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

      <h1 className='text-7xl p-[100px_8%]'><span className='text-gray-400'>ГАЛЕРЕЯ</span> <br />
        <strong>ФОТОГРАФИЙ</strong>
      </h1>

      <section>
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
        </div>

        <div className='flex w-[85%] m-auto justify-start items-center'>
          <p className='text-5xl p-[100px_8%]'><strong>01</strong>  <span className='text-gray-400'>/  05</span> </p>
          <button className=" cursor-pointer p-[15px_20px] bg-gray-200 rounded-xl">
            <FaArrowLeft size={28} color="#333" />

          </button>
          <button className=" cursor-pointer p-[15px_20px] ml-5 bg-gray-200 rounded-xl">

            <FaArrowRight size={28} color="#333" />
          </button>
        </div>

      </section>
    </>
  );
}

export default page;
