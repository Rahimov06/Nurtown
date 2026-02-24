import Image from 'next/image';
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const page = () => {
  return (
    <>
      <h1 className='text-4xl md:text-7xl p-[50px_4%] text-center md:text-start md:p-[100px_8%]'><span className='text-gray-400'>НАШИ</span> <br />
        <strong>ПРОЕКТЫ</strong>
      </h1>

      <section className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/image 30.png"
              alt="Общеобразовательная школа"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="text-center lg:text-left space-y-6">

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 leading-snug">
              Общеобразовательная школа
            </h2>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>

            <button className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-700 transition-all duration-300">
              СМОТРЕТЬ <FaArrowRight size={18} />
            </button>

          </div>

        </div>
      </section>

      <section className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/image 32.png"
              alt="Паркинг на 500 автомобилей"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left space-y-6">

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 leading-snug">
              Паркинг на 500 автомобилей
            </h2>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>

            <button className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-700 transition-all duration-300">
              СМОТРЕТЬ <FaArrowRight size={18} />
            </button>

          </div>

        </div>
      </section>


      <section className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/image 33.png"
              alt="Проект интерьера офиса"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left space-y-6">

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 leading-snug">
              Проект интерьера офиса
            </h2>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>

            <button className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-700 transition-all duration-300">
              СМОТРЕТЬ <FaArrowRight size={18} />
            </button>

          </div>

        </div>
      </section>

      <div className='flex w-[85%] m-auto justify-start items-center'>
        <p className='md:text-5xl text-3xl p-[100px_8%]'><strong>01</strong>  <span className='text-gray-400'>/  05</span> </p>
        <button className=" cursor-pointer p-[5px_10px] md:p-[15px_20px] bg-gray-200 rounded-xl">
          <FaArrowLeft size={28} color="#333" />

        </button>
        <button className=" cursor-pointer p-[5px_10px] md:p-[15px_20px] ml-5 bg-gray-200 rounded-xl">

          <FaArrowRight size={28} color="#333" />
        </button>
      </div>
    </>
  );
}

export default page;
