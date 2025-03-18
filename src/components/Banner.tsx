import { emma2 } from "@/assets";
import Image from "next/image";
import React from "react";

interface BannerProps {
  text: string;
}

const Banner: React.FC<BannerProps> = ({ text }) => {
  return (
    <section className="relative h-64 md:h-72 lg:h-[400px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={emma2}
          alt="about us"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#2b186b] opacity-80"></div>
      </div>

      {/* Centered Text */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-3xl md:text-5xl font-bold text-white">{text}</h1>
      </div>
    </section>
  );
};

export default Banner;
