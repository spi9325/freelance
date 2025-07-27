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
    <section className="max-w-[1440px] mx-auto mt-2 px-2 py-1">
      <div className="relative md:p-2">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 p-4 md:p-8 overflow-hidden">
                {/* Left Content */}
                <div className="lg:w-1/2 flex flex-col gap-4">
                  <h1 className="underline text-xl md:text-4xl font-semibold">
                    We professional consultancy
                  </h1>
                  <h2 className="text-2xl md:text-5xl font-bold border-l-4 border-blue-400 pl-4">
                    WE BUILD YOUR BUSINESS WITH OUR EXPERTS
                  </h2>
                  <p className="text-base md:text-lg text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia veritatis magnam harum placeat a, dicta quam at eaque,
                    recusandae neque, vitae voluptate magni rem iste nulla
                    repudiandae cupiditate ex eius! Distinctio, dolore error.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <button className="border-2 border-black px-4 py-2 md:px-6 md:py-3 hover:bg-black hover:text-white transition duration-200">
                      CONTACT US
                    </button>
                    <button className="border-2 border-black px-4 py-2 md:px-6 md:py-3 hover:bg-black hover:text-white transition duration-200">
                      PURCHASE NOW
                    </button>
                  </div>
                </div>

                {/* Right Image */}
                <div className=" relative w-full lg:w-1/2 h-[500px] md:h-[500px] lg:h-[600px] overflow-hidden flex justify-center items-center">
                  <Image
                    src="/hero-woman.jpg"
                    alt="Hero Image"
                    width={500}
                    height={500}
                    className="object-cover rounded"
                  />
                </div>
              </div>
            </CarouselItem>
           
          </CarouselContent>
          <CarouselPrevious className="absolute -left-5 bg-black text-white" />
          <CarouselNext className="absolute -right-5 bg-black text-white" />
        </Carousel>
      </div>
    </section>
  );
};
