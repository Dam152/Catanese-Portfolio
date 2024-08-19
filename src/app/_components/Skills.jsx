import React from 'react'
import CardSkill from './CardSkill'

export default function Skill() {
  return (
    <section className='w-screen p-20 flex flex-col items-center gap-9 max-sm:p-10 max-md:items-start max-sm:gap-6'>
      <h1 className='font-bold text-5xl max-sm:text-3xl '>My skills</h1>
      <div className='w-full py-20 bg-cardServizi mt-10 flex justify-center flex-wrap max-sm:flex-col max-sm:items-start gap-32 max-sm:gap-20 max-sm:py-10 max-sm:px-5' >
        <CardSkill></CardSkill>
        <CardSkill></CardSkill>
        <CardSkill></CardSkill>
        <CardSkill></CardSkill>
      </div>
    </section>
  )
}
