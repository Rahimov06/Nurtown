"use client"

import { TextField } from '@mui/material'
import React, { useState } from 'react'
import Image from "next/image";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Contact = () => {
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
    )
}

export default Contact
