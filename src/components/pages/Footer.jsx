import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact</h3>
            <p>Mob: +91 7015515121 / +91 9991916016</p>
            {/* <p>Web: www.http//bbcindiagroup.com </p> */}
            <p>Mail: bbcindiagrouphr@gmail.com</p>
          </div>

          {/* Services Section */}
          

          {/* Image Grid */}
          <div className="grid grid-cols-3 gap-2">
            
    {
            [
  {
    title: 'Solar Panels Services',
    description: 'Expert installation and maintenance of solar panels for homes and businesses.',
    image: '/images/bbc-service.png',
  },
  {
    title: 'Life with Solar',
    description: 'Transition to renewable energy for a sustainable future.',
    image: '/images/bbc-eco.png',
  },
  {
    title: 'Renewable Energy Source',
    description: 'Harness the power of the sun for clean, green energy.',
    image: '/images/bbc-free.png',
  },
  {
    title: 'Free of Cost Energy',
    description: 'Solar energy is free harness it without limits.',
    image: '/images/bbc-energy.png',
  },
].map((item, index) => (
              <div key={index} className="bg-gray-700 aspect-square">
                <Image
                  src={item.image}
                  alt={`Image ${index + 1}`}
                  width={100}
                  height={100}
                  className="w-full rounded-md h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Question Section */}
        <div className="mt-8 flex items-center justify-center">
          <Image
            src="/logo/bbc-logo.jpg"
            alt="Company Logo"
            width={50}
            height={50}
            className="mr-4"
          />
          <p>Do You Have Any Questions? Then you can call or e-mail us</p>
        </div>

        {/* Bottom Links */}
        <div className="mt-8 flex flex-wrap justify-between items-center text-sm">
          <p> Created by <a href="https://jackinfosoft.com/" className='text-blue-500' >www.jackinfosoft.com</a> </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/terms" className="hover:underline">TERMS & CONDITIONS</Link>
            <Link href="/privacy" className="hover:underline">PRIVACY POLICY</Link>
            {/* <Link href="/sitemap" className="hover:underline">SITEMAP</Link> */}
          </div>
        </div>
      </div>
    </footer>
  )
}