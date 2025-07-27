import Image from "next/image";
import React from "react";
import { FaRegChartBar } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoIosSearch, IoMdCheckboxOutline } from "react-icons/io";
import { PiBagFill, PiBagSimpleFill } from "react-icons/pi";

export const About = () => {
  return (
    <section className="border border-black max-w-[1440px] mx-auto p-1 mt-[30px] lg:mt-[50px]">
      <div className="flex justify-center items-center gap-2">
        <p className="text-2xl lg:text-4xl">ABOUT</p>
        <p className="font-bold text-2xl lg:text-4xl">US</p>
      </div>
      <div className="flex flex-col justify-center items-center mt-3">
        <h3 className="">
          OUR <span className="text-blue-400">50 YEARS OF EXPERIENCE</span>
        </h3>
        <h4 className="">WILL HELP YOU TO GROW YOUR BUSINESS</h4>
        <p className="text-center mt-[20px] text-[13px] font-sans lg:text-lg lg:w-[80%]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
          quidem quibusdam nisi quos. Soluta quidem quibusdam nisi quos{" "}
        </p>
      </div>
      <div className="flex justify-center items-center flex-col md:flex-row gap-8 mt-8 lg:mt-[50px]">
        <div className="border border-black w-full">
          <div className="flex flex-col gap-3 items-center py-5">
            <PiBagSimpleFill className="border border-black text-5xl p-1" />
            <span className="">SECURITY MANAGEMENT</span>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
              iure iste asperiores enim dolore cum unde laborum aspernatur?
            </p>
          </div>
        </div>
        <div className="border border-black w-full">
          <div className="flex flex-col gap-3 items-center py-5">
            <FaRegChartBar className="border border-black text-5xl p-1" />
            <span className="">FINANCE PLANING</span>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
              iure iste asperiores enim dolore cum unde laborum aspernatur?
            </p>
          </div>
        </div>
        <div className="border border-black w-full">
          <div className="flex flex-col gap-3 items-center py-5">
            <IoIosSearch className="border border-black text-5xl p-1" />
            <span className="">EDUCATIONAL SUPPORT</span>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
              iure iste asperiores enim dolore cum unde laborum aspernatur?
            </p>
          </div>
        </div>
      </div>

      <div className="border border-black mt-6">
        <Image
          src={"/business-image.jpg"}
          alt="about section image"
          width={500}
          height={500}
          className="object-fit w-full"
        />
      </div>

      <div className=" bg-gray-700 md:py-[90px] md:px-[50px] flex flex-col gap-4 md:flex-row justify-between">
        <div className="border md:w-[45%] flex flex-col gap-9 justify-center items-center py-[100px]">
          <div className="text-center flex gap-2 text-[30px] md:text-[30px]">
            <p className="text-white">OUR</p>
            <p className="text-white font-bold">MISSION</p>
          </div>
          <p className="text-white text-center lg:text-[18px] leading-[30px]">
            Lorem ipsu deserunt sunt praesentium repellat accusantium, optio
            ratione id quibusdam laboriosam n
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 text-white">
          {[
            { icon: <HiMiniUserGroup />, value: "20K", label: "HAPPY CLIENTS" },
            {
              icon: <IoMdCheckboxOutline />,
              value: "50K",
              label: "PROJECT COMPLETED",
            },
            { icon: <PiBagFill />, value: "550", label: "PROFESSIONAL" },
            { icon: <HiMiniUserGroup />, value: "10+", label: "BEST AWARDS" },
          ].map((item, index) => (
            <div
              key={index}
              className="border-2 border-gray-400 flex items-center gap-3 p-2 rounded-md"
            >
              <div className="text-4xl md:text-4xl text-blue-400 border-r-2 border-gray-400 pr-4">
                {item.icon}
              </div>
              <div>
                <p className="text-5xl sm:text-5xl md:text-3xl font-bold">
                  {item.value}
                </p>
                <p className="text-sm sm:text-sm mt-2">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
