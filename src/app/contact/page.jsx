import Image from 'next/image';
import React from 'react';
import NestedModal from '../component/modal';

const page = () => {

  return (
    <>

      <section className='flex w-[85%] m-auto justify-between gap-5 pt-[50px] items-center pb-[50px]'>
        <div>
          <h1 className='text-6xl'><span className='text-gray-400'>КОНТАКТНАЯ</span> <br />
            <strong>ИНФОРМАЦИЯ</strong>
          </h1> <br />
          <h3><strong>«Digital Project»</strong> <br />
            г. Караганда, ул. Телевизионная 10 </h3> <br />

          <strong>+7 (701) 77 76 811</strong> <br /> <br />
          <p>Galym.sultanov@mail.ru</p> <br />
          <NestedModal/>
        </div>

        <Image src={"/image 14.png"} width={700} height={501} alt='not found'/>

      </section>

    </>
  );
}

export default page;

