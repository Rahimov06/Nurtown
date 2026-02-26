"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "ГЛАВНОЕ" },
    { href: "/photo", label: "ГАЛЕРИЯ" },
    { href: "/project", label: "ПРОЕКТЫ" },
    { href: "/certification", label: "СЕРТИФИКАТЫ" },
    { href: "/contact", label: "КОНТАКТЫ" },
  ];

  const { t, i18n } = useTranslation()
  console.log(i18n);
  const handleChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);  
  };
  
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full left-0 bg-white z-50 border-b-amber-50 px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Image
          src="/Group 11.png"
          width={70}
          height={44}
          alt="Logo"
          className="max-[768px]:w-[55px]"
        />

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-1 ${pathname === link.href
                ? "font-semibold border-b-2 border-t-2 border-black"
                  : "hover:text-gray-700 transition"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <select
            onClick={handleChange} 
            className="px-3 block py-2 rounded-md border border-gray-300 bg-white text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
          >
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="tj">TJ</option>
          </select>
        </div>

        {/* Mobile Burger */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <span className="w-7 h-0.5 bg-black"></span>
          <span className="w-7 h-0.5 bg-black"></span>
          <span className="w-7 h-0.5 bg-black"></span>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 p-6 flex flex-col gap-6 transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Close Button */}
        <button
          className="self-end text-2xl font-bold"
          onClick={() => setOpen(false)}
        >
          <CloseIcon/>
        </button>

        {/* Links */}
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={`py-2 ${pathname === link.href
                ? "font-semibold border-b-2 border-t-2 border-black"
                : "hover:text-gray-700 transition"
              }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
