import Image from 'next/image';
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const page = () => {
  return (
    <>
      <h1 className='text-4xl md:text-7xl p-[50px_4%] text-center md:text-start md:p-[100px_8%]'><span className='text-gray-400'>НАШИ</span> <br />
        <strong>ПРОЕКТЫ</strong>
      </h1>

      <section className="w-full max-md:px-4 mt-10">
        <div className='flex justify-between items-center w-[85%] m-auto max-md:flex-col max-md:items-center max-md:gap-6'>

          <Image
            src={"/image 30.png"}
            width={670}
            height={435}
            alt='not found'
            className="max-md:w-full max-md:h-auto rounded-lg"
          />

          <div className="max-md:text-center max-md:w-full">
            <h2 className='text-[#BDBDBD] text-[40px] max-md:text-2xl leading-snug'>
              Общеобразовательная <br /> школа
            </h2>

            <p className='mt-4 text-[16px] max-md:text-sm leading-6 text-gray-700'>
              Lorem Ipsum is simply dummy text of the printing and <br className="max-md:hidden" />
              typesetting industry. Lorem Ipsum has been the <br className="max-md:hidden" />
              industry s standard dummy text ever since the 1500s, <br className="max-md:hidden" />
              when an unknown printer took a galley of type and <br className="max-md:hidden" />
              scrambled it to make a type specimen book.
            </p>

            <button className='flex items-center justify-center gap-3 mt-5 px-5 py-2 text-[16px] max-md:text-sm bg-gray-200 rounded-lg hover:bg-gray-300 transition'>
              СМОТРЕТЬ <FaArrowRight />
            </button>
          </div>

        </div>
      </section>
      <br /><br />

      <section className="w-full max-md:px-4 mt-10">
        <div className='flex justify-between items-center w-[85%] m-auto max-md:flex-col max-md:items-center max-md:gap-6'>

          <Image
            src={"/image 32.png"}
            width={670}
            height={435}
            alt='not found'
            className="max-md:w-full max-md:h-auto rounded-lg"
          />

          <div className="max-md:text-center max-md:w-full">
            <h2 className='text-[#BDBDBD] text-[40px] max-md:text-2xl leading-snug'>
              Паркинг на 500 <br /> автомобилей
            </h2>

            <p className='mt-4 text-[16px] max-md:text-sm leading-6 text-gray-700'>
              Lorem Ipsum is simply dummy text of the printing and <br className="max-md:hidden" />
              typesetting industry. Lorem Ipsum has been the <br className="max-md:hidden" />
              industry s standard dummy text ever since the 1500s, <br className="max-md:hidden" />
              when an unknown printer took a galley of type and <br className="max-md:hidden" />
              scrambled it to make a type specimen book.
            </p>

            <button className='flex items-center justify-center gap-3 mt-5 px-5 py-2 text-[16px] max-md:text-sm bg-gray-200 rounded-lg hover:bg-gray-300 transition'>
              СМОТРЕТЬ <FaArrowRight />
            </button>
          </div>

        </div>
      </section>
      <br /><br />

      <section className="w-full max-md:px-4 mt-10">
        <div className='flex justify-between items-center w-[85%] m-auto max-md:flex-col max-md:items-center max-md:gap-6'>

          <Image
            src={"/image 33.png"}
            width={670}
            height={435}
            alt='not found'
            className="max-md:w-full max-md:h-auto rounded-lg"
          />

          <div className="max-md:text-center max-md:w-full">
            <h2 className='text-[#BDBDBD] text-[40px] max-md:text-2xl leading-snug'>
              Проект интерьера <br /> офиса
            </h2>

            <p className='mt-4 text-[16px] max-md:text-sm leading-6 text-gray-700'>
              Lorem Ipsum is simply dummy text of the printing and <br className="max-md:hidden" />
              typesetting industry. Lorem Ipsum has been the <br className="max-md:hidden" />
              industry s standard dummy text ever since the 1500s, <br className="max-md:hidden" />
              when an unknown printer took a galley of type and <br className="max-md:hidden" />
              scrambled it to make a type specimen book.
            </p>

            <button className='flex items-center justify-center gap-3 mt-5 px-5 py-2 text-[16px] max-md:text-sm bg-gray-200 rounded-lg hover:bg-gray-300 transition'>
              СМОТРЕТЬ <FaArrowRight />
            </button>
          </div>

        </div>
      </section>
      <br /><br />

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
