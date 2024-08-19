'use client';
import React from 'react'
import { Slide } from 'react-awesome-reveal'

export default function CardSkill() {
  return (
    <Slide>
        <div className='flex flex-col items-center gap-2'>
          <h1 className='text-7xl font-bold text-gray2 max-sm:text-5xl'>50%</h1>
          <p className='text-green2 text-2xl max-sm:text-xl'>Facebook</p>
        </div>
    </Slide>
    
  )
}
