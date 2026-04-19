import FeaturedSurahs from "./components/home/FeaturedSurahs";
import Footer from "./components/ui/Footer";
import HeroBanner from "./components/home/HeroBanner";
import Navbar from "./components/ui/Navbar";
import StatsSection from "./components/home/StatsSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar></Navbar>
      <HeroBanner></HeroBanner>
      <FeaturedSurahs></FeaturedSurahs>
      <StatsSection></StatsSection>
      <Footer></Footer>
    </div>
  );
}
