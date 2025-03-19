'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

const cities = [
  { name: 'Mumbai', image: '/images/s2c1.jpg' },
  { name: 'Surat', image: '/images/s2c2.jpg' },
  { name: 'Jaipur', image: '/images/s2c3.jpg' },
  { name: 'Ahmedabad', image: '/images/s2c4.jpg' },
]

export default function Facilities() {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  useEffect(() => {
    const animateCarousel = async () => {
      await controls.start({
        x: -width,
        transition: { duration: 20, ease: "linear" }
      })
      controls.set({ x: 0 })
      animateCarousel()
    }

    animateCarousel()
  }, [controls, width])

  return (
    <section className="w-full pt-8 bg-gray-900 shadow-lg overflow-hidden bg-[#0A0E25]">
      <div className="p-12 text-white">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-center text-primary">- Our Facilities -</h2>
        </div>
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-center text-primary">State of the Art Infrastructure</h1>
        </div>
        <div className="overflow-hidden">
          <motion.div
            ref={carousel}
            className="flex"
            animate={controls}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = offset.x + velocity.x * 0.2
              if (swipe < -100) {
                controls.start({ x: -width })
              } else if (swipe > 100) {
                controls.start({ x: 0 })
              }
            }}
          >
            {[...cities, ...cities].map((city, index) => (
              <motion.div key={index} className="min-w-[200px] min-h-[200px] md:min-w-[300px] p-4">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img src={city.image} alt={city.name} className="w-full h-48 object-cover" />
                  <h3 className="text-xl text-black font-semibold text-center p-4 text-primary">{city.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}