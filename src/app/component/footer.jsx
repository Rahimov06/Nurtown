import Image from 'next/image';
import Link from 'next/link';
import {
  LocalPhoneOutlined,
  LocationOnOutlined,
  EmailOutlined,
  Facebook,
  Twitter,
  LinkedIn,
  Pinterest,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#2C2C2C] text-white z-50 w-full relative  px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-12">

          {/* Logo */}
          <div className="shrink-0">
            <Image
              src="/Group 11 1.png"
              alt="Logo"
              width={145}
              height={94}
              className="mx-auto md:mx-0 w-[120px] sm:w-[145px]"
            />
          </div>

          {/* Information */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <strong className="text-lg">Информация</strong>
            <Link href="/">Главная</Link>
            <Link href="/photo">Галерея</Link>
            <Link href="/project">Проекты</Link>
            <Link href="/certification">Сертификаты</Link>
            <Link href="/contact">Контакты</Link>
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <strong className="text-lg">Контакты</strong>

            <p className="flex flex-col items-center md:items-start gap-2">
              <span className="flex items-center gap-2">
                <LocationOnOutlined /> 100000, Республика Казахстан, г. Караганда, ул. Телевизионная 10
              </span>
            </p>

            <p className="flex items-center justify-center md:justify-start gap-2">
              <LocalPhoneOutlined /> +7 (701) 77 76 811
            </p>

            <p className="flex items-center justify-center md:justify-start gap-2">
              <EmailOutlined /> Galym.sultanov@mail.ru
            </p>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <strong className="text-lg">Социальные сети</strong>
            <div className="flex justify-center md:justify-start gap-4 text-white text-xl">
              <Facebook />
              <Twitter />
              <LinkedIn />
              <Pinterest />
            </div>
          </div>

        </div>
      </footer>

      {/* Copyright */}
      <p className="bg-[#2C2C2C] text-center p-4 border-t border-gray-500 text-gray-400 text-sm">
        © 2019 Digital Project. Все права защищены.
      </p>
    </>
  );
};

export default Footer;
