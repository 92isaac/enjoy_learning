import GalleryGrid from "@/components/aboutus/GalleryGrid";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const Page = () => {
  return (
    <div>
      <Navbar />
      <Banner text="Gallery" />
      <GalleryGrid />
      <Footer />
    </div>
  );
};

export default Page;
