import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { TextField } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="flex max-md:flex-col gap-5 w-[85%] m-auto justify-between items-center">
        <div>
          <h1 className="text-7xl max-md:text-4xl">
            <span className="text-gray-400">PROJECT</span> <br />
            <strong>NURTOWN</strong>
          </h1>

          <div className="mt-10">
            <div className="flex max-md:justify-between">
              <button className="cursor-pointer p-[15px_20px] bg-gray-200 rounded-xl">
                <FaArrowLeft size={28} color="#333" />
              </button>
              <button className="cursor-pointer p-[15px_20px] bg-gray-200 rounded-xl max-md:ml-0 ml-5">
                <FaArrowRight size={28} color="#333" />
              </button>
            </div>

            <p className="text-5xl text-gray-300 mt-10 max-md:text-3xl text-center">01 / 02</p>
          </div>
        </div>

        <Image
          src={"/Rectangle 6.png"}
          width={770}
          height={829}
          alt="not found"
          className="max-md:w-full max-md:h-auto"
        />
      </section>

      <section className="flex items-center w-[85%] m-auto justify-around mt-[150px]
              max-md:flex-col max-md:mt-10 max-md:gap-10">

        {/* LEFT IMAGES */}
        <div className="flex items-center gap-6 max-md:flex-col max-md:w-full">

          <div className="flex flex-col gap-5 max-md:w-full">
            <Image
              src={"/Rectangle 8.png"}
              width={270}
              height={265}
              alt="not found"
              className="max-md:w-full"
            />

            <Image
              src={"/Rectangle 10.png"}
              width={270}
              height={140}
              alt="not found"
              className="max-md:w-full"
            />
          </div>

          <Image
            src={"/Rectangle 9.png"}
            width={270}
            height={345}
            alt="not found"
            className="max-md:w-full"
          />

        </div>

        {/* RIGHT TEXT */}
        <div className="max-md:text-center max-md:w-full">
          <h1 className="text-7xl text-gray-400 max-md:text-4xl">
            О компании
          </h1>

          <p className="text-[16px] mt-6 leading-[26px] text-gray-700 max-md:text-[14px] max-md:leading-[22px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br className="max-md:hidden" />
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, <br className="max-md:hidden" />
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br className="max-md:hidden" />
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged.
          </p>

          <button className="bg-white border border-gray-100 p-[10px_20px] mt-10 max-md:mt-6">
            Читать <ArrowRightAltIcon />
          </button>
        </div>

      </section>


      <section className="w-[85%] m-auto mt-[100px] max-md:mt-10">
        <h1 className="text-7xl text-gray-400 max-md:text-4xl max-md:text-center">
          Основные задачи
        </h1>

        <div className="flex md:flex-row flex-col items-start md:items-center justify-between mt-10 gap-12">

          {/* CARD 1 */}
          <div className="flex items-start gap-5 max-md:gap-3 max-md:flex-col max-md:text-center">
            <p className="text-[200px] text-gray-300 leading-none max-md:text-[80px]">
              1
            </p>
            <p className="text-[23px] max-md:text-[16px] max-md:leading-[22px] text-gray-700">
              Создание комфортных условий и повышение <br className="max-md:hidden" />
              качества обслуживания клиентов
            </p>
          </div>

          {/* CARD 2 */}
          <div className="flex items-start gap-5 max-md:gap-3 max-md:flex-col max-md:text-center">
            <p className="text-[200px] text-gray-300 leading-none max-md:text-[80px]">
              2
            </p>
            <p className="text-[23px] max-md:text-[16px] max-md:leading-[22px] text-gray-700">
              Постоянно совершенствовать качество предоставляемых услуг <br className="max-md:hidden" />
              путем обучения персонала, закупки нового оборудования <br className="max-md:hidden" />
              и усиленной рекламы на рынке
            </p>
          </div>

        </div>
      </section>

      <section className="w-[85%] m-auto mt-[100px] max-md:mt-10">
        <h1 className="text-7xl text-gray-400 max-md:text-4xl text-center">Наши проекты</h1>

        <div className="flex max-md:flex-col justify-between gap-5 mt-10">
          <div className="bg1 w-[570px] h-[255px] p-[20px_20px] max-md:w-full">
            <h1 className="text-7xl max-md:text-4xl text-white">ДОСУГОВЫЙ <br /> ЦЕНТР</h1>
          </div>

          <Image
            className="h-[255px] max-md:w-full max-md:h-auto"
            src={"/image 15.png"}
            width={570}
            height={255}
            alt="not found"
          />
        </div>

        <div className="flex max-md:flex-col justify-between gap-5 mt-10">
          <Image src={"/image 16.png"} width={270} height={255} alt="not found" className="max-md:w-full" />
          <Image src={"/image 17.png"} width={470} height={255} alt="not found" className="max-md:w-full" />
          <Image src={"/image 18.png"} width={370} height={255} alt="not found" className="max-md:w-full" />
        </div>

        <Link
          href={"/project"}
          className="p-[20px_25px] bg-[#333333] text-white block ml-auto max-md:m-auto max-md:mt-5 w-fit"
        >
          ВСЕ ПРОЕКТЫ <ArrowRightAltIcon />
        </Link>
      </section>

      <section className="w-[85%] m-auto pb-[100px] pt-[100px] max-md:pt-10">
        <h1 className="text-7xl text-gray-400 max-md:text-4xl text-center">Связаться с нами</h1>

        <div className="flex max-md:flex-col gap-5 justify-between items-center mt-10">

          <form className="w-[420px] max-md:w-full">
            <TextField label="Имя" variant="outlined" className="w-full" /> <br /><br />
            <TextField label="Номер телефона*" variant="outlined" className="w-full" /> <br /><br />
            <TextField label="E-mail*" variant="outlined" className="w-full" /> <br /><br />
            <TextField label="Интересующий товар/услуга" variant="outlined" className="w-full" /> <br /><br />
            <textarea className="h-[100px] w-full rounded-[5px] border border-gray-300 p-3" placeholder="Сообщение*" />
          </form>

          <Image
            src={"/image 12.png"}
            className="h-[420px] max-md:w-full max-md:h-auto"
            width={749}
            height={420}
            alt="not found"
          />
        </div>

        <p className="mt-5 max-md:text-center max-md:text-sm">
          Отправляя заявку Вы соглашаетесь с политикой конфиденциальности
        </p>

        <button className="p-[20px_25px] bg-[#333333] text-white mt-5 max-md:w-full max-md:mt-8">
          ВСЕ ПРОЕКТЫ <ArrowRightAltIcon />
        </button>
      </section>

    </>
  );
}
