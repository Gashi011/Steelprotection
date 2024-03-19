import React from "react";
import Logo from "./Logo";
import UnderFooter from "./UnderFooter";


const Footer = () => {
  return (
    <div>
      <div className="bg-white w-full h-200 p-20"></div>
      <div className="w-full h-0.5 bg-gray-300 mx-auto mb-4"></div>
      <div className="flex flex-col gap-10 pt-20 shadow-inner">
        <div className="flex flex-col lg:flex-row text-center justify-between lg:text-left items-center xl:items-start gap-10 xl:px-32">
          <div className="flex flex-col  items-center">
            <Logo />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 text-2xl font-bold">
              Naša lokacija
            </div>
            <div className="flex flex-col gap-2">
              <p>
                Mihaila Kostića Pljake 6, 11050 Beograd, <br />
                Srbija
              </p>
              <a href="mailto:info@steelprotection.rs"><p>Mail: info@steelprotection.rs</p></a>
              <p>Tel: <b>+381 65 225 0050</b></p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 text-2xl font-bold">
              Radno vreme
            </div><div className="flex flex-row">
            <div className="flex flex-row gap-2">
              <div>pon - pet: </div><div className="font-bold">8 - 16 </div></div><div>h</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 text-2xl font-bold">
              Podaci o firmi
            </div>
            <div className="flex flex-col gap-2">
              <p>
                STEEL PROTECTION d.o.o. <br />
                Mat. br: <b>21827720</b> <br />
                PIB: <b>113229769</b> <br />
                Tek. račun: <b>205-525938-76</b> <br />
                IBAN: <b>RS35205007010058553545 </b>
                
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
