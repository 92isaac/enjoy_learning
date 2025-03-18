import { akon, ben, emma1, student, student3, topshere } from "@/assets";
import Image from "next/image";
import React from "react";

const images = [
emma1, 
student, 
student3,
topshere, 
akon,
ben
];

const GalleryGrid: React.FC = () => {
  return (
    <section className="px-6 md:px-12 py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-2xl">
            <Image
              src={src}
              alt={`gallery-img-${idx}`}
              className="w-full h-[300px] object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryGrid;
