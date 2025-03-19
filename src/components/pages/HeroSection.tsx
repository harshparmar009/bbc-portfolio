'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Element } from 'react-scroll'
import BlurFade from '../utils/BlurFade'


function HeroSection() {
  return (
    <div >  
      <Element name="service">
    <main className='w-full rounded-3xl bg-gray-900'>
        <div className='bg-blue-500 rounded-t-3xl w-full  py-12 flex items-center justify-center '>
         <h1 className= " text-2xl  sm-text-6xl md:text-5xl lg:text-6xl font-bold text-white ">
           Discover the Extraordinary
         </h1>
        </div>

        <BlurFade
              delay={0.25}
              inView
              >
          <div className="container mx-auto px-4 py-12 ">
            <div className="flex flex-col md:flex-row items-center gap-12">
           
              <div className="w-full md:w-1/2">
                <Image
                  src="/images/01.png"
                  alt="Various diamond cuts on display"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            

              <div className="w-full text-center sm:text-left md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                  Buy The Most Beautiful And Rare Diamonds.
                </h1>
                <p className="text-lg text-gray-600">
                  Where we transform the extraordinary beauty of nature's marvels into exquisite works of art. Our passion lies in crafting the rarest of rare diamonds in an array of fancy shapes and mesmerizing colors.
                </p>
                <p className="text-lg text-gray-600">
                  With unrivaled expertise and precision, we bring forth diamonds that stand as unmatched masterpieces in the world of luxury.
                </p>
                <button className="bg-blue-900 text-white px-6 py-3 uppercase text-sm font-semibold hover:bg-blue-800 transition-colors">
                  View All Diamonds
                </button>
              </div>
            </div>
          </div>
        </BlurFade>

           <div className='relative w-full h-56 overflow-hidden container mx-auto px-6 py-12'>
           <video 
            src="/videos/video3.mp4" 
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover rounded-lg z-0"
  />
          <BlurFade
              delay={0.25}
              inView
              className='absolute inset-0 flex items-center text-white sm:px-10 md:px-20 justify-center sm:justify-between'
              >
            
              <h1 className='hidden sm:block text-xl  md:text-5xl '>View Our <br/> Full Inventory List</h1>
              <button className='text-xl px-4 py-3 border-solid border-[1px] border-white'>View All Inventory</button>
            
           </BlurFade>
           </div>

           <BlurFade
              delay={0.25}
              inView
              >
         <div className="container mx-auto px-4 py-12 ">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex md:hidden w-full md:w-1/2">
                <Image
                  src="/images/03.png"
                  alt="Calibrated Natural Fancy Shaped Diamonds"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="text-center sm:text-left w-full md:w-1/2 space-y-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight">
                  Calibrated Natural Fancy Shaped Diamonds for Exquisite Creations
                </h1>
                <p className="text-gray-600 text-lg">
                  Our calibrated diamond line offers near-identical diamonds with flawless consistency, enabling jewelers and designers to create breathtaking jewelry with unmatched balance and brilliance.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Precision Perfected
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Consistent Perfection Achieved
                  </li>
                </ul>
               
                <Link 
                  href="/diamonds" 
                  className="inline-block px-6 py-3 text-sm font-semibold text-white bg-blue-900 rounded-md shadow-md transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-800"
                >
                  VIEW ALL DIAMONDS
                </Link>
              
              </div>
              <div className="hidden md:flex w-full md:w-1/2">
                <Image
                  src="/images/03.png"
                  alt="Calibrated Natural Fancy Shaped Diamonds"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          </BlurFade>


          <BlurFade
              delay={0.25}
              inView
              >
            <div className="container mx-auto px-4 py-12">
              <div className="flex flex-col md:flex-row items-center gap-12">
                
              <div className="w-full md:w-1/2">
                  <Image
                    src="/images/04.png"
                    alt="Calibrated Natural Fancy Shaped Diamonds"
                    width={600}
                    height={600}
                    className="w-full h-auto "
                  />
                </div>

                <div className="text-center sm:text-left w-full md:w-1/2 space-y-6">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight">
                  Unleash Creativity with Unique and Rare Shapes</h1>
                  <p className="text-gray-600 text-lg">
                  Discover an extraordinary selection of unique natural fancy shaped diamonds 
                  that go beyond tradition. From unconventional cuts to one-of-a-kind designs, 
                  let your imagination soar with our rare and exceptional diamonds.</p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Beyond Tradition's Boundaries
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Unconventional Elegance Unveiled
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Exceptional Designs Embrace
                    </li>
                  </ul>
                  <Link 
                    href="/diamonds" 
                    className="inline-block px-6 py-3 text-sm font-semibold text-white bg-blue-900 rounded-md shadow-md transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-800"
                  >
                    VIEW ALL DIAMONDS
                  </Link>
                </div>

                
              </div>
            </div>
          </BlurFade>

            <div className="container mx-auto px-4 py-12">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex md:hidden w-full md:w-1/2">
                  <Image
                    src="/images/05.png"
                    alt="Calibrated Natural Fancy Shaped Diamonds"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="text-center sm:text-left w-full md:w-1/2 space-y-6">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight">
                  Impeccable Match Pairs for Timeless Beauty
                  </h1>
                  <p className="text-gray-600 text-lg">
                  Crafted with meticulous precision, our match pairs exemplify timeless elegance and balanced 
                  aesthetics. Elevate your jewelry designs with these exquisite diamonds that exude harmony and sophistication.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Harmonious Duos Unite
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Perfectly Paired Brilliance
                    </li>
                  </ul>
                  <Link 
                    href="/diamonds" 
                    className="inline-block px-6 py-3 text-sm font-semibold text-white bg-blue-900 rounded-md shadow-md transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-800"
                  >
                    VIEW ALL DIAMONDS
                  </Link>
                </div>
                <div className="hidden md:flex w-full md:w-1/2">
                  <Image
                    src="/images/05.png"
                    alt="Calibrated Natural Fancy Shaped Diamonds"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
    </main>
    </Element>
    </div>
  )
}

export default HeroSection
