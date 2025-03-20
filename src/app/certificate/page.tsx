// pages/certificate.tsx
import Image from 'next/image';
import React from 'react';
import Footer from '@/components/pages/Footer';
import Navbar from '@/components/pages/NewNav';

const CertificatePage = () => {
  return (
    <div>
        <Navbar/>
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl text-blue-800 font-bold text-center mb-6">Certificate of Authorization</h1>
      
      {/* Certificate Image */}
      <div className="bg-white shadow-lg p-6 rounded-lg mb-8 max-w-md">
        <Image
          src="/logo/TATA.jpg" // Replace with actual image path
          alt="Certificate"
          width={600}
          height={400}
          className="rounded"
        />
      </div>

      {/* Gallery Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Image src="/logo/ISRO.jpg" alt="Award 1" width={200} height={200} className="rounded-md shadow" />
        <Image src="/logo/CERTI.jpeg" alt="Award 2" width={200} height={200} className="rounded-md shadow" />
        <Image src="/logo/ROHS.jpg" alt="Award 3" width={200} height={200} className="rounded-md shadow" />
      </div>

      {/* Information Section */}
      <div className="bg-blue-100 p-6 rounded-lg max-w-2xl text-center">
        <h2 className="text-xl font-semibold mb-4">Why Solar?</h2>
        <ul className="list-disc list-inside text-left">
          <li><strong>Renewable Source:</strong> Solar energy is a sustainable option for the future.</li>
          <li><strong>Free of Cost:</strong> After setup, it reduces long-term energy expenses.</li>
          <li><strong>Eco-Friendly:</strong> Helps reduce the carbon footprint.</li>
          <li><strong>Low Maintenance:</strong> Requires minimal upkeep.</li>
        </ul>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default CertificatePage;
