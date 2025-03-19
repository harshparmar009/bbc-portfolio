"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  {
    title: "Solar PV Modules",
    image: "/images/01.jpg", // Use actual image path
    description:
      "High-efficiency solar panels designed for various applications. Available in multiple wattages and configurations. Certified for durability, reliability, and long-term performance.",
  },
  {
    title: "On-Grid Solar Systems",
    image: "/images/02.jpg", // Use actual image path
    description:
      "Integrated with the main power grid for optimal efficiency. Helps reduce electricity costs through net metering. Suitable for residential, commercial, and industrial installations.",
  },
  {
    title: "Off-Grid Solar Systems",
    image: "/images/03.jpg", // Use actual image path
    description:
      "Independent solar power solutions with battery storage. Ideal for remote areas with limited grid connectivity. Provides an uninterrupted and reliable power supply.",
  },
//   {
//     title: "Hybrid Solar Systems",
//     image: "/images/05.png", // Use actual image path
//     description:
//       "A combination of grid power, solar energy, and battery storage. Ensures energy independence and reliable backup power. Perfect for locations with frequent power outages.",
//   },
//   {
//     title: "Solar Thermal Systems",
//     image: "/images/05.png", // Use actual image path
//     description:
//       "Utilizes solar energy for heating applications. Ideal for water heating in residential, commercial, and industrial sectors. Energy-efficient and cost-saving solution for long-term use.",
//   },
];

const services = [
  {
    title: "Solar Panel Installation",
    image: "/images/04.jpg", // Use actual image path
    description:
      "Professional setup for rooftop and ground-mounted systems. Customized solutions based on energy consumption needs. Fast and efficient installation process.",
  },
  {
    title: "Project Design & Consultation",
    image: "/images/05.jpg", // Use actual image path
    description:
      "Site assessment and feasibility analysis. Custom system design tailored to energy requirements. Expert consultation to optimize solar energy usage.",
  },
  {
    title: "Maintenance & Support",
    image: "/images/03.jpg", // Use actual image path
    description:
      "Regular servicing to enhance solar system performance. Troubleshooting and repair services. Warranty-backed support for peace of mind.",
  },
//   {
//     title: "Net Metering Assistance",
//     image: "/images/05.png", // Use actual image path
//     description:
//       "Helping customers connect solar systems to the main grid. Guidance on government incentives and subsidies. Assistance with documentation and approvals.",
//   },
//   {
//     title: "Solar Financing & Subsidy Support",
//     image: "/images/05.png", // Use actual image path
//     description:
//       "Helping clients access financing options for solar projects. Assistance with applying for government solar subsidies. Making solar energy affordable and accessible.",
//   },
];

export default function ProductServiceSection() {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center text-[#283895] mb-10"
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
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="w-full h-48 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${product.image})` }}></div>
                <h3 className="text-2xl font-semibold text-gray-900 mt-4">{product.title}</h3>
                <p className="text-gray-700">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-6">
            <Link href="/products">
            <button className="px-4 py-4 rounded-lg bg-black/70 text-white hover:bg-black">Expore More</button>
            </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center text-[#283895] mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="w-full h-48 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${service.image})` }}></div>
                <h3 className="text-2xl font-semibold text-gray-900 mt-4">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-6">
            <Link href="/services">
            <button className="px-4 py-4 rounded-lg bg-black/70 text-white hover:bg-black">Expore More</button>
            </Link>
        </div>
      </section>
    </>
  );
}
