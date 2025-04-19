import React from "react";
import { PlayCircle, Trophy } from "lucide-react";
import Image from "next/image";
import { topshere, } from "@/assets";

const ExperienceVideoSection: React.FC = () => {
  return (
    <section className="flex justify-center px-6 md:px-12 py-12">
      <div className="relative max-w-5xl w-full">
        {/* Background Image */}
        <div className="rounded-3xl overflow-hidden relative">
          <Image
            src={topshere}
            alt="college students"
            className="w-full h-full object-cover"
          />

          {/* Experience Badge */}
          <div className="absolute bottom-6 left-6 bg-[#2b186b] text-white rounded-xl flex items-center gap-4 px-5 py-4 shadow-lg">
            <div className="bg-white p-2 rounded-full">
              <Trophy className="w-5 h-5 text-pink-500" />
            </div>
            <span className="text-lg font-bold leading-tight">
              10+ YEARS OF <br /> EXPERIENCE
            </span>
          </div>
        </div>

        {/* Floating Video Card */}
        <div className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 w-[300px] md:w-[350px] bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center text-center">
          <p className="text-pink-500 font-medium mb-2">Tour</p>
          <div className="group relative mb-4">
            <div className="bg-pink-500 w-20 h-20 rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-pink-600 cursor-pointer">
              <PlayCircle className="w-8 h-8 text-white transition-transform duration-300 group-hover:rotate-90" />
            </div>
            {/* Ripple animation */}
            <span className="absolute inset-0 rounded-full border-2 border-pink-500 opacity-30 animate-ping group-hover:opacity-50"></span>
          </div>
          <h4 className="text-lg font-bold text-[#111] mb-2">Intro Video</h4>
          {/* <p className="text-gray-500 text-sm">
            Accusantium nunc labore, voluptas, justo, netus diam eros varius
            mattis maxime ratione aliquet sollicitudin.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default ExperienceVideoSection;
