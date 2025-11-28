import Image from 'next/image';
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const page = () => {
  return (
    <>
      <h1 className='text-7xl p-[100px_8%]'><span className='text-gray-400'>СЕРТИФИКАТЫ</span> <br />
        <strong>КОМПАНИИ</strong>
      </h1>

      <section className='flex w-[85%] m-auto justify-between items-center'>

        <Image src={"/photo_2019-05-23_19-46-11-800x1067.png"} width={337.5} height={450} alt='not found' />
        <Image src={"/photo_2019-05-23_19-46-10-800x1067.png"} width={337.5} height={450} alt='not found' />
        <Image src={"/photo_2019-05-23_19-46-09.png"} width={337.5} height={450} alt='not found' />
      </section>

      <div className='flex w-[85%] m-auto justify-end items-center'>
        <p className='text-5xl p-[100px_8%]'><strong>01</strong>  <span className='text-gray-400'>/  05</span> </p>
        <button className=" cursor-pointer p-[15px_20px] bg-gray-200 rounded-xl">
          <FaArrowLeft size={28} color="#333" />

        </button>
        <button className=" cursor-pointer p-[15px_20px] ml-5 bg-gray-200 rounded-xl">
          <FaArrowRight size={28} color="#333" />
        </button>
      </div>
    </>
  );
  
}

export default page;
