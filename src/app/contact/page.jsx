"use client"
import Image from 'next/image';
import React from 'react';
import NestedModal from '../component/contactcoponent/modal';
import { useTranslation } from 'react-i18next';

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation('common');

  return (
    <>
      <section className='flex items-center w-[85%] m-auto justify-between gap-5 pt-20 pb-[50px] max-md:flex-col max-md:items-center max-md:gap-6 max-md:w-full max-md:px-4'>

        <div className='max-md:text-center max-md:w-full'>
          <h1 className='text-6xl max-md:text-4xl'>
            <span className='text-gray-400'>{t('contactInfo.title')}</span> <br />
            <strong>{t('contactInfo.subtitle')}</strong>
          </h1>

          <h3 className='mt-4 text-gray-700'>
            <strong>{t('contactInfo.company')}</strong> <br />
            {t('contactInfo.address')}
          </h3>

          <strong className='mt-3 block'>{t('contactInfo.phone')}</strong>
          <p className='mt-2'>{t('contactInfo.email')}</p>

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
            title={t('contactInfo.mapTitle')}
          ></iframe>
        </div>

      </section>
    </>
  );
}

export default page;
