import CardItems from "@/components/CardItems";
import HeroSection from "@/components/HeroSection";
import MiniSection from "@/components/MiniSection";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";


export default function Home() {
  return (
    <div className="w-full min-h-screen max-w-screen-2xl">
      <Navbar/>
      <HeroSection/>
      <MiniSection btnText="Gabung" title="Kenalin, Gojek. Si pembawa perubahan" bg="#111820" textColor="text-white"/>
      <Section/>
      <CardItems/>
    </div>
  );
}
