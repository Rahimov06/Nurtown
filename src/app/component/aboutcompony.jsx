"use client";

import React from "react";
import Image from "next/image";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const AboutCompany = () => {
    return (
        <section className="max-w-[1200px] w-full px-4 sm:px-6 mx-auto mt-20 md:mt-[150px]">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">

                {/* LEFT IMAGES */}
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <div className="flex flex-col gap-4 w-full sm:w-1/2">
                        <Image
                            src="/Rectangle 8.png"
                            width={270}
                            height={265}
                            alt="about"
                            className="w-full h-auto object-cover rounded-xl"
                        />
                        <Image
                            src="/Rectangle 10.png"
                            width={270}
                            height={140}
                            alt="about"
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>

                    <Image
                        src="/Rectangle 9.png"
                        width={250}
                        height={300}
                        alt="about"
                        className="w-full sm:w-1/2 h-auto object-cover rounded-xl"
                    />
                </div>

                {/* RIGHT TEXT */}
                <div className="text-center md:text-left w-full md:max-w-[500px] flex flex-col items-center md:items-start">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-400 font-semibold">
                        О компании
                    </h1>

                    <p className="text-sm sm:text-[15px] md:text-[16px] mt-4 sm:mt-5 leading-6 md:leading-7 text-gray-600">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    <button className="mt-5 sm:mt-6 md:mt-10 inline-flex items-center gap-2 
                        border border-gray-200 px-5 sm:px-6 py-2 sm:py-3 rounded-lg 
                        hover:bg-gray-100 transition duration-300 text-sm sm:text-base md:text-base">
                        Читать <ArrowRightAltIcon className="text-base sm:text-lg" />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default AboutCompany;
