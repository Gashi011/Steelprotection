import BackgroundImageNaslovna from "@/components/BackgroundImageNaslovna";
import Container from "@/components/Container";
import NovostiNaslovna from "@/components/NovostiNaslovna";

export default function Home() {
  return (
    <div className="pt-14 xl:pt-1">
      <Container>
        <BackgroundImageNaslovna>
          <div className="sm:mx-auto pt-20 xl:pt-56">
            <div className="text-neutral-50  text-4xl xl:text-6xl font-bold text-center">
              Doživotna hidroizolacija betona
            </div>
            <div className="text-neutral-50 text-xl xl:text-2xl text-center">
              <br />
              materijali za hidroizolaciju, impregnaciju i sanaciju betona.
            </div>
          </div>
          <div className="pt-10">
            <button className=" bg-transparent border-white border-2 rounded-full text-white text-xl lg:text-2xl w-36 lg:w-48 h-12 lg:h-16 font-bold focus:border-black hover:bg-red-500">
              Pošaljite uput
            </button>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 pt-20">
            <button className="bg-white w-80 xl:w-96 h-80 xl:h-96 rounded-lg text-center items-center hover:scale-110 hover:shadow-inner">
              <img src="/images/radcon.png" className="h-40 w-40 inline object-contain"></img>
              {/* <div className="text-black text-xl xl:text-3xl ">Radcon #7</div> */}
              <div className="text-black text-xl xl:text-2xl pt-5">Radcon Formula #7 je proizvod za <br /> hidroizolaciju i impregnaciju betona <br /> koja se na beton nanosi prskanjem.</div>
            </button>
            <button className="bg-white w-80 xl:w-96 h-80 xl:h-96 rounded-lg text-center items-center hover:scale-110 hover:shadow-inner">
              <img src="/images/radmyx.png" className="h-32 w-32 inline object-contain"></img>
              {/* <div className="text-black text-xl xl:text-3xl ">RADMYX</div> */}
              <div className="text-black text-xl xl:text-2xl pt-5">Radmyx se koristi kao dodatak  <br /> betonu za vodonepropusnost na  <br /> bazi "rasta"kristala,  tj. kompletan  <br />  sustav za hidroizolaciju ispod <br />  razine tla.</div>
            </button><button className="bg-white w-80 xl:w-96 h-80 xl:h-96 rounded-lg text-center items-center hover:scale-110 hover:shadow-inner">
              <img src="/images/radcon.png" className="h-40 w-40 inline object-contain"></img>
              {/* <div className="text-black text-xl xl:text-3xl ">Radcon #7</div> */}
              <div className="text-black text-xl xl:text-2xl pt-5">Radcon Formula #7 je proizvod za <br /> hidroizolaciju i impregnaciju betona <br /> koja se na beton nanosi prskanjem.</div>
            </button>
          </div>
        </BackgroundImageNaslovna>
        <NovostiNaslovna />
      </Container>
    </div>
  );
}
