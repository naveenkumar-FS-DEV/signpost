import Accordian from "../Components/Accordian"
import Features from "../Components/Features"
import FeaturesCard from "../Components/FeaturesCard"
import HeroFourthSection from "../Components/HeroFourthSection"
import HeroSecondSection from "../Components/HeroSecondSection"
import HeroSection from "../Components/HeroSection"
import ScrollToTop from "../Components/ScrollToTop"
import TrustedPartners from "../Components/TrustedPartners"
import Working from "../Components/Working"

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TrustedPartners />
      <FeaturesCard />
      <Features />
      <HeroSecondSection />
      <Working />
      <Accordian />
      <HeroFourthSection />
      <ScrollToTop />
    </div>
  )
}

export default Home
