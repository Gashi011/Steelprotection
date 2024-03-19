import Link from 'next/link'
import React from 'react'

const Products = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 items-center pt-60 justify-center cursor-pointer">
    <Link href="/project1">
              <div className="flex items-center justify-center bg-slate-100">
                <div className="group h-96 w-80 [perspective:1000px]">
                  <div className="relative h-full w-full rounded-xl shadow-xl bg-neutral-200 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0">
                      <div className='flex flex-col text-2xl text-center justify-center mx-auto my-auto mt-44 font-bold'>
                        AKZ i PP
                      </div>
                    </div>
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="flex min-h-full flex-col items-center justify-center">
                        <p className="text-xl ">
                          Hidroizolacija temeljne ploče, horizontalnih i
                          vertikalnih zidova
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
            <Link href="/productshidro">
              <div className="flex items-center justify-center bg-slate-100">
                <div className="group h-96 w-80 [perspective:1000px]">
                  <div className="relative h-full w-full rounded-xl shadow-xl bg-neutral-200 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0">
                    <div className='flex flex-col text-2xl text-center justify-center mx-auto my-auto mt-44 font-bold'>
                        Hidroizolacija betona
                      </div>
                    </div>
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="flex min-h-full flex-col items-center justify-center">
                        <p className="text-xl">
                          Hidroizolacija temeljne ploče, horizontalnih i
                          vertikalnih zidova
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
  )
}

export default Products