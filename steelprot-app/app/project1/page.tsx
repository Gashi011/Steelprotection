"use client";
import Carousel from "@/components/Carousel";
import React from "react";

const Project1 = () => {
  return (
    <div className="flex flex-col text-black pt-40 items-center text-center lg:text-left">
      <div className="flex flex-row text-5xl font-bold pb-10">
        Hidroizolacija temeljne ploče, <br /> horizontalnih i vertikalnih
        spojeva, <br />
        Makarska
      </div>
      <div className="flex flex-col gap-10 mx-auto lg:flex-row items-center lg:items-start">
        <img
          alt="novosti1"
          src="/images/novosti1.jpg"
          className="h-[336px] lg:h-[448px] w-[480px] lg:w-[640px] pt-4 pb-4"
        ></img>
        <div className="flex flex-col gap-10 lg:gap-20 xl:gap-32 pt-10">
          <div className="flex flex-col">
            <p className="text-3xl lg:text-5xl font-bold pb-4">
              Naziv projekta:
            </p>
            <p className="text-xl lg:text-3xl">
              Hidroizolacija temeljne ploče, <br /> horizontalnih i vertikalnih
              spojeva, Makarska
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-start text-center gap-4">
            <p className="text-3xl lg:text-5xl font-bold">Godina:</p>
            <p className="text-xl lg:text-3xl">2022</p>
          </div>
        </div>
      </div>
      <div>
        <div className="text-black text-left items-start text-2xl lg:text-3xl  pt-20">
          Investitor Lukić Invest d.o.o., na projektu stambeno-poslovne zgrade u
          Banja Luci, koristio je <br />
          Radmyx za hidroizolaciju temeljne ploče i Cemflex VB limove za
          hidroizolaciju vertikalnih <br />
          i horizontalnih spojeva. <br /> <br />
          Budući da Radmyx ima sposobnost samoizlječenja zahvaljujući
          regeneraciji rasta kristala, <br />
          cjelokupna masa betona je zaštićena od prodora vode i vlage kroz
          cijelo vrijeme trajanja <br />
          strukture betona. <br /> <br />
          Cemflex VB limovi osiguravaju višestruku sigurnost
          za sve radne spojeve <br />
          zahvaljujući svom obostrano premazanom specijalnom sloju na bazi rasta
          kristala koji trajno <br />
          sprečava prodor vode. Budući da je postavljanje izuzetno jednostavno,
          ne ostavlja mnogo <br /> prostora za pogrešku prilikom ugradnje,
          Cemflex VB limove je dovoljno utopiti minimalno <br /> 3 cm u beton za
          pouzdano brtvljenje.
        </div>
      </div>
      <Carousel />
    </div>
  );
};

export default Project1;
