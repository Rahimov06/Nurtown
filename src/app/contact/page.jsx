import Image from 'next/image';
import React from 'react';
import NestedModal from '../component/modal';

const page = () => {

  return (
    <>

      <section className='flex items-center w-[85%] m-auto justify-between gap-5 pt-[50px] pb-[50px] max-md:flex-col max-md:items-center max-md:gap-6 max-md:w-full max-md:px-4'>

        <div className='max-md:text-center max-md:w-full'>
          <h1 className='text-6xl max-md:text-4xl'>
            <span className='text-gray-400'>КОНТАКТНАЯ</span> <br />
            <strong>ИНФОРМАЦИЯ</strong>
          </h1>

          <h3 className='mt-4 text-gray-700'>
            <strong>«Digital Project»</strong> <br />
            г. Караганда, ул. Телевизионная 10
          </h3>

          <strong className='mt-3 block'>+7 (701) 77 76 811</strong>
          <p className='mt-2'>Galym.sultanov@mail.ru</p>

          <div className='mt-5'>
            <NestedModal />
          </div>
        </div>

        <div className='w-full max-md:w-full h-[400px] mt-6 max-md:mt-4'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2910.123456!2d73.123456!3d49.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x417d3b8c123456%3A0xabcdef123456!2sKaraganda%2C%20Television%20St%2010!5e0!3m2!1sen!2skz!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>

      </section>


    </>
  );
}

export default page;

