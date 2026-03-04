"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const links = [
    { href: "/", label: t("home") },
    { href: "/photo", label: t("gallery") },
    { href: "/project", label: t("projects") },
    { href: "/certification", label: t("certificates") },
    { href: "/contact", label: t("contacts") },
  ];

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full left-0 bg-white z-50 border-b-amber-50 px-6 py-4 flex justify-between items-center">
        <Image
          src="/Group 11.png"
          width={70}
          height={44}
          alt="Logo"
          className="max-[768px]:w-[55px]"
        />

        <div className="hidden md:flex gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-1 ${
                pathname === link.href
                  ? "font-semibold border-b-2 border-t-2 border-black"
                  : "hover:text-gray-700 transition"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <select
            value={i18n.language}
            onChange={handleChange}
            className="px-3 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
          >
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="tj">TJ</option>
          </select>
        </div>

        <div className=" flex md:hidden  items-center gap-2">

        {/* mobile select */}
        <select
          value={i18n.language}
          onChange={handleChange}
          className="px-3 py-2 rounded-md border border-gray-300"
        >
          <option value="en">EN</option>
          <option value="ru">RU</option>
          <option value="tj">TJ</option>
        </select>

        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <span className="w-7 h-0.5 bg-black"></span>
          <span className="w-7 h-0.5 bg-black"></span>
          <span className="w-7 h-0.5 bg-black"></span>
        </div>
        </div>

      </nav>

      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 p-6 flex flex-col gap-6 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="self-end text-2xl font-bold"
          onClick={() => setOpen(false)}
        >
          <CloseIcon />
        </button>

        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={`py-2 ${
              pathname === link.href
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
