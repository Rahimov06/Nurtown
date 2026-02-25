"use client";

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function CardSwiper() {
    const slides = [
        { title: "NURTOWN", subtitle: "PROJECT", img: "/Rectangle 6.png" },
        { title: "NURTOWN", subtitle: "PROJECT", img: "/image 17.png" },
        { title: "NURTOWN", subtitle: "PROJECT", img: "/image 32.png" },
    ];

    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="w-full mt-24 flex flex-col md:flex-row items-center justify-center gap-10 px-6">

            {/* Content */}
            <div className="w-full md:w-1/2">
                <h2 className="text-6xl text-gray-400">
                    {slides[current].subtitle}
                </h2>
                <h1 className="text-7xl font-bold mt-2">
                    {slides[current].title}
                </h1>

                <div className="flex  items-center gap-4 mt-6">
                    <button
                        onClick={prevSlide}
                        className="p-5 bg-gray-200 rounded-xl hover:bg-gray-300 transition"
                    >
                        <FaArrowLeft />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-5 bg-gray-200 rounded-xl hover:bg-gray-300 transition"
                    >
                        <FaArrowRight />
                    </button>
                </div>

                <div className="mt-4 text-2xl text-gray-500">
                    {current + 1} / {slides.length}
                </div>
            </div>

            {/* Image Slider */}
            <div className="relative w-full md:w-1/2 h-[550px] rounded-xl overflow-hidden">
                <div
                    className="flex h-full transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div key={index} className="relative min-w-full h-full">
                            <Image
                                src={slide.img}
                                alt={slide.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}