import BackgroundImageProizvodi from "@/components/BackgroundImageProizvodi";
import ScrollToBubreceTrake from "@/components/ScrollToBubreceTrake";
import ScrollToCemlex from "@/components/ScrollToCemflex";
import React from "react";

const Bpa = () => {
  return (
    <div className="pt-40">
      <BackgroundImageProizvodi>
        <div className="flex flex-col text-center text-white pt-10 gap-5">
          <div className=" text-5xl font-bold">BPA</div>
          <div className="flex flex-col md:flex-row text-center gap-1 justify-center">
            <div id="cemflex" className="text-red-500 cursor-pointer">
              CEMflex VB - Limovi za spojeve
            </div>
            <div>/</div>
            {/* <div className="cursor-pointer">QUELLMAX bubreće trake</div> */}
            <ScrollToBubreceTrake/>
          </div>
          <div className=" text-5xl font-bold pt-10">
            CEMflex VB - Limovi za spojeve
          </div>
          <div className="flex flex-col lg:flex-row px-20 text-center lg:text-left pt-20 gap-14">
            <div className="flex flex-col gap-10 ">
              <div className="text-white text-4xl font-bold text-center">
                Opis proizvoda
              </div>
              <div className="text-white text-2xl">
                <p>
                  CEMproof® CEMflex VB lim je proizvod namijenjen za izolaciju
                  (brtvljenje) radnih spojeva{" "}
                </p>
                <p>
                  {" "}
                  u betonu. Ono što ovaj proizvod čini jedinstvenim je
                  specijalni, patentirani kristalizacijski{" "}
                </p>
                <p>
                  {" "}
                  premaz kojim je lim obostrano obložen. Ekstremna snaga
                  vezivanja kristalizacijskog{" "}
                </p>{" "}
                <p>
                  {" "}
                  premaza s betonom omogućuje trajnu i pouzdanu hidroizolaciju
                  radnog spoja.{" "}
                </p>{" "}
                <p>
                  {" "}
                  CEMproof® CEMflex VB je aktivan brtveni lim s međunarodnim
                  patentom.{" "}
                </p>{" "}
              </div>
              <div className="flex flex-col gap-10 ">
                <div className="text-white text-4xl font-bold text-center">
                  Pakiranje
                </div>
                <div className="text-white text-2xl">
                  CEMproof® CEMflex VB limovi na tržište dolaze pakirani u
                  drvenim kutijama od 50 <br /> komada x 2m = 100 m u jednoj
                  kutiji. Pojedinačni elementi su dimenzije 2 m x 15 cm x
                  1,25mm.
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="text-white text-4xl font-bold text-center">
                Način ugradnje
              </div>
              <div className="text-white text-2xl">
                <p>
                  {" "}
                  CEMproof® CEMflex VB limovi se ugrađuju vrlo jednostavno.
                  Limovi se postavljaju u središte{" "}
                </p>{" "}
                <p>
                  {" "}
                  spoja i pomoću `&quot;`omega`&quot;` držača se pričvršćuju za armaturu.
                  Spojevi dva lima se preklapaju 5 cm{" "}
                </p>{" "}
                <p>
                  {" "}
                  i spajaju pomoću spajalica. Kod nepravilnih kuteva CEMproof®
                  CEMflex VB limovi se jednostavno{" "}
                </p>{" "}
                <p>
                  {" "}
                  mogu savijati u odgovarajući oblik kuta, bez straha da će se
                  premaz oštetiti. CEMproof® CEMflex VB{" "}
                </p>{" "}
                <p>
                  {" "}
                  limove je potrebno ugraditi minimalno 3 cm u svježi beton kako
                  bi se postiglo pouzdano brtvljenje.{" "}
                </p>{" "}
                <p>
                  {" "}
                  CEMproof® CEMflex VB limove je moguće jednostavno umetnuti u
                  svježi beton i spojiti pomoću{" "}
                </p>{" "}
                <p>
                  {" "}
                  spajalica (spoj ploča-zid). CEMproof® CEMflex VB limovi
                  osiguravaju brzu i jednostavnu ugradnju jer{" "}
                </p>{" "}
                <p>
                  {" "}
                  nisu ljepljivi i nemaju nikakve folije na sebi koje pri
                  ugradnji treba skidati ili paziti na uprljanje.{" "}
                </p>{" "}
                <p>
                  {" "}
                  CEMproof® CEMflex VB limovi se mogu koristiti tijekom cijele
                  godine neovisno o godišnjem{" "}
                </p>{" "}
                dobu ili vremenskim uvjetima, dakle i po kiši, snijegu suncu i
                dr.
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row px-20 text-center lg:text-left pt-20 gap-20 justify-between">
            <div className="flex flex-col gap-10">
              <div className="text-white text-4xl font-bold text-center lg:text-left">
                PODRUČJE PRIMJENE
              </div>
              <div className="flex flex-col text-white text-2xl gap-1">
                <p>&bull;radni spoj zid-pod kod vode pod pritiskom ili vlage</p>
                <p>&bull;radni spoj u području zid-zid, tlo-tlo, zid-strop</p>
                <p>
                  &bull;spojevi predgotovljenih dijelova: područje zid-pod,{" "}
                  <br /> kutovi ili predviđena mjesta stvaranja pukotina.
                </p>
              </div>
              <div className="flex items-center">
                <img src="/images/limovi1.jpg" alt="lomovi1" />
              </div>
              <div className="flex flex-col text-white text-2xl gap-1">
                Shematski prikaz ugrađenog lima na spoju horizontalnog i
                vertikalnog zida. Plava strelica <br /> predstavlja prodor vode
                do samog spoja.Prodor vode je u spoju ploče i zida zaustavljen
                na limu.
              </div>
              <div className="text-white text-4xl font-bold text-center lg:text-left">
                Galerija
              </div>
              <div className="flex flex-col gap-10">
                <div className="flex flex-col md:flex-row gap-20">
                  <div className="flex sm:flex-row md:flex-col gap-5">
                    <img
                      src="/images/lim1.jpg"
                      alt="lim1"
                      className="h-60 w-60 hover:scale-125"
                    />
                    <img
                      src="/images/lim2.jpg"
                      alt="lim2"
                      className="h-60 w-60 hover:scale-125"
                    />
                  </div>
                  <div className="flex sm:flex-row md:flex-col gap-5">
                    <img
                      src="/images/lim3.jpg"
                      alt="lim3"
                      className="h-60 w-60 hover:scale-125"
                    />
                    <img
                      src="/images/lim4.jpg"
                      alt="lim4"
                      className="h-60 w-60 hover:scale-125"
                    />
                  </div>
                  <div className="flex sm:flex-row md:flex-col gap-5">
                    <img
                      src="/images/lim5.jpg"
                      alt="lim5"
                      className="h-60 w-60 hover:scale-125"
                    />
                    <img
                      src="/images/lim6.jpg"
                      alt="lim6"
                      className="h-60 w-60 hover:scale-125"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div>
                <img src="/images/limovi2.jpg" alt="lomovi2" />
              </div>
              <div className="flex flex-col text-white text-2xl gap-1">
                U trenutku kada voda dođe do CEMproof®CEMflex VB lima započinje
                proces <br /> kristalizacije.Premaz koji se nalazi sa obje
                strane lima osigurava da se kristalizacija <br /> odvija u
                smijeru ulaska vode u beton.
              </div>
              <div>
                <img src="/images/limovi3.jpg" alt="lomovi3" />
              </div>
              <div className="flex flex-col text-white text-2xl gap-1">
                Zahvaljujući procesu kristalizacije zatvara se prodor vode sve
                do spoja <br /> horizontalnog i vertikalnog zida i na taj način
                dobiva potpunu zaštitu armatura.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-center text-white pt-40 gap-5">
          <div className="flex flex-col md:flex-row text-center gap-1 justify-center">
            {/* <div className="cursor-pointer">CEMflex VB - Limovi za spojeve</div> */}
            <ScrollToCemlex />
            <div>/</div>
            <div id="bubreceTrake" className="text-red-500 cursor-pointer">
              QUELLMAX bubreće trake
            </div>
          </div>
          <div  className=" text-5xl font-bold pt-10">
            QUELLMAX bubreće trake
          </div>
          <div className="flex flex-col lg:flex-row px-20 text-center lg:text-left pt-20 gap-14">
            <div className="flex flex-col gap-10 ">
              <div className="text-white text-4xl font-bold text-center">
                Opis proizvoda
              </div>
              <div className="flex flex-col gap-10">
                <div className="flex flex-row text-white text-2xl gap-10 justify-between">
                  <div className="flex flex-col gap-3">
                    <p>QUELLMAX je bentonitna bubreća traka koja se odlikuje
                    jakim,brzim i pouzdanim svojstvom bubrenja. </p><p> QUELLMAX
                    se koristi za hidroizolaciju radnih spojeva u građevinarstvu
                    koji su stalno ili povremeno </p><p> opterećeni podzemnim
                    vodama, slivnim i/ili površinskim vodama. Građevinski
                    zahtjevni radni spojevi </p><p> izolirani sa QUELLMAX trakama
                    mogu izdržati pritisak tlaka sve do 7 bara (70 metara
                    vodenog stupca). Bez problema se može primjeniti u zonama
                    izmjene vode.</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-10">
                  <div className="flex flex-row items-center justify-between gap-4">
                    <img
                      src="images/bubrecaTraka1.jpg"
                      className="w-1/2 md:w-[300px] lg:w-[200px] xl:w-[400px]"
                    ></img>
                    <img
                      src="images/bubrecaTraka2.jpg"
                      className="w-1/2 md:w-[300px] lg:w-[200px] xl:w-[400px]"
                    ></img>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10 ">
                <div className="text-white text-4xl font-bold text-center">
                  Pakiranje
                </div>
                <div className="text-white text-2xl">
                  CEMproof® CEMflex VB limovi na tržište dolaze pakirani u
                  drvenim kutijama od 50 <br /> komada x 2m`&apos;` = 100 m`&apos;` u jednoj
                  kutiji. Pojedinačni elementi su dimenzije 2 m x 15 cm x
                  1,25mm.
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="text-white text-4xl font-bold text-center">
                Vrste bubrećih traka
              </div>
              <div className="text-white text-2xl">
                Nudimo 3 vrste bentonitnih QUELLMAX bubrećih traka,ovisno o
                preferencama i potrebama investitora
              </div>
              <div className="flex flex-col xl:flex-row gap-5">
                <div>
                  <div className="text-white text-3xl">QUELMAX Blackstop</div>
                  <div className="text-white text-2xl">
                    standardna bubreća traka nema zaštitni premaz <br /> od kiše
                    pakirana u rolama od 5 m
                  </div>
                </div>
                <img
                  src="/images/bubrecaTraka4.jpg"
                  alt="bubrecaTraka4"
                  className="w-full xl:w-96 xl:h-96"
                ></img>
              </div>
              <div className="flex flex-col xl:flex-row gap-5">
                <div>
                  <div className="text-white text-3xl">QUELLMAX Plus</div>
                  <div className="text-white text-2xl">
                    traka sa patentiranim specijalnim premazom <br />
                    štiti od bubrenja do 72 sata od vremena postavljanja
                  </div>
                </div>
                <img
                  src="/images/bubrecaTraka4.jpg"
                  alt="bubrecaTraka4"
                  className="w-full xl:w-96 xl:h-96"
                />
              </div>
              <div className="flex flex-col xl:flex-row gap-5">
                <div>
                  <div className="text-white text-3xl">
                    QUELLMAX Plus 2 Faze
                  </div>
                  <div className="text-white text-2xl">
                    jedinstvena zaštita u 2 faze faza zaštite: patentirani
                    specijalni premaz koji štiti od bubrenja 72 sata faza <br />{" "}
                    zaštite: aktivno potiče proces kristalizacije u radnom
                    spoju,čime dodatno brtvi radni spoj
                  </div>
                </div>
                <img
                  src="/images/bubrecaTraka4.jpg"
                  alt="bubrecaTraka4"
                  className="w-full xl:w-96 xl:h-96"
                ></img>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row px-20 text-center lg:text-left pt-20 gap-20 justify-between">
            <div className="flex flex-col gap-10 xl:gap-20">
              <div className="text-white text-4xl font-bold text-center lg:text-left">
                Postavljanje
              </div>
              <div className="flex flex-col text-white text-2xl gap-1 xl:gap-3">
                <p>QUELLMAX bubreće trake se mogu postavljati na dva načina, ovisno
                o trkama i mogućnostima </p><p> na gradilištu. Mogu se postavljati sa
                montažnim profilima ili sa montažnim ljepilom. U oba </p>
                 slučaja,ugradnja je izuzetno jednostavna. Podloga mora biti
                čista, bez ostataka betona i većih <p> nepravilnosti. </p>
              </div>
              <div>
                <div className="flex flex-col text-white text-2xl gap-1 font-bold">
                  Sa montažnim profilima:
                </div>
                <div className="flex flex-col text-white text-2xl gap-1 xl:gap-3">
                  <p>traka mora imati dobar kontakt s tlom traka se postavlja u
                  sredinu zida u standardnoj dužini od </p> <p> 5 metara montažni profil
                  se postavlja preko bubreće trake profil se pričvršćuje pomoću
                  čeličnog </p> <p> čavla ili tipli (3 kom/m`&apos;`betona) minimalna debljina
                  betona preko bubreće trake ne smije biti ispod 8 cm </p>
                </div>
              </div>
              <div className="flex flex-col text-white text-2xl gap-1 xl:gap-3">
                <p>traka mora imati dobar kontakt s tlom traka se postavlja u
                sredinu zida u standardnoj dužini od 5 </p> <p> metara montažni profil se
                postavlja preko bubreće trake profil se pričvršćuje pomoću
                čeličnog </p> čavla ili tipli (3 kom/m&#178;betona) minimalna
                debljina betona preko bubreće trake ne smije biti ispod 8 cm
              </div>
              <div className="flex items-center">
                <img src="/images/bubrecaTraka1.jpg" alt="bubrecaTraka4" className="lg:w-1/3 xl:w-1/2" />
              </div>
              <div className="flex flex-col text-white text-2xl gap-1">
                Shematski prikaz ugrađenog lima na spoju horizontalnog i
                vertikalnog zida. Plava strelica <br /> predstavlja prodor vode
                do samog spoja.Prodor vode je u spoju ploče i zida zaustavljen
                na limu.
              </div>
              
            </div>
            <div className="flex flex-col gap-10 xl:gap-20">
              <div className="flex flex-col text-white text-2xl gap-1 font-bold">
                Sa montažnim ljepilom:
              </div>
              <div className="flex flex-col text-white text-2xl gap-1 xl:gap-3">
                <p>montažno ljepilo po mogućnosti CEMstar </p> <p>ljepilo se nanosi na
                beton po sredini zida </p> <p> nakon toga se traka postavlja na ljepilo </p>
                <p>pritisne se na beton i mehanički fiksira </p> <p> minimalna debljina
                betona preko bubreće trake ne smije biti ispod 8 cm </p>
              </div>
              <div>
                <img src="/images/bubrecaTraka2.jpg" alt="bubrecaTraka5" />
              </div>
            </div>
          </div>
        </div>
      </BackgroundImageProizvodi>
      <BackgroundImageProizvodi>
        <div></div>
      </BackgroundImageProizvodi>
      <BackgroundImageProizvodi>
        <div></div>
      </BackgroundImageProizvodi>
      <BackgroundImageProizvodi>
        <div></div>
      </BackgroundImageProizvodi>
      <BackgroundImageProizvodi>
        <div></div>
      </BackgroundImageProizvodi>
      <div className="lg:hidden">
        <BackgroundImageProizvodi>
          <div></div>
        </BackgroundImageProizvodi>
      </div>
      <div className="lg:hidden">
        <BackgroundImageProizvodi>
          <div></div>
        </BackgroundImageProizvodi>
      </div>
      <div className="lg:hidden">
        <BackgroundImageProizvodi>
          <div></div>
        </BackgroundImageProizvodi>
      </div>
    </div>
  );
};

export default Bpa;
