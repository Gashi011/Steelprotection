import Link from 'next/link'
import React from 'react'

const Novosti4akz = () => {
  return (
    <div>
    <div className="flex flex-col lg:flex-row gap-10 items-center pt-10 justify-center cursor-pointer">
    <Link href="/project010">
              <div className="flex items-center justify-center bg-slate-100">
                <div className="group h-96 w-80 [perspective:1000px]">
                  <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0">
                      <img
                        className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                        src="/images/projekti/hidro/projekat010/2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="flex min-h-full flex-col items-center justify-center">
                        <p className="text-xl">
                        Aeorodrom Konstantin Veliki
                        </p>
                        <br></br>
                        <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-steelprotectionblue text-md hover:text-white">
                          Više informacija
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/project111">
              <div className="flex items-center justify-center bg-slate-100">
                <div className="group h-96 w-80 [perspective:1000px]">
                  <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0">
                      <img
                        className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                        src="/images/projekti/akzpp/projekat111/3.jpg"
                        alt=""
                      />
                    </div>
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="flex min-h-full flex-col items-center justify-center">
                        <p className="text-xl">
                        KemoImpex Inđija
                        </p>
                        <br></br>
                        <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-steelprotectionblue text-md hover:text-white">
                          Više informacija
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/project110">
              <div className="flex items-center justify-center bg-slate-100">
                <div className="group h-96 w-80 [perspective:1000px]">
                  <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0">
                      <img
                        className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                        src="/images/projekti/akzpp/projekat110/2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="flex min-h-full flex-col items-center justify-center">
                        <p className="text-xl">
                        Topola Fortuna
                        </p>
                        <br></br>
                        <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-steelprotectionblue text-md hover:text-white">
                          Više informacija
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
    </div>
    </div>
  )
}

export default Novosti4akz;