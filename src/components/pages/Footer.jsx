import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 pt-[25px] px-5 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        
        {/* Left Section */}
        <div>
          <Image
            src="/logo/new-bbc.png"
            alt="BBC India Group Logo"
            width={1000}
            height={1000}
            className="w-[120px] mb-3"
          />
          <p className="text-sm text-gray-300 leading-relaxed">
            M/S BBC INDIA GROUP is engaged in Solar PV Modules and Renewable Energy System Design for over a decade. We deal in media, consultancy, solar photovoltaic modules, PV systems, and solar thermal systems. Our products are certified by national and international agencies, including ISO 9001:2015, ROHS, and CE.
          </p>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 gap-5 md:ml-8">
          <h3 className="font-semibold text-2xl text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-lg">
            <li><Link href="/about" className="hover:text-gray-400">About Us</Link></li>
            <li><Link href="/products" className="hover:text-gray-400">Our Products</Link></li>
            <li><Link href="/services" className="hover:text-gray-400">Our Services</Link></li>
            <li><Link href="/gallery" className="hover:text-gray-400">Gallery</Link></li>
            <li><Link href="/certificate" className="hover:text-gray-400">Certificates</Link></li>
            <li><Link href="/contact" className="hover:text-gray-400">Contact Us</Link></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className='flex h-full items-center justify-between flex-col'> 
         <div>
         <h3 className="font-semibold text-2xl text-white">Contact Us</h3>
          <p className="mt-3 text-lg text-gray-300">📧 Mail: bbcindiagrouphr@gmail.com</p>
          

          {/* Social Media Icons */}
          <div className="mt-6 flex space-x-6">
            <Link href="https://www.facebook.com/bbcindiagroup" target="_blank">
              <FaFacebookF className="text-white hover:text-blue-500 text-5xl cursor-pointer" />
            </Link>
            <Link href="https://wa.me/917015515121" target="_blank">
              <FaWhatsapp className="text-white hover:text-green-500 text-5xl cursor-pointer" />
            </Link>
          </div>
         </div>

          <div className='flex items-center justify-start gap-4 text-md mt-8'>
          <Link href="/privacy" className="hover:text-gray-400"> <h3>Privacy Policy</h3></Link>
          <Link href="/terms" className="hover:text-gray-400"> <h3>Terms & Condition</h3></Link>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-4 pt-5 text-center text-sm text-gray-400">
          <p > Created by <span className='hover:text-blue-800'>
            <Link href='https://jackinfosoft.com/' target="_blank" >www.jackinfosoft.com</Link> 
            </span> </p>
      </div>
    </footer>
  );
}
