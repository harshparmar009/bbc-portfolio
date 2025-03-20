
import Navbar from "@/components/pages/Navbar";
import Hero from "@/components/pages/Hero";
import Shops from "@/components/pages/Shops";
import Adventure from "@/components/pages/Adventure";
import Footer from "../components/pages/Footer";
import Service from "@/components/pages/Service";
import WhyYouChooseUs from "@/components/pages/WhyYouChooseUs";
import ProductServiceSection from "@/components/pages/ProductServiceSection";


export default function Home() {
  return (
  <div> 
    <Navbar/>
    <Hero/>
    <Shops/>
    <ProductServiceSection/>
    <WhyYouChooseUs/>
    <Service/>
    <Adventure/> 
    <Footer/>
  </div>
  );
}
