"use client";

import { TextField } from '@mui/material';
import React, { useState } from 'react';
import Image from "next/image";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation('common');
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        product: "",
        message: ""
    });

    // Массив барои полҳои форма
    const formFields = [
        { name: "name", label: t('contact.name'), type: "text", required: false },
        { name: "phone", label: t('contact.phone'), type: "tel", required: true },
        { name: "email", label: t('contact.email'), type: "email", required: true },
        { name: "product", label: t('contact.product'), type: "text", required: false }
    ];

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

            <h1 className="text-3xl md:text-5xl lg:text-7xl text-gray-400 text-center font-semibold">
                {t('contact.title')}
            </h1>

            <div className="flex flex-col md:flex-row gap-10 mt-10 items-start md:items-start">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full md:w-[420px]">

                    {/* Динамикӣ сохтани полҳо */}
                    {formFields.map((field) => (
                        <TextField
                            key={field.name}
                            label={field.label}
                            name={field.name}
                            type={field.type}
                            value={formData[field.name]}
                            onChange={handleChange}
                            variant="outlined"
                            className="w-full"
                            required={field.required}
                        />
                    ))}

                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="h-[100px] w-full rounded-md border border-gray-300 p-3 resize-none"
                        placeholder={t('contact.message')}
                        required
                    />

                    <p className="mt-5 text-sm text-gray-500 text-center md:text-left">
                        {t('contact.privacy')}
                    </p>

                    <div className="mt-5 flex justify-center md:justify-start">
                        <button
                            type="submit"
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#333333] text-white rounded-lg hover:bg-black transition duration-300 w-full md:w-auto"
                        >
                            {t('contact.submit')} <ArrowRightAltIcon />
                        </button>
                    </div>

                </form>

                <Image
                    src="/image 12.png"
                    width={700}
                    height={420}
                    alt={t('contact.alt')}
                    className="w-full md:w-auto h-auto rounded-lg object-cover"
                />
            </div>

            {/* MODAL */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg max-w-sm w-full text-center">
                        <h2 className="text-2xl font-semibold mb-4">{t('contact.modal.title')}</h2>
                        <p className="mb-6">{t('contact.modal.message')}</p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="px-4 py-2 bg-[#333] text-white rounded-lg hover:bg-black transition duration-300"
                        >
                            {t('contact.modal.close')}
                        </button>
                    </div>
                </div>
            )}

        </section>
    );
}

export default Contact;
