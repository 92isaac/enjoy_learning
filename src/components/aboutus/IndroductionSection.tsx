import React from "react";

const IntroductionSection: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Zigzag decoration */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-2 bg-pink-500 rounded-md skew-x-[-25deg]" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
          Introduction About Us
        </h2>

        {/* Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 mb-12 text-sm md:text-base">
          <p>
          Enjoy Learning Online is an online tutoring school that delivers the best learning experience by empowering our learners and teachers to succeed. We are committed to providing high-quality, personalized tutoring services to students of all ages, empowering them to reach their full potential and achieve academic success.
          </p>
          <p>
        Our mission is to provide high-quality, personalized tutoring services to students of all ages, empowering them to reach their full potential and achieve academic success.
        To create a dynamic learning environment that fosters curiosity, creativity, and critical thinking skills, while also providing the necessary support and resources for students to excel in their studies.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t pt-10 text-center">
          <div>
            <h3 className="text-3xl font-extrabold text-[#2b186b]">45k+</h3>
            <p className="text-pink-500 text-sm mt-1">Active Students</p>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-[#2b186b]">72+</h3>
            <p className="text-pink-500 text-sm mt-1">Faculty Courses</p>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-[#2b186b]">90+</h3>
            <p className="text-pink-500 text-sm mt-1">Best Professors</p>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-[#2b186b]">35</h3>
            <p className="text-pink-500 text-sm mt-1">Award Achieved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
