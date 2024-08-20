
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function Hero() {
  return (
    <section className='w-screen py-20 flex items-center  max-lg:h-auto max-md:flex-col-reverse max-sm:py-10'>
        <div className='w-1/2 flex justify-center max-xl:justify-start max-xl:pl-20 max-md:w-full max-md:mt-10 max-sm:pl-10'>
            <div className=''>
                <h1 className='font-bold text-5xl max-sm:text-3xl'>Hi, <br />I am Damiano Ciucci</h1>
                <p className='mt-2 text-textSubHero text-fontSubHero max-sm:text-sm'>Full stack developer</p>
                <div className='flex gap-3 mt-9 max-sm:mt-6'>
                    <div className='w-36 h-10 flex justify-center items-center bg-buttonColor hover:scale-105 max-sm:w-32'><Link href={'/giacomo.jpg'} className='text-sm'>Download CV</Link></div>
                    <div className='w-36 h-10 flex justify-center items-center border border-gray-300 hover:scale-105 max-sm:w-32'><Link href={'#about'} className='text-sm'>Learn more</Link></div>
                </div>
            </div>
        </div>

        <div className='w-1/2 flex justify-center max-md:w-full'>
            <div className='circle-container'>
                <Image src={'/volto.png'} width={597} height={597} alt='img-hero' className='rounded-roundedImg max-xl:w-96 max-xl:h-96 max-lg:max-w-80 max-lg:h-80  max-sm:w-56 max-sm:h-56'></Image>
            </div>
        </div>
    </section>
  )
}