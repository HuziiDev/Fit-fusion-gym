import Image from "next/image";
import Header from "@/components/Header";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Conversation from "@/components/Conversation";
import Pricing from "@/components/Pricing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="bg-black overflow-x-hidden">
     
     <Header/>
     <Navbar/>
     
     <Services/>
     <AboutUs/>
     <Conversation/>
     <Pricing/>
     <Footer/>
     </div>
  );
}
