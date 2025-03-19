"use client";

import Image from 'next/image';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Sun, Wind, Zap } from 'lucide-react';
import Footer from '@/components/pages/Footer';
import Navbar from '@/components/pages/NewNav';

export default function AboutPage() {
  return (
    <div> 
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">About BBC GROUP INDIA SOLAR</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg p-4 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Our Certification</h2>
                    <Image
                      src="/logo/TATA.jpg"
                      alt="Certificate of Authorization"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
                    <div className="grid grid-cols-3 gap-6">
                      <div className="flex flex-col items-center">
                        <div style={{ width: 120, height: 120 }}>
                          <CircularProgressbar
                            value={87}
                            text={`${87}%`}
                            styles={buildStyles({
                              textColor: '#3b82f6',
                              pathColor: '#3b82f6',
                            })}
                          />
                        </div>
                        <p className="mt-2 text-center">Hybrid Energy</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <div style={{ width: 120, height: 120 }}>
                          <CircularProgressbar
                            value={85}
                            text={`${85}%`}
                            styles={buildStyles({
                              textColor: '#10b981',
                              pathColor: '#10b981',
                            })}
                          />
                        </div>
                        <p className="mt-2 text-center">Wind Turbines</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <div style={{ width: 120, height: 120 }}>
                          <CircularProgressbar
                            value={92}
                            text={`${92}%`}
                            styles={buildStyles({
                              textColor: '#f59e0b',
                              pathColor: '#f59e0b',
                            })}
                          />
                        </div>
                        <p className="mt-2 text-center">Solar Power</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Best Offer For Renewable Solar Solutions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <Sun className="w-12 h-12 text-yellow-500 mb-4 mx-auto" />
                      <h3 className="text-lg font-semibold mb-2 text-center">Solar Panels Services</h3>
                      <Image
                        src="/images/bbc-service.png"
                        alt="Solar Panels Services"
                        width={300}
                        height={200}
                        className="rounded-lg mb-4 mx-auto"
                      />
                      <ul className="list-disc list-inside text-sm text-center">
                        <li>Solar Panels Installation</li>
                        <li>Best quality of solar panels</li>
                        <li>Maintenance and support</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <Zap className="w-12 h-12 text-red-500 mb-4 mx-auto" />
                      <h3 className="text-lg font-semibold mb-2 text-center">Fossil Resources Services</h3>
                      <Image
                        src="/images/bbc-life.png"
                        alt="Fossil Resources Services"
                        width={300}
                        height={200}
                        className="rounded-lg mb-4 mx-auto"
                      />
                      <ul className="list-disc list-inside text-sm text-center">
                        <li>Efficient energy solutions</li>
                        <li>Sustainable practices</li>
                        <li>Expert consultation</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <Wind className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
                      <h3 className="text-lg font-semibold mb-2 text-center">Natural Power Planset</h3>
                      <Image
                        src="/images/bbc-energy.png"
                        alt="Natural Power Planset"
                        width={300}
                        height={200}
                        className="rounded-lg mb-4 mx-auto"
                      />
                      <ul className="list-disc list-inside text-sm text-center">
                        <li>Wind energy solutions</li>
                        <li>Hybrid power systems</li>
                        <li>Customized energy plans</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Us Section */}
            <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold text-center mb-6">About Us</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                BBC India Group is a trusted name in the solar energy industry, offering end-to-end solutions for on-grid, off-grid, and hybrid solar power projects. With over a decade of experience, we specialize in the design, installation, and commissioning of solar PV systems for residential, commercial, and industrial applications.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Our mission is to provide sustainable, high-quality, and cost-effective solar energy solutions that help reduce carbon footprints and promote renewable energy adoption. We work with cutting-edge technology and internationally certified solar products to ensure maximum efficiency and long-term reliability.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                At BBC India Group, we are committed to delivering exceptional service, innovative solutions, and superior quality to our clients. Our expertise extends to rooftop and ground-mounted solar installations, catering to businesses, industries, homeowners, and government projects.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                With a strong focus on customer satisfaction, we provide comprehensive support from consultation to execution, ensuring seamless integration of solar energy into your power needs. Join us in harnessing the sun’s power for a greener and more sustainable future.
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
