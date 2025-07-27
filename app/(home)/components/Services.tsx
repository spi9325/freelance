import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { IoBagRemoveSharp } from 'react-icons/io5'

export const Services = () => {
    const cards = [
        {
           name:"CONSULTANCY",
           description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti dolores vel quod fugiat nam repellat ut inventore, eos, repellendus non aperiam duc", 
           icon:<IoBagRemoveSharp />
        },
        {
           name:"FINANCE",
           description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti dolores vel quod fugiat nam repellat ut inventore, eos, repellendus non aperiam duc", 
           icon:<IoBagRemoveSharp />
        },
        {
           name:"ADVERTISING",
           description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti dolores vel quod fugiat nam repellat ut inventore, eos, repellendus non aperiam duc", 
           icon:<IoBagRemoveSharp />
        },
        {
           name:"BUSINESS PLANING",
           description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti dolores vel quod fugiat nam repellat ut inventore, eos, repellendus non aperiam duc", 
           icon:<IoBagRemoveSharp />
        },
        {
           name:"ONLINE PLANING",
           description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti dolores vel quod fugiat nam repellat ut inventore, eos, repellendus non aperiam duc", 
           icon:<IoBagRemoveSharp />
        },
        {
           name:"SUPER IDEAS",
           description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti dolores vel quod fugiat nam repellat ut inventore, eos, repellendus non aperiam duc", 
           icon:<IoBagRemoveSharp />
        },
    ]
  return (
    <section className="max-w-[1440px] mx-auto mt-[50px]">
        <div className="flex gap-2 w-full justify-center items-center text-2xl md:text-3xl lg:text-4xl">
            <span className="">OUR</span>
            <span className="font-bold">SERVICES</span>
        </div>
        <div className="w-full mt-3">
            <p className="w-[10%] p-1 bg-gray-300 mx-auto rounded-2xl"></p>
        </div>

        <div className="w-full grid gap-3 md:grid-cols-2 lg:grid-cols-3 py-2 px-3 mt-9">
            {
                cards.map((cur,index)=>{
                    return(
                        <div key={index} className="w-full py-6 px-3 lg:px-7 flex flex-col gap-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                            <p className="ml-2 mt-2 font-bold">{cur.name}</p>
                            <p className="px-2 mt-5">{cur.description}</p>
                            <div className="px-2 flex justify-between items-center mt-4">
                                <FaArrowRightLong className='text-4xl text-blue-400 p-1'/>
                                <span className='text-4xl text-black  p-1'>{cur.icon}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    </section>
  )
}
