"use client";
import Container from "@/components/Container";
import BuildingImage from "@/components/BuildingImage";
import BackgroundImage from "@/components/BackgroundImage";
import Kontakt from "@/components/Kontakt";
import BackgroundImageSmaller from "@/components/BackgroundImageSmaller";

export default function About() {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row items-center pt-[200px] md:pt-[200px] justify-between gap-2 md:gap-0 top-10">
        <BuildingImage />

        <div className="   mx-4 mt-40 md:mt-0 md:flex-grow">
          <div className="text-2xl">
            <br /> <br />
            Dobrodošli na zvaničnu stranicu <b>STEEL PROTECTION</b>, vašeg pouzdanog partnera za visokokvalitetne usluge pripreme čelika, antikorozivne zaštite čelika, protivpožarne zaštite čelika i hidroizolacije betona. Sa godinama iskustva i stručnosti, posvećeni smo pružanju najefikasnijih rešenja za vaše industrijske i građevinske potrebe, mi smo vaša prva stanica i pouzdan partner za sve potrebe vezane za čelik.
            <br /> <br />
            <div className="flex flex-col gap-4">
            <p><b>Naša Ponuda usluga:</b><br></br></p>
<p><b>1.</b> Priprema čelika:
U STEEL PROTECTION-u, razumemo važnost pravilne pripreme čelika za različite aplikacije. Naši stručnjaci su opremljeni najsavremenijom opremom i znanjem kako bi vaš čelik bio spreman za izazove budućnosti. Bez obzira na vaše zahteve, mi pružamo visokokvalitetne usluge pripreme čelika kako bi vaši projekti bili izdržljivi i sigurni.
            <br /> <br />
            <b>2.</b> Antikorozivna zaštita čelika:
Zaštita od korozije je ključna za produženje životnog veka čelika. Naši stručnjaci koriste najnovije tehnologije i najefikasnije metode kako bi obezbedili dugotrajnu antikorozivnu zaštitu za vaše čelične komponente. Vaša sigurnost je naš prioritet.
</p></div>
            <br />
            <b>3.</b> Protivpožarna zaštita čelika:
Naša protivpožarna zaštita čelika zadovoljava najviše standarde bezbednosti. Sa specijalizovanim premazima i sistemima, zadovoljavamo najviše standarde sigurnosti čelika čak i u najekstremnjim uslovima.
            <br /> <br />
            <b>4.</b> Hidroizolacija betona:
Efikasna hidroizolacija betona je ključna za očuvanje betona od vode i vlage. Mi pružamo visokokvalitetne hidroizolacione usluge koje osiguravaju dugotrajnu zaštitu vaših betonskih površina od infiltracije vode. Naši proizvodi su dugotrajni i pružaju izuzetnu zaštitu vašim betonskim strukturama.
          </div>
        </div>
      </div>
      <div className="hidden">
      <div className="sm:mx-auto pl-10">
          <div className="flex flex-row gap-2 text-neutral-50 text-4xl xl:text-5xl font-bold text-center xl:text-left">
          <div className="text-4xl">Zašto</div> <div className="text-neutral-400 text-4xl">STEEL PROTECTION</div><div className="text-4xl">?</div>
          </div>
          <div className="text-neutral-50 text-xl xl:text-2xl text-center lg:text-left">
            <br />
            <div className="flex flex-row gap-2  mr-5 lg:mr-0"><p className="text-neutral-400"><b>Stručnost i Iskustvo: </b></p><p> Naš tim čine stručnjaci sa dugogodišnjim iskustvom u industriji. <br /></p></div>
            <div className="flex flex-row gap-2 mr-5 lg:mr-0"><p className="text-neutral-400"><b>Inovacija:</b></p><p> Pratimo najnovije trendove i tehnologije kako bismo osigurali da naše usluge budu uvek na vrhu. <br /></p></div>
            <div className="flex flex-row gap-2 mr-5 lg:mr-0"><p className="text-neutral-400"><b>Kvalitet:</b></p><p> Koristimo samo najkvalitetnije materijale i postupke kako bismo garantovali izuzetne rezultate.<br /></p></div>
            <div className="flex flex-row gap-2 mr-5 lg:mr-0"><p className="text-neutral-400"><b>Prilagodljivost:</b></p><p> Prilagođavamo se vašim jedinstvenim zahtevima i ciljevima projekta.<br /></p></div>
            <div className="flex flex-row md:hidden"></div>
          </div>
        </div>
      </div>
      <BackgroundImage>
        <div className="sm:mx-auto pl-10 ">
          <div className="flex flex-row gap-2 text-neutral-50 text-4xl xl:text-5xl font-bold text-center xl:text-left">
          <div className="text-4xl">Zašto</div> <div className="text-neutral-400 text-4xl">STEEL PROTECTION</div><div className="text-4xl">?</div>
          </div>
          <div className="text-neutral-50 text-xl xl:text-2xl text-center lg:text-left">
            <br />
            <div className="flex flex-row gap-2  mr-5 lg:mr-0"><p className="text-neutral-400"><b>Stručnost i Iskustvo: </b></p><p> Naš tim čine stručnjaci sa dugogodišnjim iskustvom u industriji. <br /></p></div>
            <div className="flex flex-row gap-2 mr-5 lg:mr-0"><p className="text-neutral-400"><b>Inovacija:</b></p><p> Pratimo najnovije trendove i tehnologije kako bismo osigurali da naše usluge budu uvek na vrhu. <br /></p></div>
            <div className="flex flex-row gap-2 mr-5 lg:mr-0"><p className="text-neutral-400"><b>Kvalitet:</b></p><p> Koristimo samo najkvalitetnije materijale i postupke kako bismo garantovali izuzetne rezultate.<br /></p></div>
            <div className="flex flex-row gap-2 mr-5 lg:mr-0"><p className="text-neutral-400"><b>Prilagodljivost:</b></p><p> Prilagođavamo se vašim jedinstvenim zahtevima i ciljevima projekta.<br /></p></div>
            <div className="flex flex-row md:hidden"></div>
          </div>
        </div>
        <img
          alt="radnik"
          src="/images/3.jpg"
          className="z-10 pe-0 xl:pe-10  mx-auto  max-h-[500px]"
        ></img>
      </BackgroundImage>
      <Kontakt />
    </Container>
  );
}
