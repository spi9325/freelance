import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="max-w-[1440px] mx-auto border border-black mt-2 px-2 py-1">
      <div className="relative p-2">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="w-full border border-blue-700 p-1 flex gap-2 justify-center items-center overflow-hidden">
                <div className="w-[45%] mt-[0px]">
                  <h1 className="underline text-4xl font-semibold">We professional consultancy</h1>
                  <h2 className="text-5xl font-bold mt-7 border-l-[5px] border-blue-400 -ml-4 pl-3">WE BUILD YOUR BUSINESS WITH OUR EXPERTS</h2>
                  <p className="mt-[30px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia veritatis magnam harum placeat a, dicta quam at eaque,
                    recusandae neque, vitae voluptate magni rem iste nulla
                    repudiandae cupiditate ex eius! Distinctio, dolore error.
                  </p>
                  <div className="flex gap-7 mt-[40px]">
                    <button className="outline-[3px] outline-black py-3 px-5">CONTACT US</button>
                    <button className="outline-[3px] outline-black py-3 px-5">PURCHASE NOW</button>
                  </div>
                </div>
                <div className="w-[45%] text-white flex justify-center items-center overflow-hidden object-contain">
                    <Image
                        src={"/hero-woman.jpg"}
                        alt="hero image"
                        width={400}
                        height={500}
                        className="scale-150"
                    />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-full border border-blue-700 p-1 flex gap-2 justify-center items-center overflow-hidden">
                <div className="w-[45%] mt-[0px]">
                  <h1 className="underline text-4xl font-semibold">We professional consultancy</h1>
                  <h2 className="text-5xl font-bold mt-7 border-l-[5px] border-blue-400 -ml-4 pl-3">WE BUILD YOUR BUSINESS WITH OUR EXPERTS</h2>
                  <p className="mt-[30px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia veritatis magnam harum placeat a, dicta quam at eaque,
                    recusandae neque, vitae voluptate magni rem iste nulla
                    repudiandae cupiditate ex eius! Distinctio, dolore error.
                  </p>
                  <div className="flex gap-7 mt-[40px]">
                    <button className="outline-[3px] outline-black py-3 px-5">CONTACT US</button>
                    <button className="outline-[3px] outline-black py-3 px-5">PURCHASE NOW</button>
                  </div>
                </div>
                <div className="w-[45%] text-white flex justify-center items-center overflow-hidden object-contain">
                    <Image
                        src={"/hero-woman.jpg"}
                        alt="hero image"
                        width={400}
                        height={500}
                        className="scale-150"
                    />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-full border border-blue-700 p-1 flex gap-2 justify-center items-center overflow-hidden">
                <div className="w-[45%] mt-[0px]">
                  <h1 className="underline text-4xl font-semibold">We professional consultancy</h1>
                  <h2 className="text-5xl font-bold mt-7 border-l-[5px] border-blue-400 -ml-4 pl-3">WE BUILD YOUR BUSINESS WITH OUR EXPERTS</h2>
                  <p className="mt-[30px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia veritatis magnam harum placeat a, dicta quam at eaque,
                    recusandae neque, vitae voluptate magni rem iste nulla
                    repudiandae cupiditate ex eius! Distinctio, dolore error.
                  </p>
                  <div className="flex gap-7 mt-[40px]">
                    <button className="outline-[3px] outline-black py-3 px-5">CONTACT US</button>
                    <button className="outline-[3px] outline-black py-3 px-5">PURCHASE NOW</button>
                  </div>
                </div>
                <div className="w-[45%] text-white flex justify-center items-center overflow-hidden object-contain">
                    <Image
                        src={"/hero-woman.jpg"}
                        alt="hero image"
                        width={400}
                        height={500}
                        className="scale-150"
                    />
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute -left-5" />
          <CarouselNext className="absolute -right-5" />
        </Carousel>
      </div>
    </section>
  );
};
