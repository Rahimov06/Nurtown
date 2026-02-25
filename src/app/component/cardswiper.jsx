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
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    return (
        <div className="w-full mt-25 flex flex-col md:flex-row items-center justify-center gap-6 px-4 md:px-10">

            {/* Content */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-4 md:gap-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-400 font-medium">
                    {slides[current].subtitle}
                </h2>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                    {slides[current].title}
                </h2>

                <div className="flex items-start flex-col   gap-6 mt-4">
                    <div className="flex items-center gap-3"> 
                        <button
                            onClick={prevSlide}
                            className="p-2 sm:p-3 md:p-4 bg-gray-200 rounded-xl hover:bg-gray-300 transition"
                        >
                            <FaArrowLeft className="text-sm sm:text-lg md:text-xl" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-2 sm:p-3 md:p-4 bg-gray-200 rounded-xl hover:bg-gray-300 transition"
                        >
                            <FaArrowRight className="text-sm sm:text-lg md:text-xl" />
                        </button>
                    </div>
                    <span className="text-gray-500 text-sm sm:text-base md:text-3xl">
                        {current + 1} / {slides.length}
                    </span>
                </div>
            </div>

            {/* Image */}
            <div className="relative w-full md:w-1/2 h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden">
                <Image
                    src={slides[current].img}
                    alt={slides[current].title}
                    fill
                    className="object-cover transition-transform duration-500"
                />
            </div>

        </div>
    );
}
