import React from "react";
import Navbar from "@/components/pages/NewNav";
import Footer from "@/components/pages/Footer";

export default function PrivacyPolicy() {
  return (
    <div >
        <Navbar/>
    <div className="min-h-screen bg-gray-100 py-12 px-8">
      <h1 className="text-5xl font-bold text-center mb-8 text-gray-800">
        Privacy Policy
      </h1>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <p className="mb-4 text-lg text-gray-700">
          At <strong>BBC Group</strong>, your privacy is important to us. This policy explains how we collect, use, and protect your information when you engage with our services, particularly those related to solar energy solutions, including solar panels, arrays, and associated technologies.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          1. Information We Collect
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Personal Information:</strong> When you inquire about our solar panel products or request installation services, we may collect information such as your name, email, phone number, and address.
          </li>
          <li>
            <strong>Technical Information:</strong> We may gather data regarding your energy consumption needs, system configurations, and site conditions to provide tailored solar solutions.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-700">
          Your information allows us to offer customized solar solutions, including recommendations on the type of solar panels, system configurations, and installation options. Specifically:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Assessing your space and energy needs for system design.</li>
          <li>Recommending suitable products like monocrystalline, polycrystalline, or thin-film panels.</li>
          <li>Determining optimal panel configurations (series or parallel) for your solar array.</li>
          <li>Offering post-installation monitoring and maintenance services.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          3. Sharing Your Information
        </h2>
        <p className="text-gray-700">
          We only share your information with trusted partners and service providers involved in delivering solar energy solutions, such as:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Solar panel manufacturers and distributors.</li>
          <li>Installation teams and maintenance providers.</li>
          <li>Monitoring system providers for energy production tracking.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          4. Data Security and Retention
        </h2>
        <p className="text-gray-700">
          We take reasonable measures to protect your data from unauthorized access and misuse. Your information will be retained only as long as necessary to fulfill the purposes outlined in this policy.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          5. Your Rights
        </h2>
        <p className="text-gray-700">
          You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us directly.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          6. Monitoring and Maintenance
        </h2>
        <p className="text-gray-700">
          We monitor the performance of installed solar systems to ensure efficiency and sustainability. Regular maintenance services are provided to optimize energy production and extend the lifespan of the systems.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          7. Contact Us
        </h2>
        <p className="text-gray-700">
          If you have any questions about this privacy policy or our data practices, please contact us at:
        </p>
        <address className="text-gray-700">
          <strong>BBC Group</strong><br />
          Email: support@bbcgroup.com<br />
        </address>

        <footer className="mt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} BBC Group. All Rights Reserved.
        </footer>
      </div>
    </div>
        <Footer/> 
    </div>
  );
}
