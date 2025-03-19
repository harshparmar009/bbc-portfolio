'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Scroll } from 'lucide-react'
import { Link as ScrollLink, Element } from "react-scroll";
import solarLogo from '../../../public/logo/bbc-logo.jpg';



export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isAboutOpen2, setIsAboutOpen2] = useState(false)
  const [isAboutOpen3, setIsAboutOpen3] = useState(false)
  const [isAboutOpen4, setIsAboutOpen4] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Element 
    name="top"
    className="bg-black shadow-md sticky z-50 
     pt-[3px] ">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
            <Image
            src={solarLogo}
            alt="Logo"
            width={100}
            height={100}
            className="w-14 rounded-2xl mb-[10px]"
            
          />
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
              href="/"
                className="text-white text-opacity-90 hover:text-opacity-100 px-3 py-2 rounded-md text-xl font-medium">
                <button>Home</button>
              </Link>
             

              {/* <Link
              href='./about'
              className="text-white text-opacity-90 hover:text-opacity-100 px-3 py-2 rounded-md text-xl font-medium">                            
                About Us            
              </Link> */}

              <Link
              href='./certificate'
              className="text-white text-opacity-90 hover:text-opacity-100 px-3 py-2 rounded-md text-xl font-medium">               
                Certificate            
              </Link>

              <div className="relative group">
                <button 
                  className="text-white text-opacity-90 hover:text-opacity-100 px-3 py-2 rounded-md text-xl font-medium inline-flex items-center"
                  onMouseEnter={() => setIsAboutOpen(true)}
                  onMouseLeave={() => setIsAboutOpen(false)}
                >
                  About
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isAboutOpen && (
                  <div 
                    className="absolute left-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                    onMouseEnter={() => setIsAboutOpen(true)}
                    onMouseLeave={() => setIsAboutOpen(false)}
                  >
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <Link href="./about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        About US
                      </Link>
                      <Link href="/terms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        T&C
                      </Link>                      
                      <Link href="/privacy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        Privacy Policy
                      </Link>
                      
                    </div>
                  </div>
                )}
              </div>

              <Link href="/gallery" className="text-white text-opacity-90 hover:text-opacity-100 px-3 py-2 rounded-md text-xl font-medium">
                  Gallery
              </Link>

              <div className="relative group">
                <button 
                  className="text-white text-opacity-90 hover:text-opacity-100 px-3 py-2 rounded-md text-xl font-medium inline-flex items-center"
                  onMouseEnter={() => setIsAboutOpen3(true)}
                  onMouseLeave={() => setIsAboutOpen3(false)}
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isAboutOpen3 && (
                  <div 
                    className="absolute left-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                    onMouseEnter={() => setIsAboutOpen3(true)}
                    onMouseLeave={() => setIsAboutOpen3(false)}
                  >
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <Link href="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        Our Products
                      </Link>
                      <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        Our Services
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
            </div>
          </div>

          {/* Sign Up Button */}
          <div className="hidden md:block">
            <Link
            href="/contact" 
             className="bg-transparent hover:bg-gray-500 
            border-solid border-[1px] 
            border-white text-white px-5 py-3 rounded-md 
            text-sm font-medium">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ">
            <button
              onClick={toggleMenu}
              className="inline-flex z-50 items-center justify-center p-2 rounded-md text-white hover:text-white "
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 fixed inset-0 pt-[5rem] -z-10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

            <Link href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            
            {/* <Link href="/about" className="text-white block px-3 py-2 rounded-md text-base font-medium">
              About Us
            </Link> */}
            <Link href="/certificate" className="text-white block px-3 py-2 rounded-md text-base font-medium">
              Certificate
            </Link>

            <div className="relative">
              <button 
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className="text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left flex justify-between items-center"
              >
                About
                <ChevronDown className={`h-4 w-4 transform ${isAboutOpen ? 'rotate-180' : ''} transition-transform duration-200`} />
              </button>
              {isAboutOpen && (
                <div className="pl-4">
                  <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-white">
                    About US
                  </Link>
                  <Link href="/terms" className="block px-3 py-2 rounded-md text-base font-medium text-white">
                    T&C
                  </Link>
                  <Link href="/privacy" className="block px-3 py-2 rounded-md text-base font-medium text-white">
                    Privacy Policy
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button 
                onClick={() => setIsAboutOpen4(!isAboutOpen4)}
                className="text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left flex justify-between items-center"
              >
                Services
                <ChevronDown className={`h-4 w-4 transform ${isAboutOpen4 ? 'rotate-180' : ''} transition-transform duration-200`} />
              </button>
              {isAboutOpen4 && (
                <div className="pl-4">
                  <Link href="/products" className="block px-3 py-2 rounded-md text-base font-medium text-white">
                    Our Products
                  </Link>
                  <Link href="/services" className="block px-3 py-2 rounded-md text-base font-medium text-white">
                    Our Service
                  </Link>
                  {/* <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-white">
                    Privacy Policy
                  </Link> */}
                </div>
              )}
            </div>

            <Link href="/gallery" className="text-white block px-3 py-2 rounded-md text-base font-medium">
                Gallery
            </Link>

          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <Link 
            href="/contact"
            className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-base font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </Element>
  )
}