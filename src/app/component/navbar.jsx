
"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {

  const params = usePathname()
  console.log(params);


  return (
    <nav className='flex w-[85%] m-auto p-[20px_0px] items-center justify-between'>
      <Image src={"/Group 11.png"} width={70} height={43.71} alt='not found' />
      <div className='flex gap-20'>
        <Link className={params === '/'? " border-t border-b": " bodre-white"} href={"/"}>ГЛАВНОЕ</Link>
        <Link className={params === '/photo' ? " border-t border-b" : " bodre-white"} href={"/photo"}>ГАЛЕРИЯ</Link>
        <Link className={params === '/project' ? " border-t border-b" : " bodre-white"} href={"/project"}>ПРАЕКТЫ</Link>
        <Link className={params === '/certification' ? " border-t border-b" : " bodre-white"} href={"/certification"}>СЕРТИФИКАТЫ</Link>
        <Link className={params === '/contact' ? " border-t border-b" : " bodre-white"} href={"/contact"}>КОНТАКТЫ</Link>
      </div>
    </nav>
  );
}

export default Navbar;

