"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';

const Tasksection = () => {
    const { t } = useTranslation('common');

    return (
        <section className="max-w-[1200px] w-full px-5 mx-auto mt-16 md:mt-24 lg:mt-[100px]">

            <h1 className="text-3xl md:text-5xl lg:text-7xl text-gray-400
                text-center md:text-left font-semibold">
                {t('tasks.title')}
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
                        {t('tasks.item1')}
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
                        {t('tasks.item2')}
                    </p>
                </div>

            </div>

        </section>
    );
}

export default Tasksection;
