import React from "react";
import { Check } from "lucide-react";
import Image from "next/image";
import { emma2, emma3 } from "@/assets";

const LimitlessLearning: React.FC = () => {
  return (
    <section className="bg-[#2b186b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16 px-6 md:px-12">
        {/* Left Text Section */}
        <div className="text-white relative z-10">
          {/* Top Decoration */}
          <div className="mb-4">
            <div className="w-12 h-2 bg-pink-500 rounded-md skew-x-[-25deg]" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Limitless Learning, <br /> Limitless Possibilities !
          </h1>
          <p className="text-sm md:text-base text-gray-300 mb-5 max-w-lg">
          Affordable and cost-effective with opportunities to learn new skills and expand knowledge in various fields.
          </p>

          {/* Features */}
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2 text-sm">
              <Check className="text-pink-500 w-5 h-5" />
              <span>Increased accessibility and flexibility in learning.</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <Check className="text-pink-500 w-5 h-5" />
              <span>Improved academic performance and understanding of subjects.</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <Check className="text-pink-500 w-5 h-5" />
              <span>A chance to connect with a community of learners and teachers for support and guidance.</span>
            </li>
          </ul>

          <button className="mt-4 px-6 py-3 bg-pink-500 text-white rounded-full font-semibold text-sm hover:bg-pink-600 transition">
            JOIN US NOW
          </button>
        </div>

        {/* Right Image/Grid Section */}
        <div className="relative z-10 grid grid-cols-2 gap-2 rounded-tr-[50%] rounded-bl-[50%] overflow-hidden">
          <div className="bg-white flex justify-center items-center text-center px-6 py-6">
            <h4 className="text-[#2b186b] font-semibold text-lg leading-tight">
              Our Expertise Is <br /> Best Earned <br /> Through Our Experience
            </h4>
          </div>
          <Image
            src={emma2} // replace with your image
            alt="team"
            className="object-cover w-full h-full"
          />
          <Image
            src={emma3}
            alt="advice"
            className="object-cover w-full h-full"
          />
          <div className="bg-white flex justify-center items-center text-center px-6 py-6">
            <h4 className="text-[#2b186b] font-semibold text-lg leading-tight">
              Our Best Team <br /> For Your Any <br /> Advice For Your <br /> Education
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimitlessLearning;
