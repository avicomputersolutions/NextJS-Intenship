import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import Services from "./_components/Services";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Services/>
    </div>
  );
}
