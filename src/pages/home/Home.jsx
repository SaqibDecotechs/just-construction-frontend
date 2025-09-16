import React from 'react'
import NavbarHero from '../../component/navbar/NavBar'
import HeroSection from '../../component/home/HeroSection'
import MarketSectors from '../../component/marketSectors/MarketSectors'
import LatestOpportunities from '../../component/latestOpportunities/LatestOpportunities'
import WhyWorkWithUs from '../../component/whyWorkWithUs/WhyWorkWithUs'
import CoreValues from '../../component/coreValues/CoreValues'
import Testimonials from '../../component/testimonials/Testimonials'
import MeetTheTeam from '../../component/meetTheTeam/MeetTheTeam'
import SalaryGuide from '../../component/salaryGuide/SalaryGuide'
import IndustryNews from '../../component/industryNews/IndustryNews'
import Footer from '../../component/footer/Footer'

const Home = () => {
  return (
    <div>
      <NavbarHero />
      <HeroSection />
      <MarketSectors />
      <LatestOpportunities withBorder={true} />
      <WhyWorkWithUs />
      <CoreValues />
      <Testimonials />
      {/* <MeetTheTeam /> */}
      {/* <SalaryGuide /> */}
      {/* <IndustryNews /> */}
      <Footer />
    </div>
  )
}

export default Home
