import React from "react";
import Logo from "./Logo";
import UnderFooter from "./UnderFooter";

const Footer = () => {
  return (
    <div>
      <div className="bg-white w-full h-200 p-20"></div>
      <div className="flex flex-col gap-10 pt-20 shadow-inner">
        <div className="flex flex-col lg:flex-row text-center justify-between lg:text-left items-center xl:items-start gap-10 xl:px-32">
          <div className="flex flex-col  items-center">
            <Logo />
            <p>
              Iskustvo u građevinskoj hidroizolaciji <br /> od 2004. godine
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 text-2xl font-bold">
              Naša lokacija
            </div>
            <div className="flex flex-col gap-2">
              <p>
                Ulica TaITa broj 2, 11000 Beograd, <br />
                Srbija
              </p>
              <p>Mail: info@steelprotection.rs</p>
              <p>Tel: +381 63 111 1111</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 text-2xl font-bold">
              Radno vreme
            </div>
            <div>
              <p>pon - pet: 8 - 16 sati</p>
              <p>sub, ned: zatvoreno</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 text-2xl font-bold">
              Podaci o fabrici
            </div>
            <div className="flex flex-col gap-2">
              <p>
                Radcon Croatia d.o.o. <br />
                IBAN: HR8525000091101155140 <br />
                OIB: 00474084465 <br />
                Reg. sud: Trgovački sud u Zagrebu <br />
                Članovi uprave: Dražana Ivanković <br />
                Temeljni kapital: 20.000,00 kn
              </p>
            </div>
          </div>
        </div>
        <div className="relative"><UnderFooter /></div>
      </div>
    </div>
  );
};

export default Footer;
