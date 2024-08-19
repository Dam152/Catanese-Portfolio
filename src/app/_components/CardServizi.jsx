import Image from 'next/image'
import React from 'react'

export default function CardServizi() {
  return (
    <div className='w-cardservizi  bg-cardServizi p-12 flex flex-col gap-8 max-sm:w-64 max-sm:p-10'>
        <Image src={'/iconServizi1.png'} width={57} height={47} className='' alt='img-services'></Image>
        <h2 className='text-4xl text-textSubHero max-sm:text-2xl'>Social media manager</h2>
    </div>
  )
}
