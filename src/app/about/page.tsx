import ExperienceVideoSection from "@/components/aboutus/ExperienceVideoSection";
import IntroductionSection from "@/components/aboutus/IndroductionSection";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TeachersSection from "@/components/TeachersSection";
import React from "react";

const Page = () => {
  return (
    <div>
      <Navbar />
      <Banner text="About Us" />
      <IntroductionSection />
      <ExperienceVideoSection />
      <TeachersSection />
      <Footer />
    </div>
  );
};

export default Page;
