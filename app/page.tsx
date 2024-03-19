import BackgroundImageNaslovna from "@/components/BackgroundImageNaslovna";
import Container from "@/components/Container";
import NovostiNaslovna from "@/components/NovostiNaslovna";

export default function Home() {
  return (
    <div className="pt-14 xl:pt-1">
      <Container>
        <BackgroundImageNaslovna>
          <div className="sm:mx-auto pt-20 xl:pt-40">
            <div className="text-neutral-50  text-4xl xl:text-6xl font-bold text-center">
            Sigurna budućnost gradi se uz nas
            </div>
            {/* <div className="text-neutral-50 text-xl xl:text-2xl text-center">
              <br />
              materijali za hidroizolaciju, impregnaciju i sanaciju betona.
            </div> */}
          </div>
          <div className="pt-32">
            <button className=" bg-transparent border-white border-2 rounded-full text-white text-xl lg:text-2xl w-52 lg:w-60 h-12 lg:h-16 font-bold focus:border-black hover:bg-steelprotectionblue hover:scale-110">
              Kontaktirajte nas
            </button>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 pt-24">
            <a href="/anticorrosion">
              <button className="bg-white w-80 xl:w-96 h-80 xl:h-96 rounded-lg text-center items-center hover:scale-110 hover:shadow-inner hover:border-steelprotectionblue hover:border-4">
                <div className="text-black text-3xl font-bold">
                  Antikorozivna zaštita čelika
                </div>
                {/* <div className="text-black text-xl xl:text-3xl ">Radcon #7</div> */}
                <div className="text-black text-xl xl:text-xl pt-5">
                Antikorozivna zaštita čelika je proces primene specifičnih premaza ili metoda, 
                čija svrha je sprečavanje korozije i produženje trajnosti čelika.
                </div>
              </button>
            </a>
            <a href="/fireprotection">
              <button className="bg-white w-80 xl:w-96 h-80 xl:h-96 rounded-lg text-center items-center hover:scale-110 hover:shadow-inner hover:border-steelprotectionblue hover:border-4">
              <div className="text-black text-3xl font-bold">
              Protivpožarna zažtita čelika
                </div>
                {/* <div className="text-black text-xl xl:text-3xl ">Radcon #7</div> */}
                <div className="text-black text-xl xl:text-xl pt-5">
                Protivpožarna zaštita čelika je postupak primene specifičnih materijala i premaza radi povećanja otpornosti čelika na visoke temperature i sprečavanja širenja požara. 
                </div>
              </button>
            </a>
            <a href="/productshidro">
              <button className="bg-white w-80 xl:w-96 h-80 xl:h-96 rounded-lg text-center items-center hover:scale-110 hover:shadow-inner hover:border-steelprotectionblue hover:border-4">
              <div className="text-black text-3xl font-bold">
              Hidroizolacija betona
                </div>
                {/* <div className="text-black text-xl xl:text-3xl ">RADMYX</div> */}
                <div className="text-black text-xl xl:text-xl pt-5">
                Hidroizolacija betona sa kristalima je inovativna tehnologija koja daje dubinsku zaštitu betonskih površina stvarajući trajnu barijeru protiv prodora vode i vlage.
                </div>
              </button>
            </a>
          </div>
        </BackgroundImageNaslovna>
        <NovostiNaslovna />
      </Container>
    </div>
  );
}
