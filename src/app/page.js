import Image from "next/image";
import Header from "@/components/Header";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Conversation from "@/components/Conversation";
import Pricing from "@/components/Pricing";
export default function Home() {
  return (
    <>
     <Header/>
     <Services/>
     <AboutUs/>
     <Conversation/>
     <Pricing/>
     </>
  );
}
