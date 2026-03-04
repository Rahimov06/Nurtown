"use client";

import Link from 'next/link';
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const Project = () => {
    const { t } = useTranslation();

    const projects = [
        { id: 1, href: "/project/1", image: "/image 15.png", title: t('projects.item1'), className: "bg1", hasTitle: true },
        { id: 2, href: "/project/2", image: "/image 15.png", alt: t('projects.alt') },
        { id: 3, href: "/project/3", image: "/image 16.png", alt: t('projects.alt') },
        { id: 4, href: "/project/4", image: "/image 17.png", alt: t('projects.alt') },
        { id: 5, href: "/project/5", image: "/image 18.png", alt: t('projects.alt') }
    ];

    return (
        <section className="max-w-[1200px] w-full px-5 mx-auto mt-16 md:mt-24">

            {/* TITLE */}
            <h1 className="text-3xl md:text-5xl lg:text-7xl
                text-gray-400 text-center font-semibold">
                {t('projects1.title')}
            </h1>

            {/* FIRST ROW */}
            <div className="grid md:grid-cols-2 gap-6 mt-10">

                {/* Project 1 - Бо title махсус */}
                <Link href="/project/1" className="group relative overflow-hidden rounded-xl">
                    <div className="bg1 h-[255px] p-6 flex items-end">
                        <h2 className="text-3xl md:text-5xl text-white font-semibold z-10">
                            {t('projects1.item1')}
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
                        alt={t('projects1.alt')}
                        className="w-full h-[255px] object-cover
                            group-hover:scale-105 transition duration-500"
                    />
                </Link>

            </div>

            {/* SECOND ROW */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

                {/* Project 3 */}
                <Link href="/project/3" className="group overflow-hidden rounded-xl">
                    <Image
                        src="/image 16.png"
                        width={370}
                        height={255}
                        alt={t('projects1.alt')}
                        className="w-full h-[255px] object-cover
                            group-hover:scale-105 transition duration-500"
                    />
                </Link>

                {/* Project 4 */}
                <Link href="/project/4" className="group overflow-hidden rounded-xl">
                    <Image
                        src="/image 17.png"
                        width={470}
                        height={255}
                        alt={t('projects1.alt')}
                        className="w-full h-[255px] object-cover
                            group-hover:scale-105 transition duration-500"
                    />
                </Link>

                {/* Project 5 */}
                <Link href="/project/5" className="group overflow-hidden rounded-xl">
                    <Image
                        src="/image 18.png"
                        width={370}
                        height={255}
                        alt={t('projects1.alt')}
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
                    {t('projects1.item2')} <ArrowRightAltIcon />
                </Link>
            </div>

        </section>
    );
}

export default Project;
