"use client"

import Footer from "@/components/pages/Footer";
import Navbar from "@/components/pages/NewNav";
import { motion } from "framer-motion";

const products = [
  {
    title: "Solar PV Modules",
    image: "/images/01.jpg",
    description:
      "High-efficiency solar panels designed for various applications. Available in multiple wattages and configurations. Certified for durability, reliability, and long-term performance.",
  },
  {
    title: "On-Grid Solar Systems",
    image: "/images/02.jpg",
    description:
      "Integrated with the main power grid for optimal efficiency. Helps reduce electricity costs through net metering. Suitable for residential, commercial, and industrial installations.",
  },
  {
    title: "Off-Grid Solar Systems",
    image: "/images/03.jpg",
    description:
      "Independent solar power solutions with battery storage. Ideal for remote areas with limited grid connectivity. Provides an uninterrupted and reliable power supply.",
  },
  {
    title: "Hybrid Solar Systems",
    image: "/images/solar-power.jpg",
    description:
      "A combination of grid power, solar energy, and battery storage. Ensures energy independence and reliable backup power. Perfect for locations with frequent power outages.",
  },
  {
    title: "Solar Thermal Systems",
    image: "/images/s1c2.jpg",
    description:
      "Utilizes solar energy for heating applications. Ideal for water heating in residential, commercial, and industrial sectors. Energy-efficient and cost-saving solution for long-term use.",
  },
];

export default function ProductPage() {
  return (
   <div>
    <Navbar/>
     <section className="py-32 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center text-gray-800 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Products
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
            <div className="w-full h-48 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${product.image})` }}></div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{product.title}</h3>
              <p className="text-gray-700">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
   </div>
  );
}
