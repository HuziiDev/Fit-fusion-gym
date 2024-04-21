import Image from "next/image";
import Header from "@/components/Header";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Conversation from "@/components/Conversation";
import Pricing from "@/components/Pricing";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div className="bg-black overflow-x-hidden">
     <Navbar/>
     <Header/>
     <Services/>
     <AboutUs/>
     <Conversation/>
     <Pricing/>
     </div>
  );
}
