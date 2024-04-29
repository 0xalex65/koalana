import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Mainboard from "@/components/Mainboard";
import RoadMap from "@/components/RoadMap";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import How2Buy from "@/components/How2Buy";
import RewardsCalculator from "@/components/RewardsCalculator";
import Tokenomics from "@/components/Tokenomics";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className="min-h-screen bg-[#FFF7EB] text-dark pt-[150px] pb-[65px] overflow-x-hidden"
      id="home"
    >
      <img src="/bg.png" className="absolute top-0 w-full" />
      <Header />
      <div className="w-full max-w-container mx-auto grid gap-[100px] px-5 md:px-[50px] relative z-10">
        <Mainboard />
        <RoadMap />
        <RewardsCalculator />
        <Tokenomics />
        <How2Buy />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
