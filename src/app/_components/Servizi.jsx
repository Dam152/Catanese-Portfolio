import React from 'react'
import CardServizi from './CardServizi'

export default function Servizi() {
  return (
    <section id='servizi' className='w-screen p-20  flex flex-col gap-9 items-center max-sm:p-10 max-sm:items-start max-sm:gap-6'>
        <h1 className='text-5xl font-bold max-sm:text-3xl'>What i do</h1>
        <div className='mt-10 flex flex-wrap justify-center gap-16 max-md:justify-start '>
            <CardServizi></CardServizi>
            <CardServizi></CardServizi>
            <CardServizi></CardServizi>
        </div>
    </section>
  )
}
