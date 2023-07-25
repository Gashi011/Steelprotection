import React from "react";

const ContactForms = () => {
  return (
    <div className="flex flex-col justify-between gap-20 top-10">
      <div className="text-center pt-10 font-bold text-4xl md:text-5xl ">
        Kontaktirajte nas
      </div>
      <div className="flex flex-col text-xl ps-10 pe-10 gap-10">
        <div>
          <div className="ps-4 pb-4">Ime i prezime</div>
          <input type="text" className="rounded border border-black text-black mx-auto w-full h-10" />

        </div>
        <div>
          <div className="ps-4 pb-4">Email</div>
          <input type="text" className="rounded border border-black text-black mx-auto w-full h-10" />

        </div>
        <div>
          <div className="ps-4 pb-4">Kontakt telefon</div>
            <input type="text" className="rounded border border-black text-black mx-auto w-full h-10" />
        </div>
        <div>
          <div className="ps-4 pb-4">Poruka</div>
          <input type="text" className="rounded border border-black text-black w-full h-32" />
        </div>
      </div>
      <div className="ps-10 pe-10">
        <button className="rounded-lg w-full h-10 text-white bg-red-500">Pošalji</button>
      </div>
    </div>
  );
};

export default ContactForms;
