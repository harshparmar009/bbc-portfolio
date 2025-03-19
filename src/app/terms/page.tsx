import React from "react";
import Navbar from "@/components/pages/NewNav";
import Footer from "@/components/pages/Footer";

export default function TermsAndConditions() {
  return (
    <div>
        <Navbar/>
      <div className="min-h-screen bg-gray-100 py-12 px-8">
      <h1 className="text-5xl font-bold text-center mb-8 text-gray-800">
        Terms and Conditions
      </h1>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <p className="mb-4 text-lg text-gray-700">
          Welcome to <strong>BBC Group</strong>. By engaging with our solar energy solutions and services, you agree to the following terms and conditions. Please read them carefully.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          1. Scope of Services
        </h2>
        <p className="text-gray-700">
          Our services include the installation, maintenance, and monitoring of solar energy systems. We also offer consulting services for system design and site assessment to ensure maximum efficiency.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          2. Pricing and Payment
        </h2>
        <p className="text-gray-700">
          All services are subject to our pricing structure. Payments are due according to the schedule outlined in your agreement with us. We accept bank transfers, credit cards, and UPI payments.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          3. Warranty and Guarantees
        </h2>
        <p className="text-gray-700">
          We offer product warranties as provided by the manufacturer and guarantee our installation services for a specified period. Performance guarantees will vary depending on the system installed.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          4. Installation Process
        </h2>
        <p className="text-gray-700">
          The installation process includes a site assessment, equipment procurement, and installation. Timelines will be communicated during the planning stage, and any delays will be promptly addressed.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          5. Customer Responsibilities
        </h2>
        <p className="text-gray-700">
          The customer is responsible for providing site access, necessary permits, and any relevant documentation required for installation and operation.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          6. Liability Limitations
        </h2>
        <p className="text-gray-700">
          We are not liable for any damages arising from circumstances beyond our control, including but not limited to weather events, third-party actions, or customer negligence.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          7. Termination Conditions
        </h2>
        <p className="text-gray-700">
          Either party may terminate the agreement by providing written notice. Termination fees may apply based on the stage of service delivery and costs incurred.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          8. Maintenance and Support
        </h2>
        <p className="text-gray-700">
          We offer maintenance services to ensure the optimal performance of your solar system. Support options are available through our customer service team.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          9. Dispute Resolution
        </h2>
        <p className="text-gray-700">
          Any disputes will be resolved through negotiation, mediation, or arbitration, as agreed by both parties. If a resolution cannot be reached, the matter may be referred to the appropriate legal authorities.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          10. Governing Law
        </h2>
        <p className="text-gray-700">
          These terms and conditions are governed by the laws of India. Any legal disputes will be subject to the jurisdiction of the courts in the state where our company is registered.
        </p>

        <footer className="mt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} BBC Group. All Rights Reserved.
        </footer>
      </div>
      </div>
       <Footer/>
    </div>
  );
}
