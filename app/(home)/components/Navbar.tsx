import React from "react";
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { LuClock9 } from "react-icons/lu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiBars3 } from "react-icons/hi2";

export const Navbar = () => {
  return (
    <div className="text-md max-w-[1440px] mx-auto relative overflow-hidden">
      <div className="flex justify-between bg-black px-4 py-3">
        <div className=" p-1 flex gap-1">
          <span className="text-white text-[20px] font-bold">envato</span>
          <span className="text-slate-500 text-[20px]">market</span>
        </div>
        <button className="bg-green-400 text-sm p-1 px-5 text-white font-semibold rounded-md">
          Buy Now
        </button>
      </div>

      <div className="flex justify-between px-4 md:px-7 py-3 bg-gray-600 text-white">
        <div className="flex justify-center items-center gap-2">
          <LuClock9 className="text-blue-400 font-bold" />
          <span className="text-sm md:text-md">Mon to Sat : 08:00 - 15:30</span>
        </div>

        <div className="md:flex gap-9 hidden">
          <div className=" flex justify-center items-center gap-2">
            <IoIosCall className="text-blue-400 font-bold" />
            <span className="">+1 801 4545 87</span>
          </div>
          <div className=" flex justify-center items-center gap-2">
            <IoMail className="text-blue-400 font-bold" />
            <span className="">contact@gmail.com</span>
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none text-sm md:hidden">
            Connect with Us
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Connect</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className=" flex justify-center items-center gap-2">
                <IoIosCall className="text-blue-400 font-bold" />
                <span className="">+1 801 4545 87</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className=" flex justify-center items-center gap-2">
                <IoMail className="text-blue-400 font-bold" />
                <span className="">contact@gmail.com</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="p-1 flex justify-between px-3 md:px-7">
        <div className="flex flex-col md:w-[7%]">
          <span className="text-[30px] md:text-[42px] font-semibold -mt-2">
            Start
          </span>
          <span className="text-sm -mt-2 text-slate-400 font-semibold">
            CONSULTANCY
          </span>
        </div>

        <div className="flex justify-center items-center">
          <ul className="hidden lg:flex gap-6 justify-center items-center">
            <li className="text-sm font-semibold text-blue-400">HOME</li>
            <li className="text-sm font-semibold">ABOUT US</li>
            <li className="text-sm font-semibold">SERVICES</li>
            <li className="text-sm font-semibold">WHY US?</li>
            <li className="text-sm font-semibold">PORTFOLIO</li>
            <li className="text-sm font-semibold">TEAM</li>
            <li className="text-sm font-semibold">TESTIMONIAL</li>
            <li className="text-sm font-semibold">PRICING</li>
            <li className="text-sm font-semibold">CONTACT US</li>
          </ul>

          <Sheet>
            <SheetTrigger>
              <HiBars3 className="text-3xl lg:hidden" />
            </SheetTrigger>
            <SheetContent >
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  <div className="text-2xl flex flex-col gap-2 mt-9">
                    <p className="text-md font-semibold hover:bg-slate-200 w-[80%] py-2 px-2 rounded-md transition-all duration-300 text-blue-400">
                      HOME
                    </p>
                    <p className="text-md font-semibold hover:bg-slate-200 w-[80%] py-2 px-2 rounded-md transition-all duration-300">ABOUT US</p>
                    <p className="text-md font-semibold hover:bg-slate-200 w-[80%] py-2 px-2 rounded-md transition-all duration-300">SERVICES</p>
                    <p className="text-md font-semibold hover:bg-slate-200 w-[80%] py-2 px-2 rounded-md transition-all duration-300">WHY US?</p>
                    <p className="text-md font-semibold hover:bg-slate-200 w-[80%] py-2 px-2 rounded-md transition-all duration-300">PORTFOLIO</p>
                    <p className="text-md font-semibold hover:bg-slate-200 w-[80%] py-2 px-2 rounded-md transition-all duration-300">TEAM</p>
                    <p className="text-md font-semibold hover:bg-slate-200 w-[80%] py-2 px-2 rounded-md transition-all duration-300">TESTIMONIAL</p>
                    <p className="text-md font-semibold hover:bg-slate-200 w-[80%] py-2 px-2 rounded-md transition-all duration-300">PRICING</p>
                    <p className="text-md font-semibold hover:bg-slate-200 w-[80%] py-2 px-2 rounded-md transition-all duration-300">CONTACT US</p>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};
