import React from 'react'

export const Navbar = () => {
  return (
    <div className='max-w-[1440px] mx-auto p-1'>
        <div className="border flex justify-between">
            <div className="border p-1">
                envato
                <span className='text-slate-500'>market</span>
            </div>
            <button className='bg-green-400 text-sm p-1 px-3 rounded-md'>Buy Now</button>
        </div>
    </div>
  )
}
