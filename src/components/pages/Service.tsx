

'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const cards = [
  {
    title: 'Solar Panel Services',
    description: 'Expert installation and maintenance of solar panels for homes and businesses.',
    image: '/images/bbc-service.png',
  },
  {
    title: 'Life with Solar',
    description: 'Transition to renewable energy for a sustainable future.',
    image: '/images/bbc-life.png',
  },
  {
    title: 'Renewable Energy Source',
    description: 'Harness the power of the sun for clean, green energy.',
    image: '/images/bbc-energy.png',
  },
  {
    title: 'Free of Cost Energy',
    description: 'Solar energy is free - harness it without limits.',
    image: '/images/bbc-free.png',
  },
  {
    title: 'Eco Friendly',
    description: 'Solar energy is free - harness it without limits.',
    image: '/images/bbc-eco.png',
  },

]

export default function Service() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    )
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    )
  }, [])

  useEffect(() => {
    let intervalId: NodeJS.Timeout
    if (isPlaying) {
      intervalId = setInterval(nextSlide, 5000)
    }
    return () => clearInterval(intervalId)
  }, [isPlaying, nextSlide])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevSlide()
    if (e.key === 'ArrowRight') nextSlide()
  }

  const renderCards = useMemo(() => cards.map((card, index) => (
    <div key={index} className="min-w-full px-4">
      <div className="bg-white shadow-lg rounded-xl p-6 text-center">
        <div className='w-full flex items-center justify-center mb-4'>
          <Image
            src={card.image}
            alt={card.title}
            width={160}
            height={160}
            className="rounded-full object-cover"
          />
        </div>
        <h3 className="text-3xl sm:text-3xl font-semibold mb-2">{card.title}</h3>
        <p className="text-gray-600 text-md">{card.description}</p>
      </div>
    </div>
  )), [])

  return (
    <div className='w-full bg-gray-100 mt-[4rem]'>
    <div className="relative w-full max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-3xl text-blue-800  md:text-5xl font-bold text-center mb-8">Professional Services</h2>

      {/* Slider Container */}
      <div 
        className="overflow-hidden relative" 
        onKeyDown={handleKeyDown} 
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Professional Services Carousel"
      >
        <motion.div
          className="flex transition-transform ease-in-out duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {renderCards}
        </motion.div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Pagination Dots and Autoplay Control */}
      <div className="flex justify-center items-center mt-4 gap-4">
        <div className="flex">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${
                currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              role="button"
              tabIndex={0}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              onKeyDown={(e) => e.key === 'Enter' && setCurrentIndex(index)}
            />
          ))}
        </div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
          className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>
      </div>
    </div>
    </div>
  )
}
