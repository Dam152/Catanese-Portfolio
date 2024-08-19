import Image from 'next/image'
import React from 'react'

export default function Card({title,desc}) {
  return (
    <div className='flex flex-col gap-4 justify-center items-center max-sm:items-start'>
        <Image src={'/cardIcon.png'} width={62} height={62} alt='img-card'></Image>
        <h2 className='font-bold text-fontSubHero max-sm:text-sm'>Full Name</h2>
        <p className='text-fontSubHero max-sm:text-sm'>Your name goes here</p>
    </div>
  )
}
