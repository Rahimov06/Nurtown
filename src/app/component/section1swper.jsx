"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function Swiper1() {
    const swiperRef = useRef(null);
    const [current, setCurrent] = useState(1);
    const total = 2;

    return (
        <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setCurrent(swiper.activeIndex + 1)}
            className="mySwiper"
            
        >
            <SwiperSlide>
                <section className="flex max-md:flex-col md:mt-[50px] gap-5 w-[85%] max-md:w-[95%] m-auto justify-between items-center">
                    <div>
                        <h1 className="text-7xl max-lg:text-5xl mt-[80px] md:mt-0 max-md:text-4xl">
                            <span className="text-gray-400">PROJECT</span> <br />
                            <strong>NURTOWN</strong>
                        </h1>

                        <div className="mt-10 max-md:mt-6">
                            <div className="flex items-center max-md:justify-between">
                                <button
                                    onClick={() => swiperRef.current?.slidePrev()}
                                    className="p-4 max-md:p-3 bg-gray-200 rounded-xl"
                                >
                                    <FaArrowLeft className="text-[28px] max-md:text-[20px]" />
                                </button>

                                <button
                                    onClick={() => swiperRef.current?.slideNext()}
                                    className="p-4 max-md:p-3 bg-gray-200 rounded-xl ml-5 max-md:ml-3"
                                >
                                    <FaArrowRight className="text-[28px] max-md:text-[20px]" />
                                </button>
                            </div>

                            <p className="text-5xl max-lg:text-4xl max-md:text-2xl text-gray-300 mt-8 max-md:mt-5 text-start">
                                {String(current).padStart(2, "0")} /{" "}
                                {String(total).padStart(2, "0")}
                            </p>
                        </div>
                    </div>

                    <Image
                        src="/Rectangle 6.png"
                        width={770}
                        height={829}
                        alt="not found"
                        className="max-md:w-full max-md:h-auto"
                    />
                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section className="flex max-md:flex-col gap-5 w-[85%] max-md:w-[95%] m-auto justify-between items-center">
                    <div>
                        <h1 className="text-7xl max-lg:text-5xl max-md:text-4xl">
                            <span className="text-gray-400">PROJECT</span> <br />
                            <strong>NURTOWN</strong>
                        </h1>

                        <div className="mt-10 max-md:mt-6">
                            <div className="flex items-center max-md:justify-between">
                                <button
                                    onClick={() => swiperRef.current?.slidePrev()}
                                    className="p-4 max-md:p-3 bg-gray-200 rounded-xl"
                                >
                                    <FaArrowLeft className="text-[28px] max-md:text-[20px]" />
                                </button>

                                <button
                                    onClick={() => swiperRef.current?.slideNext()}
                                    className="p-4 max-md:p-3 bg-gray-200 rounded-xl ml-5 max-md:ml-3"
                                >
                                    <FaArrowRight className="text-[28px] max-md:text-[20px]" />
                                </button>
                            </div>

                            <p className="text-5xl max-lg:text-4xl max-md:text-2xl text-gray-300 mt-8 max-md:mt-5 text-start">
                                {String(current).padStart(2, "0")} /{" "}
                                {String(total).padStart(2, "0")}
                            </p>
                        </div>
                    </div>

                    <Image
                        src="/Rectangle 6.png"
                        width={730}
                        height={790}
                        alt="not found"
                        className="max-md:w-full max-md:h-auto"
                    />
                </section>
            </SwiperSlide>


        </Swiper>
    );
}
