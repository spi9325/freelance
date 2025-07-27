import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import { IoCall, IoLocation } from 'react-icons/io5'

export const Footer = () => {
  return (
    <section className="max-w-[1440px] grid gap-15 lg:gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto mt-6 py-15 px-7 bg-slate-700 text-white">
        <div className="px-3">
            <div className="flex flex-col">
                <p className="text-3xl font-bold">START</p>
                <p className="text-sm text-slate-400">CONSULTANCY</p>
            </div>
            <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum officia, maiores sequi excepturi accusamus reprehenderit non libero eligendi animi provident quidem eius. 
            </p>
            <div className="flex items-center mt-5 gap-2">
                <IoLocation className='text-blue-400 text-xl'/>
                <p className="">Location 123,avenue husten USA</p>
            </div>
            <div className="flex items-center mt-5 gap-2">
                <IoCall className='text-blue-400 text-xl'/>
                <p className="">+1 123 34 55</p>
            </div>
            
        </div>

        <div className="px-3">
            <div className="">
                <p className="font-bold text-xl">SERVICES LINKS</p>
            </div>
            <div className="flex flex-col gap-4 mt-4 px-2">
                <p className="">Consultancy</p>
                <p className="">Finance</p>
                <p className="">Advertising</p>
                <p className="">business Planing</p>
                <p className="">Marketing</p>
                <p className="">Creative Ideas</p>
                <p className="">FAQ</p>
            </div>
        </div>

        <div className="px-3">
            <p className="text-xl font-bold">RECENT NEWS</p>
            <div className="mt-7 flex gap-5">
                <span className="p-4 border border-white">
                    Avatar
                </span>
                <div className="flex flex-col justify-center">
                    <p className="text-sm">Latest Buisness News</p>
                    <p className="text-sm">20 jul 2016</p>
                </div>
            </div>
            <div className="mt-7 flex gap-5">
                <span className="p-4 border border-white">
                    Avatar
                </span>
                <div className=" flex flex-col justify-center">
                    <p className="text-sm">New Office Opening</p>
                    <p className="text-sm">20 jul 2016</p>
                </div>
            </div>
            <div className="mt-7 flex gap-5">
                <span className="p-4 border border-white">
                    Avatar
                </span>
                <div className=" flex flex-col justify-center">
                    <p className="text-sm">Get to Gathor</p>
                    <p className="text-sm">20 jul 2016</p>
                </div>
            </div>
        </div>

        <div className="px-3">
            <p className="text-xl font-bold">SUBSCRIBE US</p>
            <div className="mt-7">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi minima veniam accusamus incidunt dolorem perferendis eos magnam magni.
            </div>
            <div className="mt-7 flex">
                <input type="text" className='border-[2px] border-slate-500 px-2 ' placeholder='enter your email' />

                <button className='bg-blue-500 p-3 text-xl'><FaTelegramPlane /></button>
            </div>
        </div>
    </section>
  )
}
