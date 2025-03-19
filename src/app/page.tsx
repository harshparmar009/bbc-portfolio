
import Navbar from "@/components/pages/Navbar";
import Hero from "@/components/pages/Hero";
import Shops from "@/components/pages/Shops";
import HeroSection from "@/components/pages/HeroSection";
import Adventure from "@/components/pages/Adventure";
import Achieve from "@/components/pages/Achieve";
import Footer from "../components/pages/Footer";
import Facilities from "@/components/pages/Facilities";
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
    {/* <HeroSection/> */}
    <Adventure/> 
    
    
    {/* <Facilities/>
    <Achieve/>  */}
    <Footer/>
  </div>
  );
}
