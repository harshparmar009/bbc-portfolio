"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/pages/NewNav";

const images = [
  "/images/bbc-service.png",  // Replace these with your images
  "/images/bbc-life.png",
  "/images/bbc-free.png",
  "/images/bbc-energy.png",
  "/images/bbc-eco.png",
  "/images/bbc1.jpg",
  "/images/bbc2.jpg",
  "/images/bbc3.jpg",
];

const galleryItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function Gallery() {
  return (
    <div>
        <Navbar/>
    <div className="min-h-screen bg-gray-100 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Our Memories & Awards
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-8">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={galleryItemVariants}
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={400}
              height={300}
              className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
    
    </div>
  );
}
