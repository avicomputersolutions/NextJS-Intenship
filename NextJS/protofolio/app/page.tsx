import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import Services from "./_components/Services";
import Feedbacks from "./_components/Feedbacks";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Services/>
      <Feedbacks/>
    </div>
  );
}
