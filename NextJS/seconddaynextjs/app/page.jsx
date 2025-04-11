import Image from "next/image";
import NavBar from "./_components/Navbar";
import HeroSection from "./_components/HeroSection";
import ServicesSection from "./_components/ServicesSection";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection title="Home" page="" />
      <ServicesSection/>
    </div>
  );
}
