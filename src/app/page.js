import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Home() {
  return (
    <>
      <main className="flex  w-[85%] m-auto justify-between items-center">
        <div>
          <h1 className="text-7xl">
            <span className="text-gray-400">PROJECT</span> <br />
            <strong>NURTOWN</strong>
          </h1> <br /><br />

          <div className="">
            <button className=" cursor-pointer p-[15px_20px] bg-gray-200 rounded-xl">
              <FaArrowLeft size={28} color="#333" />

            </button>
            <button className=" cursor-pointer p-[15px_20px] ml-5 bg-gray-200 rounded-xl">

              <FaArrowRight size={28} color="#333" />
            </button> <br /> <br /><br />

            <p className="text-5xl text-gray-300">01 / 02</p>
          </div>

        </div>
        <Image src={"/Rectangle 6.png"} width={770} height={829} alt="not found" />
      </main>

      <section className="flex items-center w-[85%] m-auto justify-around mt-[150px]">
        <div className=" flex items-center gap-6 ">
          <div>
          <Image src={"/Rectangle 8.png"} width={270} height={265} alt="not found"/> <br />
          <Image src={"/Rectangle 10.png"} width={270} height={140} alt="not found"/>
          </div>
          <Image src={"/Rectangle 9.png"} width={270} height={345} alt="not found"/>
        </div>

        <div>
          <h1 className="text-7xl text-gray-400">О компании</h1> <br />
          <p className="text-[16px]">Lorem Ipsum is simply dummy text of the printing and <br />
            typesetting industry. Lorem Ipsum has been the <br />
            industrys standard dummy text ever since the 1500s, <br />
            when an unknown printer took a galley of type and <br />
            scrambled it to make a type specimen book. It has <br />
            survived not only five centuries, but also the leap into <br />
            electronic typesetting, remaining essentially <br />
            unchanged.</p> <br /> <br />

          <button className="bg-white border border-gray-100 p-[10px_20px]">Читать  <ArrowRightAltIcon/></button>

        </div>
      </section>

      <section className="w-[85%] m-auto mt-[100px]">
        <h1 className="text-7xl text-gray-400">Основные задачи</h1> <br />
        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            <p className="text-[200px] text-gray-400">1</p>
            <p className="text-[23px]">Создание комфортных <br />
              условий и повышение <br />
              качества обслуживания <br />
              клиентов</p>
          </div>

          <div className="flex gap-5 items-center">
            <p className="text-[200px] text-gray-400">2</p>
            <p className="text-[23px]">Постоянно совершенствовать качество  <br />
              предоставляемых услуг путем обучения <br />
              персонала, закупки нового оборудования <br />
              и усиленной рекламы на рынке</p>
          </div>
        </div>
      </section>

      <section >
        <h1 className="text-7xl text-gray-400">Наши проекты</h1> <br />

        <div className="grid grid-cols-4 grid-rows-2">

          <div className="bg1 col-end-2">
            <h1 className="text-7xl text-white">ДОСУГОВЫЙ <br />
              ЦЕНТР</h1>
          </div>

          <Image className=" col-end-3" src={"/image 15.png"} width={570} height={255} alt="not found" />
          <Image src={"/image 16.png"} width={270} height={255} alt="not found" />
          <Image src={"/image 17.png"} width={470} height={255} alt="not found" />
          <Image src={"/image 18.png"} width={370} height={255} alt="not found" />




        </div>


      </section>
    </>
  );
}
