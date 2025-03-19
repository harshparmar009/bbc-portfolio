"use client";
import Footer from "@/components/pages/Footer";
import Navbar from "@/components/pages/NewNav";
import { motion } from "framer-motion";

const services = [
  {
    title: "Solar Panel Installation",
    description:
      "Professional setup for rooftop and ground-mounted systems. Customized solutions based on energy consumption needs. Fast and efficient installation process.",
    image: "/images/04.jpg" // Replace with actual image URL
  },
  {
    title: "Project Design & Consultation",
    description:
      "Site assessment and feasibility analysis. Custom system design tailored to energy requirements. Expert consultation to optimize solar energy usage.",
    image: "/images/05.jpg" // Replace with actual image URL
  },
  {
    title: "Maintenance & Support",
    description:
      "Regular servicing to enhance solar system performance. Troubleshooting and repair services. Warranty-backed support for peace of mind.",
    image: "/images/s1c2.jpg" // Replace with actual image URL
  },
  {
    title: "Net Metering Assistance",
    description:
      "Helping customers connect solar systems to the main grid. Guidance on government incentives and subsidies. Assistance with documentation and approvals.",
    image: "/images/s1c3.jpg" // Replace with actual image URL
  },
  {
    title: "Solar Financing & Subsidy Support",
    description:
      "Helping clients access financing options for solar projects. Assistance with applying for government solar subsidies. Making solar energy affordable and accessible.",
    image: "/images/s1c4.jpg" // Replace with actual image URL
  },
];

export default function ServicesPage() {
  return (
    <div>
      <Navbar />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center text-gray-800 mb-10"
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
                className="bg-gray-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
               <div className="w-full h-48 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${service.image})` }}></div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
