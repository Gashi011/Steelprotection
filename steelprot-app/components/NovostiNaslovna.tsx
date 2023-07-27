import Link from 'next/link'
import React from 'react'

const NovostiNaslovna = () => {
  return (
    <div>
    <div className="text-center pt-20 text-5xl">
        Novosti
    </div>
    <div className="flex flex-col lg:flex-row gap-10 items-center pt-10 justify-center cursor-pointer">
        <Link href="/project1">
        <div className="flex flex-col gap-3 text-center h-96 w-96 bg-neutral-200 items-center rounded-lg hover:scale-110">
            <img alt='novosti1' src='/images/novosti1.jpg' className='h-56 w-80 pt-4 pb-4'></img>
            <p className="text-xl">Hidroizolacija temeljne ploče, <br /> horizontalnih i vertikalnih zidova</p>
            <p className="text-xl">U jesen 2022 godine započet je projekt <br /> izgradnje luksuznih vila iznad Makarske.</p>
        </div>
        </Link>
        <div className="flex flex-col gap-3 text-center h-96 w-96 bg-neutral-200 items-center rounded-lg hover:scale-110">
            <img alt='novosti1' src='/images/novosti2.jpg' className='h-56 w-80 pt-4 pb-4'></img>
            <p className="text-xl">Hidroizolacija temeljne ploče, <br /> horizontalnih i vertikalnih zidova</p>
            <p className="text-xl">U jesen 2022 godine započet je projekt <br /> izgradnje luksuznih vila iznad Makarske.</p>
        </div>
        <div className="flex flex-col gap-3 text-center h-96 w-96 bg-neutral-200 items-center rounded-lg hover:scale-110">
            <img alt='novosti1' src='/images/novosti3.jpg' className='h-56 w-80 pt-4 pb-4'></img>
            <p className="text-xl">Hidroizolacija temeljne ploče, <br /> horizontalnih i vertikalnih zidova</p>
            <p className="text-xl">U jesen 2022 godine započet je projekt <br /> izgradnje luksuznih vila iznad Makarske.</p>
        </div>
    </div>
    </div>
  )
}

export default NovostiNaslovna