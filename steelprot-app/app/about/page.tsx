'use client'
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import BuildingImage from "@/components/BuildingImage";
import Image from "next/image";
import BackgroundImage from "@/components/BackgroundImage";
import Loader from "@/components/Loader";
import Contact from "@/components/Contact";

export default function About() {
  return (

    <Container>
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-2 md:gap-0 top-10">
            <BuildingImage />

            <div className="md:pt-[130px]  mx-4 mt-40 md:mt-0 md:flex-grow">
                <h1 className="lg:p-4 text-center xl:text-left xl:ps-10 -ml-6 text-6xl font-bold"> O nama</h1>
                    <br /> <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quas fuga unde totam libero accusantium ea doloribus aspernatur odio impedit iusto quos nemo corporis error autem fugit ratione, exercitationem repellat?
                    <br /> <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptates veritatis asperiores incidunt, esse vel doloremque ratione vero autem enim rem aliquid sit molestiae iure modi, non nesciunt illo neque!
                    <br /> <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi neque est non expedita accusamus asperiores alias eveniet earum iure corporis laboriosam magnam, veritatis nisi incidunt autem pariatur qui unde praesentium!
                    <br /> <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, explicabo debitis magnam necessitatibus, voluptate rem voluptates temporibus cum dolores ad impedit numquam in. Nobis, vitae incidunt sequi nihil adipisci autem?
                    <br /> <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex mollitia eligendi, dolorem ullam aspernatur optio molestiae hic obcaecati eos voluptas maiores fugit in repellat possimus quod incidunt dignissimos vero?
                
            </div>
        </div>
        <BackgroundImage>
          <div className="sm:mx-auto">
            <div className="text-neutral-50 text-4xl xl:text-5xl font-bold text-center xl:text-left">
              VREDNOSTI KOJE NUDIMO:
            </div>
            <div className="text-neutral-50 text-xl xl:text-2xl text-center lg:text-left" >
              <br />
              1. Ekološki odobreno - materijal neškodljiv za okoliš <br />
              2. Dokazana kvaliteta - dugogodišnja građevinarska praksa <br />
              3. Doživotna hidroizolacija - trajno rješenje za zaštitu betona od vode i vlage <br />
            </div>
          </div>
          <img alt="radnik" src="/images/radnik.jpg" className="z-10 pe-0 xl:pe-10  mx-auto  max-h-[500px]">
          </img>
        </BackgroundImage>
        <Contact />
        
    </Container>
      
  )
}
