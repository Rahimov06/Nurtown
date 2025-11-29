
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
  return (
    <>
      <footer
        className='bg-[#2C2C2C] text-white flex items-start justify-around p-[40px_0px]
             max-[768px]:flex-col max-[768px]:items-center max-[768px]:gap-10 max-[768px]:text-center'>

        <Image
          src={"/Group 11 1.png"}
          width={145}
          height={94}
          alt='not found'
          className='max-[768px]:w-[110px]'
        />

        <div className='max-[768px]:flex max-[768px]:flex-col max-[768px]:items-center'>
          <strong>Информация</strong> <br /><br />
          <Link href={"/"} >Главная</Link> <br /><br />
          <Link href={"/photo"} >Галерея</Link><br /><br />
          <Link href={"/project"} >Проекты</Link><br /> <br />
          <Link href={"/certification"} >Сертификаты</Link><br /> <br />
          <Link href={"/contact"} >Контакты</Link>
        </div>

        <div className='max-[768px]:flex max-[768px]:flex-col max-[768px]:items-center'>
          <strong>Контакты</strong> <br /><br />
          <p className='flex gap-4 max-[768px]:justify-center'>
            <LocationOnOutlinedIcon />
            100000, Республика Казахстан, <br /> г. Караганда, ул. Телевизионная 10
          </p> <br /><br />
          <p className='flex gap-3 max-[768px]:justify-center'>
            <LocalPhoneOutlinedIcon /> +7 (701) 77 76 811
          </p><br /><br />
          <p className='flex gap-3 max-[768px]:justify-center'>
            <EmailOutlinedIcon /> Galym.sultanov@mail.ru
          </p>
        </div>

        <div className='max-[768px]:flex max-[768px]:flex-col max-[768px]:items-center'>
          <strong>Социальные сети</strong> <br /><br />
          <div className='flex gap-6 items-center'>
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
            <PinterestIcon />
          </div>
        </div>

      </footer>

      <p className='bg-[#2C2C2C] text-center p-[20px_0px] border-t border-t-gray-500 text-gray-500'>
        © 2019 Digital Project. Все права защищены.
      </p>

    </>
  );
}

export default Footer;
