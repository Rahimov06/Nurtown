"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const params = usePathname()
  console.log(params);

  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className='flex w-full m-auto p-[20px_40px]  items-center fixed bg-white z-100 justify-between'>

        {/* Logo */}
        <Image
          src={"/Group 11.png"}
          width={70}
          height={43.71}
          alt='not found'
          className='max-[768px]:w-[55px]'
        />

        {/* Desktop Menu */}
        <div className='flex gap-10 max-[768px]:hidden'>
          <Link className={params === '/' ? " border-t border-b" : " bodre-white"} href={"/"}>ГЛАВНОЕ</Link>
          <Link className={params === '/photo' ? " border-t border-b" : " bodre-white"} href={"/photo"}>ГАЛЕРИЯ</Link>
          <Link className={params === '/project' ? " border-t border-b" : " bodre-white"} href={"/project"}>ПРАЕКТЫ</Link>
          <Link className={params === '/certification' ? " border-t border-b" : " bodre-white"} href={"/certification"}>СЕРТИФИКАТЫ</Link>
          <Link className={params === '/contact' ? " border-t border-b" : " bodre-white"} href={"/contact"}>КОНТАКТЫ</Link>
        </div>

        {/* Mobile Burger Button */}
        <div
          className="hidden max-[768px]:flex flex-col gap-1 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <span className="w-7 h-[3px] bg-black"></span>
          <span className="w-7 h-[3px] bg-black"></span>
          <span className="w-7 h-[3px] bg-black"></span>
        </div>

      </nav>

      {/* ============================
           MOBILE DRAWER
      ============================ */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
                    ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Drawer (sidebar) */}
      <div
        className={`fixed top-0 right-0 h-full w-[250px] bg-white shadow-xl z-50 p-6 flex flex-col gap-6
                    transition-transform duration-300
                    ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close button */}
        <button className="self-end text-xl" onClick={() => setOpen(false)}>
          ✕
        </button>

        <Link className={params === '/' ? " border-t border-b" : " bodre-white"} onClick={() => setOpen(false)} href={"/"}>ГЛАВНОЕ</Link>
        <Link className={params === '/photo' ? " border-t border-b" : " bodre-white"} onClick={() => setOpen(false)} href={"/photo"}>ГАЛЕРИЯ</Link>
        <Link className={params === '/project' ? " border-t border-b" : " bodre-white"} onClick={() => setOpen(false)} href={"/project"}>ПРАЕКТЫ</Link>
        <Link className={params === '/certification' ? " border-t border-b" : " bodre-white"} onClick={() => setOpen(false)} href={"/certification"}>СЕРТИФИКАТЫ</Link>
        <Link className={params === '/contact' ? " border-t border-b" : " bodre-white"} onClick={() => setOpen(false)} href={"/contact"}>КОНТАКТЫ</Link>
      </div>
    </>
  );
}
