import FeatureSection from "@/components/sections/Features";
import HeroSection from "@/components/sections/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container flex items-center flex-col pb-11">
      <HeroSection />
      <FeatureSection />
    </div>
  );
}
