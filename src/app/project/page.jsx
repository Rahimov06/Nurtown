import Image from 'next/image';
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const page = () => {
  return (
    <>
      <h1 className='text-7xl p-[100px_8%]'><span className='text-gray-400'>НАШИ</span> <br />
        <strong>ПРОЕКТЫ</strong>
      </h1>

      <section>
        <div className='flex justify-between w-[85%] m-auto items-center'>
          <Image src={"/image 30.png"} width={670} height={435} alt='not found' />
          <div>
            <h2 className='text-[#BDBDBD] text-[40px]'>Общеобразовательная <br /> школа</h2> <br />
            <p>Lorem Ipsum is simply dummy text of the printing and <br />
              typesetting industry. Lorem Ipsum has been the <br />
              industry s standard dummy text ever since the 1500s, <br />
              when an unknown printer took a galley of type and <br />
              scrambled it to make a type specimen book.</p> <br />

            <button className='flex items-center text-[16px] gap-3 p-[10px_20px] '>СМОТРЕТЬ <FaArrowRight /></button>
          </div>
        </div>
      </section> <br /><br />

      <section>
        <div className='flex justify-between w-[85%] m-auto items-center'>
          <Image src={"/image 32.png"} width={670} height={435} alt='not found' />
          <div>
            <h2 className='text-[#BDBDBD] text-[40px]'>Паркинг на 500 <br /> автомобилей</h2> <br />
            <p>Lorem Ipsum is simply dummy text of the printing and <br />
              typesetting industry. Lorem Ipsum has been the <br />
              industry s standard dummy text ever since the 1500s, <br />
              when an unknown printer took a galley of type and <br />
              scrambled it to make a type specimen book.</p> <br />

            <button className='flex items-center text-[16px] gap-3 p-[10px_20px] '>СМОТРЕТЬ <FaArrowRight /></button>
          </div>
        </div>
      </section> <br /><br />

      <section>
        <div className='flex justify-between w-[85%] m-auto items-center'>
          <Image src={"/image 33.png"} width={670} height={435} alt='not found' />
          <div>
            <h2 className='text-[#BDBDBD] text-[40px]'>Проект интерьера <br /> офиса</h2> <br />
            <p>Lorem Ipsum is simply dummy text of the printing and <br />
              typesetting industry. Lorem Ipsum has been the <br />
              industry s standard dummy text ever since the 1500s, <br />
              when an unknown printer took a galley of type and <br />
              scrambled it to make a type specimen book.</p> <br />

            <button className='flex items-center text-[16px] gap-3 p-[10px_20px] '>СМОТРЕТЬ <FaArrowRight /></button>
          </div>
        </div>
      </section> <br /><br />

      <div className='flex w-[85%] m-auto justify-start items-center'>
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
