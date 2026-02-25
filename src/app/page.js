"use client"

import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { TextField } from "@mui/material";
import Link from "next/link";
import CardSwiper from "./component/cardswiper";
import { useState } from "react";
import AboutCompany from "./component/aboutcompony";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    message: ""
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    setShowModal(true);
    setFormData({
      name: "",
      phone: "",
      email: "",
      product: "",
      message: ""
    });
  };

  return (
    <>
      <CardSwiper />

      <AboutCompany/>

      <section className="max-w-[1200px] w-full px-5 mx-auto mt-16 md:mt-24 lg:mt-[100px]">

        <h1 className="text-3xl md:text-5xl lg:text-7xl text-gray-400 
  text-center md:text-left font-semibold">
          Основные задачи
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mt-10 md:mt-14">

          {/* ITEM 1 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">

            <span className="text-[70px] sm:text-[100px] lg:text-[160px] 
      font-bold text-gray-200 leading-none">
              1
            </span>

            <p className="text-[16px] sm:text-[18px] lg:text-[22px] 
      text-gray-700 leading-6 sm:leading-7 max-w-[500px]">
              Создание комфортных условий и повышение качества обслуживания клиентов
            </p>

          </div>

          {/* ITEM 2 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">

            <span className="text-[70px] sm:text-[100px] lg:text-[160px] 
      font-bold text-gray-200 leading-none">
              2
            </span>

            <p className="text-[16px] sm:text-[18px] lg:text-[22px] 
      text-gray-700 leading-6 sm:leading-7 max-w-[500px]">
              Постоянно совершенствовать качество предоставляемых услуг путем обучения персонала,
              закупки нового оборудования и усиленной рекламы на рынке
            </p>

          </div>

        </div>

      </section>


      <section className="max-w-[1200px] w-full px-5 mx-auto mt-16 md:mt-24">

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl lg:text-7xl 
      text-gray-400 text-center font-semibold">
          Наши проекты
        </h1>

        {/* FIRST ROW */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">

          {/* Project 1 */}
          <Link href="/project/1" className="group relative overflow-hidden rounded-xl">
            <div className="bg1 h-[255px] p-6 flex items-end">
              <h2 className="text-3xl md:text-5xl text-white font-semibold z-10">
                ДОСУГОВЫЙ <br /> ЦЕНТР
              </h2>
            </div>

            <div className="absolute inset-0 bg-black/30 opacity-0 
          group-hover:opacity-100 transition duration-300" />
          </Link>

          {/* Project 2 */}
          <Link href="/project/2" className="group overflow-hidden rounded-xl">
            <Image
              src="/image 15.png"
              width={570}
              height={255}
              alt="project"
              className="w-full h-[255px] object-cover 
            group-hover:scale-105 transition duration-500"
            />
          </Link>

        </div>

        {/* SECOND ROW */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

          <Link href="/project/3" className="group overflow-hidden rounded-xl">
            <Image
              src="/image 16.png"
              width={370}
              height={255}
              alt="project"
              className="w-full h-[255px] object-cover 
            group-hover:scale-105 transition duration-500"
            />
          </Link>

          <Link href="/project/4" className="group overflow-hidden rounded-xl">
            <Image
              src="/image 17.png"
              width={470}
              height={255}
              alt="project"
              className="w-full h-[255px] object-cover 
            group-hover:scale-105 transition duration-500"
            />
          </Link>

          <Link href="/project/5" className="group overflow-hidden rounded-xl">
            <Image
              src="/image 18.png"
              width={370}
              height={255}
              alt="project"
              className="w-full h-[255px] object-cover 
            group-hover:scale-105 transition duration-500"
            />
          </Link>

        </div>

        {/* BUTTON */}
        <div className="flex justify-center md:justify-end mt-10">
          <Link
            href="/project"
            className="inline-flex items-center gap-2 
          px-6 py-3 bg-[#333] text-white rounded-lg
          hover:bg-black transition duration-300"
          >
            ВСЕ ПРОЕКТЫ <ArrowRightAltIcon />
          </Link>
        </div>

      </section>

      <section className="max-w-[1200px] w-full px-5 mx-auto py-20 md:py-24">

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl lg:text-7xl text-gray-400 text-center font-semibold">
          Связаться с нами
        </h1>

        {/* FORM + IMAGE */}
        <div className="flex flex-col md:flex-row gap-10 mt-10 items-start md:items-start">

          {/* FORM */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full md:w-[420px]">
            <TextField
              label="Имя"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
              className="w-full"
            />
            <TextField
              label="Номер телефона*"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              variant="outlined"
              className="w-full"
            />
            <TextField
              label="E-mail*"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              className="w-full"
            />
            <TextField
              label="Интересующий товар/услуга"
              name="product"
              value={formData.product}
              onChange={handleChange}
              variant="outlined"
              className="w-full"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="h-[100px] w-full rounded-md border border-gray-300 p-3 resize-none"
              placeholder="Сообщение*"
            />
            <p className="mt-5 text-sm text-gray-500 text-center md:text-left">
              Отправляя заявку Вы соглашаетесь с политикой конфиденциальности
            </p>

            <div className="mt-5 flex justify-center md:justify-start">
              <button type="submit" className="flex items-center gap-2 px-6 py-3 bg-[#333333] text-white rounded-lg hover:bg-black transition duration-300 w-full md:w-auto">
                ОТПРАВИТЬ <ArrowRightAltIcon />
              </button>
            </div>

          </form>

          {/* IMAGE */}
          <Image
            src="/image 12.png"
            width={700}
            height={420}
            alt="contact"
            className="w-full md:w-auto h-auto rounded-lg object-cover"
          />

        </div>

        {/* MODAL */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg max-w-sm w-full text-center">
              <h2 className="text-2xl font-semibold mb-4">Спасибо!</h2>
              <p className="mb-6">Ваша заявка отправлена.</p>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-[#333] text-white rounded-lg hover:bg-black transition duration-300"
              >
                Закрыть
              </button>
            </div>
          </div>
        )}

      </section>


    </>
  );
}
