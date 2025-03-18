import { girl } from "@/assets";
import Image from "next/image";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#2b186b] relative h-screen flex flex-col justify-center items-center text-center bg-primary text-white px-6 overflow-hidden">
      <div className="w-full mx-auto flex flex-col-reverse md:flex-row items-center py-16 px-6 md:px-12 gap-8">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left relative z-10">
          {/* Top Pink Decoration */}
          <div className="mb-4 flex justify-center md:justify-start">
            <div className="w-12 h-2 bg-pink-500 rounded-md skew-x-[-25deg]" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Providing Best <br /> Education For <br /> Brighter future
          </h1>

          <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed max-w-lg mx-auto md:mx-0">
            Per sed, mattis. Integer viverra euismod maecenas incidunt, phasellus
            consequat aliquam nihil temporibus in assumens deserunt convallis.
            Inceptos per consectetur consequat proin.
          </p>

          <button className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-full font-semibold text-sm hover:bg-pink-600 transition">
            LEARN MORE
          </button>
        </div>

        {/* Right Section (Image + Background Shape) */}
        <div className="flex-1 relative flex justify-center items-center z-10">
          {/* Circle Background */}
          <div className="absolute w-80 h-80 md:w-[420px] md:h-[420px] rounded-full bg-[#e4e0f8] opacity-10 z-0"></div>
          <div className="absolute w-96 h-96 md:w-[500px] md:h-[500px] rounded-full border-2 border-[#5b4dbf] opacity-30 z-0"></div>

          {/* Image */}
          <Image
            src={girl} 
            alt="student"
            className="relative z-10 rounded-3xl w-64 md:w-80"
          />
        </div>
      </div>

      {/* Bottom Pink Decoration */}
      <div className="absolute bottom-10 left-10 md:left-1/2 md:translate-x-[-50%] z-0">
        <div className="flex gap-2">
          <div className="w-6 h-1 bg-pink-500 skew-x-[-25deg]" />
          <div className="w-6 h-1 bg-pink-500 skew-x-[-25deg]" />
          <div className="w-6 h-1 bg-pink-500 skew-x-[-25deg]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
