'use client';

import React, { useState } from 'react'

export default function Contatti() {
  const[name,setName]= useState();
  const[lastName,setLastName]= useState();
  const[email,setEmail]= useState();
  const[telephone,setTelephone]= useState();
  const[message,setMessage]= useState();

 const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('name: ' + name);
    console.log('lastname: ' + lastName);
    console.log('email: ' + email);
    console.log('telephone: ' + telephone);
    console.log('message: ' + message); 

    window.location.reload();
  };


  return (
    <section id='contatti' className='w-screen p-20  flex flex-col items-center gap-9 max-sm:p-10 max-sm:gap-6 max-md:items-start '>
        <h1 className='font-bold text-5xl max-sm:text-3xl'>Get in touch</h1>
        <form  onSubmit={handleSubmit} className='mt-10 flex flex-col gap-4 items-center w-4/5 max-md:w-full max-md:items-start '>
            <div className='w-full flex justify-center  gap-9  max-md:flex-wrap max-md:gap-4'>
                <input type="text" placeholder='Name' required className='bg-transparent border border-white p-2 text-sm w-1/2 max-md:w-full' onChange={(e)=>{setName(e.target.value)}}/>
                <input type="text" placeholder='Last Name'required className='bg-transparent border border-white p-2 text-sm  w-1/2 max-md:w-full ' onChange={(e)=>{setLastName(e.target.value)}} />
            </div>
            <div className='w-full flex  justify-between gap-9 max-md:flex-wrap max-md:gap-4'>
                <input type="email" placeholder='Email' required className='bg-transparent border  border-white p-2 text-sm  w-1/2 max-md:w-full' onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="tel" placeholder='Phone number' required className='bg-transparent border border-white p-2 text-sm  w-1/2  max-md:w-full' onChange={(e)=>{setTelephone(e.target.value)}}/>
            </div>
            <textarea name="message" id="" placeholder='Message' required className='w-full bg-transparent border border-white pl-3 pt-2 text-sm min-h-28 mt-6'  onChange={(e)=>{setMessage(e.target.value)}}></textarea>
            <button type='submit' className='bg-buttonColor w-36 h-11 flex justify-center items-center hover:scale-105 cursor-pointer mt-4 max-sm:w-32 max-sm:h- max-sm:text-sm'>Submit now</button>
        </form>

    </section>
  )
}
