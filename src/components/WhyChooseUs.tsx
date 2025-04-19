import React from "react";
import { GraduationCap, Users } from "lucide-react";
import Image from "next/image";
import { emma2, sandi } from "@/assets";

const WhyChooseUs: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="space-y-8">
          <Image
            src={sandi}
            alt="students"
            className="rounded-2xl w-full"
          />

          {/* Progress Bars */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm font-semibold text-[#2b186b]">
                <span>Practical Knowledge</span>
                <span>92%</span>
              </div>
              <div className="w-full h-1 bg-[#2b186b] mt-1"></div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold text-[#2b186b]">
                <span>Passed Percentage</span>
                <span>98%</span>
              </div>
              <div className="w-full h-1 bg-[#2b186b] mt-1"></div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold text-[#2b186b]">
                <span>Happy Students</span>
                <span>90%</span>
              </div>
              <div className="w-full h-1 bg-[#2b186b] mt-1"></div>
            </div>
          </div>

          {/* Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="flex items-start gap-3">
              <GraduationCap className="text-pink-500 w-8 h-8" />
              <div>
                <h4 className="text-md font-bold text-[#2b186b]">
                  Learning Community
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                A chance to connect with a community of learners and teachers for support and guidance
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Users className="text-pink-500 w-8 h-8" />
              <div>
                <h4 className="text-md font-bold text-[#2b186b]">
                  Qualified Teachers
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                Improved academic performance and understanding of subjects. Increased accessibility and flexibility in learning
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2b186b] mb-4">
            Why Students Choose Us <br /> for Gaining Knowledge !
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6">
          Affordable and cost-effective with opportunities to learn new skills and expand knowledge in various fields
          </p>
          <Image
            src={emma2}
            alt="students"
            className="rounded-2xl w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
