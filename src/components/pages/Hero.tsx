'use client'

import Link from 'next/link';
import HeroVideo from './HeroVideo';

export default function Hero() {

  return (
    
    <div className="">
     {/* <div className="">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/wind-video.mp4" // Add your video source here
        autoPlay
        loop
        muted
        playsInline
      />  
      </div> */}
      <div
      className="absolute top-0 left-0 w-full h-full object-cover">
    <HeroVideo/>
       </div>
    
      {/* <div className="absolute text-white gap-[10px] text-center inset-0 flex flex-col items-center justify-center">
        
          <h1 className= "text-4xl px-[0.75rem] sm-text-6xl md:text-5xl lg:text-6xl mb-4 ">
          Provide Solar Panels And Renewable Energy Products
          </h1>
       

        <p className="text-md px-[1.4rem] font-semibold md:px-[6rem] lg:px-[7rem] md:text-md lg:text-xl mb-8">Environment Friendly
Energy Plantation
To Your Smart Home, Renewable Energy
Solutions that Deliver
Financial Savings</p>
       
        <Link
          href="#"
          className="bg-transparent text-white px-6 py-4 border-[1px] border-solid border-white
          font-semibold hover:bg-gray-900 
          transition-colors duration-300"
        >
          Explore Our Diamonds →
        </Link>
     
      </div> */}
    </div>
  )
}