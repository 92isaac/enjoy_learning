import React from "react";
import { Facebook, X, PhoneCall } from "lucide-react";
import Image from "next/image";
import { emma3, girl, student2, student3 } from "@/assets";

const teachers = [
  {
    name: "William Smith",
    title: "Science Professor",
    img: student2,
  },
  {
    name: "Jenny White",
    title: "Art Professor",
    img: emma3,
  },
  {
    name: "George Hobbs",
    title: "Economics Professor",
    img: student3,
  },
  {
    name: "Alice Heard",
    title: "Statistics Professor",
    img: girl,
  },
];

const TeachersSection: React.FC = () => {
  return (
    <section className="bg-[#f8f8f8] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="flex justify-between w-full items-center mb-10 relative">
          <div>
            <div className="mb-2">
              <div className="w-12 h-2 bg-pink-500 rounded-md skew-x-[-25deg]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111]">
              Meet Our Best Teachers
            </h2>
          </div>
          <button className="hidden md:block bg-pink-500 hover:bg-pink-600 text-white text-xs font-semibold rounded-full px-5 py-2">
            ALL TEAM MEMBER
          </button>
        </div>

        {/* Teachers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-whit rounded-lg shadow-sm py-4"
            >
              {/* Image */}
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
                <Image
                  src={teacher.img}
                  alt={teacher.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Info */}
              <h4 className="text-lg font-bold">{teacher.name}</h4>
              <p className="text-sm text-pink-600 mb-3">{teacher.title}</p>
              {/* Icons */}
              <div className="flex gap-3">
                <div className="bg-[#2b186b] text-white p-2 rounded-full cursor-pointer hover:bg-pink-500 transition">
                  <Facebook className="w-4 h-4" />
                </div>
                <div className="bg-[#2b186b] text-white p-2 rounded-full cursor-pointer hover:bg-pink-500 transition">
                  <X className="w-4 h-4" />
                </div>
                <div className="bg-[#2b186b] text-white p-2 rounded-full cursor-pointer hover:bg-pink-500 transition">
                  <PhoneCall className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button for smaller screens */}
        <button className="block md:hidden mt-8 bg-pink-500 hover:bg-pink-600 text-white text-xs font-semibold rounded-full px-5 py-2">
          ALL TEAM MEMBER
        </button>
      </div>
    </section>
  );
};

export default TeachersSection;
