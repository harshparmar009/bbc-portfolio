'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Element } from "react-scroll";

// Define the type for each timeline item
type TimelineItemType = {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
};

// Define the props for the TimelineItem component
type TimelineItemProps = {
  item: TimelineItemType;
  isActive: boolean;
  setActiveId: (id: number) => void;
};

// Timeline data array
const timelineData: TimelineItemType[] = [
  {
    id: 1,
    title: 'Solar Energy Consultation',
    description: 'Not sure where to start? Our energy experts provide personalized consultations to design custom solar solutions based on your energy needs, budget, and location. We empower you to make informed decisions toward renewable energy adoption.',
    image: '/images/intergation.jpg',
    icon: '⛏️',
  },
  {
    id: 2,
    title: 'Solar Panel Installation',
    description: 'We specialize in seamless solar panel installation for homes and businesses. Our expert team ensures your system is set up to maximize sunlight absorption and energy efficiency, providing long-term savings and sustainable power solutions.',
    image: '/images/solar-power.jpg',
    icon: '🔍',
  },
  {
    id: 3,
    title: 'Smart Solar Integration',
    description: 'We integrate solar systems with smart technologies, enabling real-time monitoring and automated optimization. Control your energy usage efficiently with our advanced systems tailored for modern homes and businesses.',
    image: '/images/consultant.jpg',
    icon: '💎',
  },
  {
    id: 4,
    title: 'Quality Assurance',
    description: 'We maintain the highest quality standards across every stage, from product selection to installation. We partner with trusted manufacturers and conduct rigorous inspections to ensure durability, reliability, and long-term performance of your solar system.',
    image: '/images/quality.jpg',
    icon: '📜',
  },
  {
    id: 5,
    title: 'Maintenance and Support Services',
    description: 'Our commitment doesn’t end after installation. We provide ongoing maintenance, monitoring, and technical support to ensure your solar system operates at peak performance, year after year, with minimal disruption.',
    image: '/images/support.jpg',
    icon: '✨',
  },
];

// Update the TimelineItem component with TypeScript types
const TimelineItem: React.FC<TimelineItemProps> = ({ item, isActive, setActiveId }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      setActiveId(item.id);
    }
  }, [controls, inView, item.id, setActiveId]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col items-center mb-16 ${isActive ? 'scale-105' : ''} transition-all duration-300 relative z-10`}
      onClick={() => setActiveId(item.id)}
    >
      <motion.div
        className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl z-[1] ${
          isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
        }`}
        whileHover={{ scale: 1.1 }}
      >
        {item.icon}
      </motion.div>
      <h3 className="mt-4 text-xl font-semibold rounded-md bg-gray-100 z-20">{item.title}</h3>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 text-center"
          >
            <div>
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4 z-20" />
            <p className=" text-xl text-gray-900 bg-gray-100 rounded-md z-20">{item.description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Update the Adventure component with TypeScript types
const Adventure: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  return (
    <Element name="journey">
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-[4rem]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl text-blue-800 font-bold text-center mb-12">Our Process</h1>
        <div ref={timelineRef} className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full z-0">
            <motion.div
              className="w-full bg-blue-500"
              style={{ originY: 0 }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: activeId / timelineData.length }}
              transition={{ duration: 0.5 }}
            />
          </div>
          {timelineData.map((item) => (
            <div key={item.id} className="timeline-item relative z-10" data-id={item.id}>
              <TimelineItem item={item} isActive={activeId === item.id} setActiveId={setActiveId} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </Element>
  );
};

export default Adventure;
