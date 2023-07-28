import BackgroundImage from "@/components/BackgroundImageNaslovna";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div>
      <BackgroundImage>
        <div>
          <div className="text-center text-6xl text-black text-bold pt-40 pb-10 h-96 xl:h-64 w-[500px] lg:w-[1000px] bg-white">
            Projekti
          </div>
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <div className="flex flex-col gap-3 text-center h-[496px] w-[500px] lg:w-[1000px] bg-white items-center rounded-sm">
              <Link href="/project1">
                <img
                  alt="novosti1"
                  src="/images/novosti1.jpg"
                  className="h-56 w-80 pt-4 pb-4 hover:scale-105"
                ></img>
              </Link>
              <Link href="/project1">
                <p className="text-2xl text-black hover:text-red-500">
                  Hidroizolacija temeljne ploče, <br /> horizontalnih i
                  vertikalnih zidova
                </p>
              </Link>
              <div className="flex flexrow gap-40 pt-5">
                <div className="text-2xl font-bold text-red-500">Godina:</div>
                <div className="text-2xl font-bold text-black">2022</div>
              </div>
              <Link href="/project1">
                <button className=" bg-transparent border-red-500 border-2 rounded-full text-red-500 text-xl lg:text-2xl w-36 lg:w-48 h-12 lg:h-16 font-bold focus:border-black hover:bg-red-500 hover:text-white">
                  Saznaj više
                </button>
              </Link>
            </div>
            <div className="flex flex-col gap-3 text-center h-[500px] w-[500px] lg:w-[1000px] bg-white items-center rounded-sm">
            <Link href="/project1">
              <img
                alt="novosti1"
                src="/images/novosti1.jpg"
                className="h-56 w-80 pt-4 pb-4 hover:scale-105"
              ></img>
              </Link>
              <Link href="/project1">
              <p className="text-2xl text-black hover:text-red-500">
                Hidroizolacija temeljne ploče, <br /> horizontalnih i
                vertikalnih zidova
              </p>
              </Link>
              <div className="flex flexrow gap-40 pt-5">
                <div className="text-2xl font-bold text-red-500">Godina:</div>
                <div className="text-2xl font-bold text-black">2022</div>
              </div>
              <Link href="/project1">
              <button className=" bg-transparent border-red-500 border-2 rounded-full text-red-500 text-xl lg:text-2xl w-36 lg:w-48 h-12 lg:h-16 font-bold focus:border-black hover:bg-red-500 hover:text-white">
                Saznaj više
              </button>
              </Link>
            </div>
            <div className=" bg-neutral-200 h-96 lg:h-0 w-[500px]"></div>
          </div>
        </div>
      </BackgroundImage>
      <BackgroundImage>
        <div>
          <div className="flex flex-col items-center justify-center cursor-pointer pt-52 lg:pt-24 xl:pt-0">
            <div className="flex flex-col gap-10 text-center h-[652px] xl:h-[625px] w-[500px] lg:w-[1000px] bg-white items-center rounded-sm ">
              <img
                alt="novosti1"
                src="/images/novosti1.jpg"
                className="h-56 w-80 pt-4 pb-4 hover:scale-105"
              ></img>
              <p className="text-2xl text-black hover:text-red-500">
                Hidroizolacija temeljne ploče, <br /> horizontalnih i
                vertikalnih zidova
              </p>
              <div className="flex flexrow gap-40 pt-5">
                <div className="text-2xl font-bold text-red-500">Godina:</div>
                <div className="text-2xl font-bold text-black">2022</div>
              </div>
              <button className=" bg-transparent border-red-500 border-2 rounded-full text-red-500 text-xl lg:text-2xl w-36 lg:w-48 h-12 lg:h-16 font-bold focus:border-black hover:bg-red-500 hover:text-white">
                Saznaj više
              </button>
            </div>
            <div className="flex flex-col gap-10 text-center h-[640px] xl:h-[625px] w-[500px] lg:w-[1000px] bg-white items-center xl:rounded-b-xl xl:shadow-2xl">
              <img
                alt="novosti1"
                src="/images/novosti1.jpg"
                className="h-56 w-80 pt-4 pb-4 hover:scale-105"
              ></img>
              <p className="text-2xl text-black hover:text-red-500">
                Hidroizolacija temeljne ploče, <br /> horizontalnih i
                vertikalnih zidova
              </p>
              <div className="flex flexrow gap-40 pt-5">
                <div className="text-2xl font-bold text-red-500">Godina:</div>
                <div className="text-2xl font-bold text-black">2022</div>
              </div>
              <button className=" bg-transparent border-red-500 border-2 rounded-full text-red-500 text-xl lg:text-2xl w-36 lg:w-48 h-12 lg:h-16 font-bold focus:border-black hover:bg-red-500 hover:text-white">
                Saznaj više
              </button>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </div>
  );
};

export default Projects;
