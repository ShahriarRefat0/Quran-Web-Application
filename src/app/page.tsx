import FeaturedSurahs from "./components/FeaturedSurahs";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import StatsSection from "./components/StatsSection";

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
