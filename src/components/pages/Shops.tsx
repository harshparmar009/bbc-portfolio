"use client"

import React from 'react';
import Image from 'next/image'
import BlurFade from '../utils/BlurFade';


export default function Shops() {
  return (

    <main className="relative mt-[calc(100vh-7rem)] container  mx-auto px-4 py-12">
      <h1 className="text-3xl text-[#283895] font-bold text-center mb-6">- COMPANY PROFILE -</h1>
      <p className="text-center text-lg mb-12 max-w-6xl mx-auto ">
M/S BBC INDIA GROUP IS IN THE BUSINESS OF SOLAR PV MODULES AND DESIGNING OF RENEWABLE ENERGY SYSTEMS FOR MORE THAN TEN YEARS. THE COMPANY IS INVOLVED IN THE
BUSINESS OF MEDIA, CONSULTANCY, SOLAR PHOTOVOLTAIC MODULES, PV SYSTEMS, AND SOLAR THERMAL SYSTEMS. OUR PRODUCTS ARE CERTIFIED BY MANY NATIONAL AND
INTERNATIONAL AGENCIES. WE PROVIDE TOP INTERNATIONAL BRANDS WITH INTERNATIONAL QUALITY. WE ARE CERTIFIED BY ISO 9001:2015,ROHS AND CE.
      </p>
      <h1 className="text-5xl text-[#283895] font-bold text-center mb-6"> What We Do </h1>
      <p className="text-center text-lg mb-12 max-w-3xl mx-auto ">
      Our innovative solar solutions empower homes, businesses, and communities to embrace renewable energy and reduce 
      carbon footprints. With cutting-edge technology and a passion for sustainability, we deliver reliable, cost-effective solar systems
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Solar Implanting",
            description: "Harness the power of the sun with advanced solar panel installations, ensuring maximum energy efficiency for homes and businesses.",
            image: "/images/solar-power.jpg"
          },
          {
            title: "Taking Care of Nature",
            description: "Our solar solutions reduce carbon footprints, contributing to the preservation of natural ecosystems and promoting sustainability.",
            image: "/images/s1c2.jpg"
          },
          {
            title: "Environment-Friendly Energy",
            description: "We deliver eco-friendly energy solutions that help you reduce dependency on fossil fuels while embracing renewable power.",
            image: "/images/s1c3.jpg"
          },
          {
            title: "Empowering Future Generations",
            description: "Invest in solar energy today for a greener, brighter tomorrow, ensuring a sustainable planet for future generations.",
            image: "/images/s1c4.jpg"
          }
        ].map((card, index) => (
          <BlurFade
          key={index}
          delay={0.25}
          inView        
          >
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src={card.image}
                alt={card.title}
                layout="fill"
                objectFit="cover"
                className='w-[3rem]'
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl text-[#283895] font-semibold text-center mb-4">{card.title}</h2>
              <p className="text-gray-600 text-center">{card.description}</p>
            </div>
          </div>
          </BlurFade>
        ))}
      </div>
    </main>
    
  )
}